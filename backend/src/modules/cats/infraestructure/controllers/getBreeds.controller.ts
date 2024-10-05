import { Request, Response } from 'express';
import axios from "axios";

export class GetBreedsController {
    async getBreeds(req: Request, res: Response) {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
                headers: {
                    'x-api-key': 'live_HnScCnvf3mO0h449eRz19Fbw7ZCSwxR3PmBkH4S0jVqS9uxukQPOpjMWvb61QsZu'
                }
            });
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error fetching data from The Cat API:', error);
            res.status(500).json({ message: 'Error fetching data from The Cat API' });
        }
    }
}