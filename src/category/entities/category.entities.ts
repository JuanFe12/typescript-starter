import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from "../../product/entities/product.entities";

@Entity({ name: "category" })
export class CategoryEntity extends BaseEntity {
  @Column()
  categoryName!: string;

}