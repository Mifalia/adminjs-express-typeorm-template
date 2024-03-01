import fs from 'fs';
import dotenv from 'dotenv';

// Vérifie si le fichier .env.local existe
if (fs.existsSync('.env.local')) {
  // Charge les variables d'environnement à partir de .env.local
  dotenv.config({ path: '.env.local' });
} else {
  // Charge les variables d'environnement à partir de .env
  dotenv.config();
}

export const DATABASE_URL = process.env.DATABASE_URL as string;
export const DATABASE_DIALECT = process.env.DATABASE_DIALECT as string;
export const DATABASE_NAME = process.env.DATABASE_NAME as string;
export const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
export const DATABASE_USER = process.env.DATABASE_USER as string;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD as string;
export const COOKIE_SECRET = process.env.COOKIE_SECRET as string;
export const PORT = process.env.PORT || 3000;
