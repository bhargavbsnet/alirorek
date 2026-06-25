import { PrismaClient } from "@prisma/client";

// Global declaration for PrismaClient in development to prevent hot-reload duplicates
const globalForPrisma = global as unknown as { prisma: PrismaClient };

let dbClient: any;

const isDbConfigured = !!process.env.DATABASE_URL;

if (isDbConfigured) {
  if (process.env.NODE_ENV === "production") {
    dbClient = new PrismaClient();
  } else {
    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = new PrismaClient();
    }
    dbClient = globalForPrisma.prisma;
  }
} else {
  // Resilient memory mock store for build stability and preview environments
  console.warn("⚠️ DATABASE_URL is not configured. Falling back to in-memory store.");

  const inMemoryStore: Record<string, any[]> = {
    contactRequest: [],
    demoRequest: [],
    newsletterSubscriber: [],
    consultationBooking: [],
    resourceDownload: []
  };

  const createMockRepo = (modelName: string) => ({
    create: async (args: { data: any }) => {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date(),
        ...args.data
      };
      inMemoryStore[modelName].push(newItem);
      console.log(`[MockDB:${modelName}] Created:`, newItem);
      return newItem;
    },
    findMany: async (args?: any) => {
      return inMemoryStore[modelName] || [];
    },
    findUnique: async (args: { where: any }) => {
      const key = Object.keys(args.where)[0];
      const val = args.where[key];
      return (inMemoryStore[modelName] || []).find(item => item[key] === val) || null;
    },
    update: async (args: { where: any; data: any }) => {
      const key = Object.keys(args.where)[0];
      const val = args.where[key];
      const index = (inMemoryStore[modelName] || []).findIndex(item => item[key] === val);
      if (index > -1) {
        inMemoryStore[modelName][index] = { ...inMemoryStore[modelName][index], ...args.data };
        return inMemoryStore[modelName][index];
      }
      throw new Error(`Record not found in mock store for update.`);
    },
    delete: async (args: { where: any }) => {
      const key = Object.keys(args.where)[0];
      const val = args.where[key];
      const index = (inMemoryStore[modelName] || []).findIndex(item => item[key] === val);
      if (index > -1) {
        const deleted = inMemoryStore[modelName].splice(index, 1);
        return deleted[0];
      }
      throw new Error(`Record not found in mock store for delete.`);
    }
  });

  dbClient = {
    contactRequest: createMockRepo("contactRequest"),
    demoRequest: createMockRepo("demoRequest"),
    newsletterSubscriber: createMockRepo("newsletterSubscriber"),
    consultationBooking: createMockRepo("consultationBooking"),
    resourceDownload: createMockRepo("resourceDownload")
  };
}

export const db = dbClient;
export default db;
