import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
   @PrimaryGeneratedColumn("uuid")
   id!: string;
   
   @CreateDateColumn({
       name: "create_at",
       type: "timestamp"
   })
   createAt!: Date;

   @CreateDateColumn({
    name: "update_at",
    type: "timestamp"
   })
   updateAt!: Date;
}