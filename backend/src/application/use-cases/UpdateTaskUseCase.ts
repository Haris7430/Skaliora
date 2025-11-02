
import { ITaskRepository } from "@domain/repositories/ITaskRepository";
import { Task } from "@domain/entities/Task";

export class UpdateTaskUseCase {
    constructor(private taskRepo: ITaskRepository) {}

    async execute(id:number, update: Partial<Task>) {
        const tasks= await this.taskRepo.findAllByUser(update.user?.id!);
        const task= tasks.find(t=> t.id === id);
        if(!task) throw new Error('Task not found');

        Object.assign(task, update);
        return await this.taskRepo.update(task);
   
    }
}