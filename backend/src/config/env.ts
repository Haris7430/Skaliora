import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,

  DB: {
    HOST: process.env.DB_HOST!,
    PORT: Number(process.env.DB_PORT || 5432),
    USER: process.env.DB_USER!,
    PASS: process.env.DB_PASS!,
    NAME: process.env.DB_NAME!,
  },

  JWT_SECRET: process.env.JWT_SECRET || 'defaultSecret',
};
