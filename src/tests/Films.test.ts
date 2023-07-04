import * as chai from 'chai';
import fs from 'fs';
import * as sinon from 'sinon';
import request from "supertest";

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import FilmsController from '../database/controllers/Films.controller';
import FilmsModel from '../database/models/Films.model';


import { Response } from 'express';
import { Model } from 'sequelize';
import { getAll } from './mocks/getAll.mock';
const kikis = fs.readFileSync(`./imgs/kikis.jpg`);

const sandbox = sinon.createSandbox();

chai.use(chaiHttp);

const { expect } = chai;

describe('Verificando rota geral', () => {
  afterEach(function () {
    sinon.restore();
    sandbox.restore();
  });

  // -------------------Rotas-------------------
  describe('Retorna o valor correto na rota: ', function () {
    it('/', async function () {
      // arrange
      sinon.stub(Model, 'findAll').resolves(getAll as FilmsModel[]);

      // act
      const result = await request(app).get("/") as unknown as Response & {body: any, statusCode: any};

      // assert
      expect(result.statusCode).to.deep.equal(200);
      expect(result.body).to.deep.equal(getAll)
    });

    it('/images/:url', async function () {
      // arrange
      sinon.stub(FilmsController.prototype, 'getImage').returns(Promise.resolve(kikis));

      // act
      const result = await request(app).get("/images/kikis.jpg") as unknown as Response & {body: any, statusCode: any};

      // assert
      expect(result.statusCode).to.deep.equal(200);
      expect(result.body).to.deep.equal(kikis)
    });
  });
});