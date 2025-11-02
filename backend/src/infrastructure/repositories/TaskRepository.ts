
import { AppDataSource } from "config/data-source";
import { Repository } from "typeorm";
import { Task } from "@domain/entities/Task";
import { ITaskRepository } from "@domain/repositories/ITaskRepository";

export class TaskRepository implements ITaskRepository {
    private repo: Repository<Task>= AppDataSource.getRepository(Task);

    async create(task:Task) {return await this.repo.save(task)};
    async findAllByUser(userId: number) {
        return await this.repo.find({where:{user:{id:userId}}})
    }
    async update(task:Task) {
        return await this.repo.save(task);
        
        
    };
    async delete(id:number) {await this.repo.delete(id)}
}