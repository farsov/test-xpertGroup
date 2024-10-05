import { Request, Response } from 'express';
import axios from "axios";

export class GetSearchBreedsController {
    async searchBreeds(req: Request, res: Response) {
        const { q } = req.query;
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const page = req.query.page ? Number(req.query.page) : 0;

        try {
            const response = await axios.get(`https://api.thecatapi.com/v1/breeds/search`, {
                headers: {
                    'x-api-key': 'live_HnScCnvf3mO0h449eRz19Fbw7ZCSwxR3PmBkH4S0jVqS9uxukQPOpjMWvb61QsZu'
                },
                params: {
                    q,
                    limit,
                    page
                }
            });

            console.log('Response from The Cat API:', response);

            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error searching breeds from The Cat API:', error);
            res.status(500).json({ message: 'Error searching breeds from The Cat API' });
        }
    }
}