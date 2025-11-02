
import { Task } from "@domain/entities/Task";

export interface ITaskRepository {
    create(task:Task): Promise<Task>;
    findAllByUser(userId:number): Promise<Task[] >;
    update(task:Task): Promise<Task >;
    delete(id:number): Promise<void>
}