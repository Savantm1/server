import Router from "express";
import PostController from "./PostController.js";
// создаем роутер
const router = new Router();
// описываем работу роутов
router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts/:id", PostController.update);
router.delete("/posts/:id", PostController.delete);

export default router;
