import { Request, Response } from 'express';
import { GetBreedsController } from '../src/modules/cats/infraestructure/controllers/getBreeds.controller'; // Ajusta la ruta según tu estructura
import axios from 'axios';
import {GetBreedsByIdController} from "../src/modules/cats/infraestructure/controllers";
import {ImageController} from "../src/modules/images/infraestructure/controllers";

jest.mock('axios');

describe('GetBreedsController', () => {
    let getBreedsController: GetBreedsController;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        getBreedsController = new GetBreedsController();
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it('should return breeds data successfully', async () => {
        const mockBreeds = [{ id: 'abys', name: 'Abyssinian' }];
        (axios.get as jest.Mock).mockResolvedValue({ data: mockBreeds });

        await getBreedsController.getBreeds(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockBreeds);
    });

    it('should handle errors when fetching breeds data', async () => {
        (axios.get as jest.Mock).mockRejectedValue(new Error('Network Error'));

        await getBreedsController.getBreeds(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching data from The Cat API' });
    });
});


describe('GetBreedsByIdController', () => {
    let getBreedsByIdController: GetBreedsByIdController;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        getBreedsByIdController = new GetBreedsByIdController();
        req = {
            params: {
                breed_id: 'abys',
            },
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it('should return breed data successfully', async () => {
        const mockBreedData = { id: 'abys', name: 'Abyssinian' };
        (axios.get as jest.Mock).mockResolvedValue({ data: mockBreedData });

        await getBreedsByIdController.getBreedById(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockBreedData);
    });

    it('should return 404 if breed is not found', async () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: null });

        await getBreedsByIdController.getBreedById(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'Breed not found' });
    });
});


describe('ImageController', () => {
    let imageController: ImageController;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        imageController = new ImageController();
        req = {
            query: {
                breed_id: 'abys',
            },
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it('should return images for a given breed ID', async () => {
        const mockImageData = [{ id: '123', url: 'https://test-cat.com/cat1.jpg' }];
        (axios.get as jest.Mock).mockResolvedValue({ data: mockImageData });

        await imageController.getImagesByBreedId(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockImageData);
    });

    it('should return 404 if no images are found', async () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [] });

        await imageController.getImagesByBreedId(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'No images found for this breed' });
    });
});