import { pgTable, serial, text, varchar, boolean } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formdata: varchar('formdata').notNull(),
  aiResponse: text('aiResponse'),
  templateSlug: varchar('templateSlug').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt'),
});

// Add this for UserSubscription:
export const UserSubscription = pgTable('userSubscription', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }),
  userName: varchar('userName', { length: 255 }),
  active: boolean('active'),
  paymentId: varchar('paymentId', { length: 255 }),
  joinDate: varchar('joinDate', { length: 255 }),
});