import { ITaskRepository } from "@domain/repositories/ITaskRepository";

export class ListTaskUseCase {
    constructor(private taskRepo: ITaskRepository) {};

    async execute(userId:number) {
        return await this.taskRepo.findAllByUser(userId)
    }
};