import { UserRouter } from './user/user.router';
import express from "express";
import cors from "cors";
import { ConfigServer } from './config/config';
import { DataSource } from 'typeorm';

export class Server extends ConfigServer{
    private port: number = this.getNumberEnv("PORT");
    private app!: express.Application;

    constructor (){
      super()
      this.createApp();
      this.config();
      this.dbConnect();
      this.app.use('/api', this.routers())
      this.runServer(); 
    }

    getApp(): express.Application{
        return this.app;
    }

    private createApp(): void{
        this.app = express();
    }

    private config():void {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routers(): Array<express.Router>{
      return [new UserRouter().router];
    }

    private runServer():void {
        this.app.listen(this.port,()=> console.log('Running on port', this.port))
    }

    async dbConnect(): Promise<DataSource | void> {
        return this.initConnect
          .then(() => {
            console.log("Connect Success");
          })
          .catch((err) => {
            console.error(err);
          });
      }}