import { Request, Response } from 'express';
import { UserRegisterController } from '../src/modules/users/infraestructure/controllers/userRegister.controller';
import { UserRegisterService } from '../src/modules/users/application';


jest.mock('../src/modules/users/application');

describe('UserRegisterController', () => {
    let userRegisterController: UserRegisterController;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        userRegisterController = new UserRegisterController();
        req = {
            body: {
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
            },
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it('should register a user successfully', async () => {
        const mockUser = { id: '1', ...req.body };
        (UserRegisterService.prototype.register as jest.Mock).mockResolvedValue(mockUser);

        await userRegisterController.execute(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockUser);
    });

    it('should return 400 if registration fails', async () => {
        (UserRegisterService.prototype.register as jest.Mock).mockRejectedValue(new Error('Registration failed'));

        await userRegisterController.execute(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'no encontrado' });
    });
});