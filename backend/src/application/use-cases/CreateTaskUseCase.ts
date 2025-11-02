

import { ITaskRepository } from "@domain/repositories/ITaskRepository";
import { Task } from "@domain/entities/Task";

export class CreateTaskUseCase {
    constructor(private taskRepo:ITaskRepository){};

    async execute(title: string, description:string, userId:number) {
        const task= new Task();

        task.title= title;
        task.description= description;
        task.isCompleted= false;
        task.user= {id:userId} as any;
        return await this.taskRepo.create(task);
    }
}