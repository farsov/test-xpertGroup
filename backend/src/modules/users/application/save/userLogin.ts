import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from '../../domain/userModel';
import userRepository from '../../infraestructure/persistence/userRepository';

export class UserLoginService {
    async authenticate(email: string, password: string): Promise<{ token: string, user: IUser }> {
        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'secretkey', {
            expiresIn: '1h',
        });

        return { token, user };
    }
}