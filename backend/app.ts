import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./src/utils/mongoDB";
import userRoutes from './src/config/routes';
import catRoutes from './src/config/routes';
import imagesRoutes from './src/config/routes';

dotenv.config();

connectDB()

const app = express();


app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/cats', catRoutes);
app.use('/api/images', imagesRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor Express');
});

// Usar el puerto especificado en el archivo .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});