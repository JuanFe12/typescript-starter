import { BrandEntity } from './../../brand/entities/brand.entities';
import { UserEntity } from './../../user/entities/user.entities';
import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
//import { CategoryEntity } from "../../category/entities/category.entities";

@Entity({ name: "product" })
export class ProductEntity extends BaseEntity {
  @Column()
  productName!: string;

  @Column()
  amount!: number;

  @Column()
  price!: number;

  @Column({nullable: true})
  stock!: number;

  @OneToMany(() => BrandEntity, (brand) => brand.product)
  @JoinColumn({ name: "brand_id" })
  brand!: BrandEntity;

}