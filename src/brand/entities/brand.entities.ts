import { ProductEntity } from './../../product/entities/product.entities';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entities";

@Entity({ name: "brands" })
export class BrandEntity extends BaseEntity {

  @Column() 
  name!: string;

  @ManyToOne(() => UserEntity, user => user.brand)
  @JoinColumn({ name: "user_id" })
  user: UserEntity;

  @OneToMany(() => ProductEntity, product => product.brand, {cascade: true})
  @JoinColumn({ name: "product_id" })
  product: ProductEntity[];


}