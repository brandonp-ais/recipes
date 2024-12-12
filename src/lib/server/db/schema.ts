import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user_table = sqliteTable('user', {
	id: integer('id').primaryKey(),
	age: integer('age'),
	name: text('name'),
	email: text('email'),
});

export const comments_table = sqliteTable('comments', {
	id: integer('id').primaryKey(),
	comment: text('comment'),
	name: text('name'),
	recipe_id: integer('recipe_id'),
	created_at: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
});

export type CommentCreate = typeof comments_table.$inferInsert;

export type Comment = typeof comments_table.$inferSelect;
