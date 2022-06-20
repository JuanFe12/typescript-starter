import { BrandEntity } from './../../brand/entities/brand.entities';
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column({ select: false })
  password!: string;

  @OneToMany(() => BrandEntity, brand => brand.user, {cascade: true})
  @JoinColumn({ name: "brand_id" })
  brand: BrandEntity[];
}