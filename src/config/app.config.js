import { config } from "dotenv";

config({ path: [`.env.${process.env.NODE_ENV}.local`, ".env"] });

export const { NODE_ENV, PORT } = process.env;
