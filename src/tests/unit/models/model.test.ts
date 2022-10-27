// ./src/tests/unit/models/lens.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import Car from '../../../models/Car';
import { Model } from 'mongoose';
import {
	testCar,
	testCarId,
} from '../mock/carMock';

describe('cars Model', () => {
	const carModel = new Car();

	before(() => {
		sinon.stub(Model, 'create').resolves(testCarId);
        sinon.stub(Model, 'findOne').resolves(testCarId);
        sinon.stub(Model, 'find').resolves([testCarId]);
	});

	after(() => {
		sinon.restore();
	});

	describe('creating a cars', () => {
		it('successfully created', async () => {
			const car = await carModel.create(testCar);
			expect(car).to.be.deep.equal(testCarId);
		});
	});

    describe('searching a car', () => {
        it('successfully found', async () => {
          const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
          expect(carFound).to.be.deep.equal(testCarId);
        });
      
        it('_id not found', async () => {
          try {
            await carModel.readOne('123ERRADO');
          } catch (error: any) {
            expect(error.message).to.be.eq('InvalidMongoId');
          }
        });
      });

      describe('searching all cars', () => {
        it('successfully found', async () => {
          const carsFound = await carModel.read();
          expect(carsFound).to.be.deep.equal([testCarId]);
        });
      });
});