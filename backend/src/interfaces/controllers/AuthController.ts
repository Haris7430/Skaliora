
import {Request, Response} from 'express';
import { RegisterUserUseCase } from '@app/use-cases/RegisterUserUseCase';
import { LoginUserUseCase } from '@app/use-cases/LoginUserUseCase';
import { UserRepository } from '@infra/repositories/UserRepository';

const userRepo = new UserRepository();

export class AuthController {
    static async register(req: Request, res:Response) {
        try{
            const useCase= new RegisterUserUseCase(userRepo);
            const user= await useCase.execute(req.body.name,req.body.email,req.body.password);
            res.status(201).json(user);
        } catch(err:unknown) {
            if(err instanceof Error) {
                res.status(400).json({error:err.message});
            } else {
                res.status(400).json({error:"Unkown error ocuured"})
            }
        }
    }

    static async login(req:Request, res:Response) {
        try{
            const useCase= new LoginUserUseCase(userRepo);
            const data= await useCase.execute(req.body.email,req.body.password);
            res.status(200).json(data)
        } catch(err:unknown) {
            if(err instanceof Error) {
                res.status(400).json({error:err.message})
            } else {
                res.status(400).json({error:"Unknown error occured"})
            }
            
        }
    }
}