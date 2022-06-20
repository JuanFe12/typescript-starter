import { UserEntity } from '../user/entities/user.entities';
import { BrandEntity } from '../brand/entities/brand.entities';
import { CategoryEntity } from '../category/entities/category.entities';


import { DataSource } from 'typeorm';

export const Appdatasource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  port: 3306,
  entities: [UserEntity, BrandEntity, CategoryEntity],
  database: 'control_inventario_v2',
  logging: true,
  synchronize: true
})