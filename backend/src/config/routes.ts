import { Router } from 'express';
import {UserLoginController, UserRegisterController} from "../modules/users/infraestructure/controllers";
import {
    GetBreedsByIdController,
    GetBreedsController,
    GetSearchBreedsController
} from "../modules/cats/infraestructure/controllers";
import {verifyToken} from "../utils/verifyToken";
import {ImageController} from "../modules/images/infraestructure/controllers/getImagesByBreeds.controller";

const router = Router();

const userRegisterController = new UserRegisterController();
const userLoginController = new UserLoginController();
const getBreedsController = new GetBreedsController();
const breedsByIdController = new GetBreedsByIdController();
const searchBreedsController = new GetSearchBreedsController();
const imageController = new ImageController();

// Ruta para registrar usuarios
router.post('/register', userRegisterController.execute.bind(userRegisterController));
router.post('/login', userLoginController.login.bind(userLoginController));

// Rutas para modulo de cats
router.get('/breeds', verifyToken, getBreedsController.getBreeds.bind(GetBreedsController));
router.get('/breeds/:breed_id', verifyToken, breedsByIdController.getBreedById.bind(GetBreedsByIdController));
router.get('/breeds/search', verifyToken, searchBreedsController.searchBreeds.bind(GetSearchBreedsController));

// Rutas para modulo de imagenes
router.get('/imagesbybreedid', verifyToken, imageController.getImagesByBreedId.bind(ImageController));


export default router;