import { User, IUser, IUserInput } from '../../domain/userModel';  // Importa las interfaces y el modelo

class UserRepository {
    // Método para buscar usuario por email
    async findByEmail(email: string): Promise<IUser | null> {
        return await User.findOne({ email });
    }

    // Método para crear un nuevo usuario
    async create(userData: IUserInput): Promise<IUser> {
        const newUser = new User(userData);
        return await newUser.save();
    }
}

export default new UserRepository();