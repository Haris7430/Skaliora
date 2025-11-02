
import {Request,Response} from "express";
import { TaskRepository } from "@infra/repositories/TaskRepository";
import { CreateTaskUseCase } from "@app/use-cases/CreateTaskUseCase";
import { ListTaskUseCase } from "@app/use-cases/ListTaskUseCase";
import { UpdateTaskUseCase } from "@app/use-cases/UpdateTaskUseCase";
import { DeleteTaskUseCase } from "@app/use-cases/DeleteTaskUseCase";

const taskRepo= new TaskRepository();


export class TaskController {
    static async create(req: Request, res:Response) {
        try {
            const {title,description,userId}= req.body;
            const useCase= new CreateTaskUseCase(taskRepo);
            const task= await useCase.execute(title, description, userId);
            res.status(201).json(task);
        } catch (err:any) {
            res.status(400).json({error: err.message + " error occured"})
        }
    };

    static async list(req:Request, res:Response) {
        try{
            const userId= Number(req.query.userId);
            const useCase= new ListTaskUseCase(taskRepo);
            const tasks= await useCase.execute(userId);
            res.status(200).json(tasks);
        } catch (err: any) {
            res.status(400).json({error:err.message});
        }
    };


    static async update(req:Request, res:Response) {
        try {
            const {id}= req.params;
            const {title, description, isCompleted}= req.body;
            const useCase= new UpdateTaskUseCase(taskRepo);
            const updateTask= await useCase.execute(Number(id),{title,description,isCompleted});
            res.status(200).send(updateTask);
        } catch(err:any) {
            res.status(400).json({error:err.message})
        }
    };

    static async remove(req:Request, res:Response) {
        try{
             const {id} = req.params;
             const useCase= new DeleteTaskUseCase(taskRepo);
             await useCase.execute(Number(id));
             res.status(204).send();
        } catch(err:unknown) {
            if(err instanceof Error) {
                res.status(400).json({error:err.message})
            } else {
                res.status(400).json({error:"Error Occured while removing..."})
            }
        }
    }


}