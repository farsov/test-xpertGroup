import { Request, Response } from 'express';
import axios from "axios";

export class GetBreedsByIdController {
    async getBreedById(req: Request, res: Response) {
        const { breed_id } = req.params;
        try {
            const response = await axios.get(`https://api.thecatapi.com/v1/breeds/${breed_id}`, {
                headers: {
                    'x-api-key': 'live_HnScCnvf3mO0h449eRz19Fbw7ZCSwxR3PmBkH4S0jVqS9uxukQPOpjMWvb61QsZu'
                }
            });

            if (response.data) {
                res.status(200).json(response.data);
            } else {
                res.status(404).json({ message: 'Breed not found' });
            }
        } catch (error) {
            console.error('Error fetching breed from The Cat API:', error);
            res.status(500).json({ message: 'Error fetching breed from The Cat API' });
        }
    }
}