import { User } from '../entities/user.entities';
import { Repository } from "typeorm";


export class UserRepository extends Repository<User> {

    async createUser(user: User) {
        await this.save(user);
        return user;
    }
/*  
    async allUser():Promise<User[]>{
        let user = await this.find();
        return user;
    }

    async findOneUser(id:number):Promise<User>{

    let user = await this.findOne({ 
        where: { id: id }
    });
       return user;
    }
*/
}
