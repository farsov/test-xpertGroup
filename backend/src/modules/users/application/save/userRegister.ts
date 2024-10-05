import { IUser, IUserInput } from '../../domain/userModel';  // Usar IUserInput para la entrada de datos
import userRepository from '../../infraestructure/persistence/userRepository';
import bcrypt from 'bcrypt';

export class UserRegisterService {
    async register(userData: IUserInput): Promise<IUser | null> {

        const existingUser = await userRepository.findByEmail(userData.email);
        if (existingUser) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);  // 10 es el salt rounds (nivel de encriptación)

        const newUser = await userRepository.create({
            ...userData,
            password: hashedPassword,
        });
        return newUser;
    }
}

