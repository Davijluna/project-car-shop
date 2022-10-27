import { Router } from 'express'; // ok

import Car from '../models/Car'; // ok
import CarService from '../services/Car'; // ok
import FrameController from '../controllers/carController'; // ok

// import { carZodSchema } from '../interfaces/ICar';
// carZodSchema > estava na linha 15
import ErrorController from '../controllers/Error';

const router = Router(); // ok 

const carModel = new Car(); //
const carService = new CarService(carModel); //
const carController = new FrameController(carService); // carZodSchema.

// Collection

// Create
router.post('/', (req, res) => carController.create(req, res));
// Read All
router.get('/', (req, res) => carController.read(req, res));
// router.put('/', (req, res, next) => ErrorController.notAllowed(req, res, next));
// router.delete('/', (req, res, next) => ErrorController.notAllowed(req, res, next));

// Resource

router.post('/:id', (req, res, next) => ErrorController.notAllowed(req, res, next));
// Read One
router.get('/:id', (req, res) => carController.readOne(req, res));
// Update
router.put('/:id', (req, res) => carController.update(req, res));
// Delete
router.delete('/:id', (req, res) => carController.delete(req, res));

export default router;