import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log('✅ MongoDB verbunden');
    } catch (error) {
        console.error('❌ Fehler beim Verbinden mit MongoDB:', error);
        process.exit(1);
    }
};
