import { Request, Response } from 'express';
import {UserLoginService} from "../../application/save/userLogin";


export class UserLoginController {
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const userLoginService = new UserLoginService();
            const { token, user } = await userLoginService.authenticate(email, password);

            res.status(200).json({ token, user });
        } catch (error) {
            res.status(400).json({ message: 'no se puede iniciar sesion' });
        }
    }
}