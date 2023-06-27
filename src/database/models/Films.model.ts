import { DataTypes, Model } from "sequelize";
import database from './index';
import IFilms from "./interfaces/IFilms";

class FilmsModel extends Model implements IFilms {
  declare id:number;
  declare title:string;
  declare description:string;
  declare image:string;
}

FilmsModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: database,
  timestamps: false,
  tableName: 'films',
  underscored: true,
})

export default FilmsModel;