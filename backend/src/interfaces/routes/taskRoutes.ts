
import express from "express";
import { TaskController } from "@interfaces/controllers/TaskController";

const router= express.Router();

router.post("/", TaskController.create);
router.get("/", TaskController.list);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.remove);

export default router;