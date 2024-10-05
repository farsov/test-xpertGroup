import { Request, Response } from 'express';
import { UserRegisterService } from "../../application";
import { IUserInput } from '../../domain/userModel';

export class UserRegisterController {
    async execute(req: Request, res: Response) {
        try {
            const { name, email, password }: IUserInput = req.body;
            const userRegisterService = new UserRegisterService();
            const newUser = await userRegisterService.register({ name, email, password });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: 'no encontrado'});
        }
    }
}
