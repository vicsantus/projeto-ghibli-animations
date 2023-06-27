import { Request, Response } from 'express';
import path from 'path';
import FilmsModel from '../models/Films.model';

class TeamsController {
  public getAll = async (_req: Request, res: Response) => {
    const films = await FilmsModel.findAll();
    res.status(200).json(films);
  };

  async getImage(req:Request, res:Response):Promise<void> {
    const { url } = req.params;
    return res.sendFile(path.resolve(`imgs/${url}`));
  }
}

export default TeamsController;