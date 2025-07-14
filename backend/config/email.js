import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// ⏬ Yeh ES Modules me __dirname nikalne ka sahi tarika hai
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⏬ Yeh .env file ko backend/config se ek level upar root me locate karega
dotenv.config({ path: path.resolve(__dirname, '../.env') });



const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: parseInt(process.env.EMAIL_PORT) === 465, // ✅ true if using port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default transporter;
