
import { ITaskRepository } from "@domain/repositories/ITaskRepository";

export class DeleteTaskUseCase {
    constructor(private taskRepo:ITaskRepository) {};

    async execute(id: number) {
        await this.taskRepo.delete(id);
    }
}