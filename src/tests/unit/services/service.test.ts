import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import Car from '../../../models/Car';
import CarService from '../../../services/Car';
import { testCar, testCarId} from './../mock/carMock';

describe('Frame Service', () => {
	const carModel = new Car();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(testCarId);
		sinon.stub(carModel, 'readOne')
		  .onCall(0).resolves(testCarId)
			.onCall(1).resolves(null);
    sinon.stub(carModel, 'read').resolves([testCarId])
	});

	after(() => sinon.restore());

	describe('Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(testCar);

			expect(carCreated).to.be.deep.equal(testCarId);
		});

		it('Failure', async () => {
      let error;
			try {
				await carService.create({...testCar, doorsQty: 10});
			} catch (err) {
        error = err;
			}
      expect(error).to.be.instanceOf(ZodError);
		});
	});

// 	describe('ReadOne Frame', () => {
// 		it('Success', async () => {
// 			const frameCreated = await carService.readOne(testCarId._id);

// 			expect(frameCreated).to.be.deep.equal(frameMockWithId);
// 		});
// 		it('Failure', async () => {
//      let error;
// 			try {
// 				await carService.readOne(frameMockWithId._id);
// 			} catch (err: any) {
//        error = err;
// 			}
//      expect(error, "error should not be undefined").not.to.be.undefined;
// 			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
// 		});
// 	});

// 	describe('Update Frame', () => {
// 		it('Success', async () => {
// 			const frames = await carService.update(frameMockWithId._id, frameMock);
// 			expect(frames).to.be.deep.equal(frameMockWithId);
// 		});

// 		it('Failure: invalid body', async () => {
//      let error;
// 			try {
// 				await carService.update(frameMockWithId._id, frameMockInvalid as any);
// 			} catch (err: any) {
//        error = err;
// 			}
//      expect(error).to.be.instanceOf(ZodError);
// 		});
// 		it('Failure id not found', async () => {
//      let error;
// 			try {
// 				await carService.update(frameMockWithId._id, frameMock);
// 			} catch (err: any) {
//        error = err;
// 			}
//      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
// 		});
// 	});

    describe('Read Frames', () => {
      it('Success', async () => {

        const cars = await carService.read();
        expect(cars).to.be.deep.equal([testCarId]);
      });
    });
});