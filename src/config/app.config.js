import { config } from "dotenv";
export const PATHS = [`.env.${process.env.NODE_ENV}.local`, ".env"];

config({ path: PATHS });

export const { NODE_ENV, PORT, DATABASE_URL } = process.env;
