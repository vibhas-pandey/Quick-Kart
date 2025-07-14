import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👇 Yeh ensure karega ke db.js bhi .env read kare
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    // console.log(
    //   `MongoDB connected successfully on host: ${connection.connection.host}, database: ${connection.connection.db.databaseName}`
    // );
    return connection;
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;


