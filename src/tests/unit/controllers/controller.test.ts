import * as sinon from 'sinon';
import { expect } from 'chai';
import CarController from '../../../controllers/carController';
import { NextFunction, Request, Response } from 'express';
import { testCar, testCarId } from './../mock/carMock';
import CarService from '../../../services/Car';
import CarModel from '../../../models/Car';


describe('Frame Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;
  const next = (sinon.stub() as unknown) as NextFunction; //   não vamos usar mas poderíamos dublá-lo assim 

  before(() => {
    sinon.stub(carService, 'create').resolves(testCarId);
    sinon.stub(carService, 'read').resolves([testCarId]);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });
  after(() => {
    sinon.restore()
  })
  describe('Create Frame', () => {
    it('Success', async () => {
      req.body = testCar;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(testCarId)).to.be.true;
    });
  });
  describe('Read Frame', () => {
    it('Success', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([testCarId])).to.be.true;
    });
  });
});