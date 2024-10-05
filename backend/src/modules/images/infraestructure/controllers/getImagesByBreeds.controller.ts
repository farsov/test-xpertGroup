import { Request, Response } from 'express';
import axios from 'axios';

export class ImageController {
    async getImagesByBreedId(req: Request, res: Response) {
        const { breed_id } = req.query;

        if (!breed_id) {
            return res.status(400).json({ message: 'Breed ID is required' });
        }

        try {
            const response = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
                headers: {
                    'x-api-key': 'live_HnScCnvf3mO0h449eRz19Fbw7ZCSwxR3PmBkH4S0jVqS9uxukQPOpjMWvb61QsZu' // Tu clave API aquí
                },
                params: {
                    breed_id,
                    limit: 10
                }
            });

            if (response.data && response.data.length > 0) {
                res.status(200).json(response.data);
            } else {
                res.status(404).json({ message: 'No images found for this breed' });
            }
        } catch (error) {
            console.error('Error fetching images from The Cat API:', error);
            res.status(500).json({ message: 'Error fetching images from The Cat API' });
        }
    }
}