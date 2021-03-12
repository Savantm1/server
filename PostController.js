import PostService from "./PostService.js";

class PostController {
  // создание экземпляра
  async create(req, res) {
    try {
      console.log(req.files);
      // логика работы  с бд перенесена в файл Service
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  // получение всех существующих экземпляров
  async getAll(req, res) {
    try {
      // логика работы  с бд перенесена в файл Service
      const Posts = await PostService.getAll();
      return res.json(Posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  // получение конкретного экземпляра
  async getOne(req, res) {
    try {
      // логика работы  с бд перенесена в файл Service
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  // изменение конкретного экземляра
  async update(req, res) {
    try {
      // логика работы  с бд перенесена в файл Service
      const updatePost = await PostService.update(req.body);
      return res.json(updatePost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  // удаление экземпляра
  async delete(req, res) {
    try {
      // логика работы  с бд перенесена в файл Service
      await PostService.delete(req.params.id);
      return res.status(200).json({ message: `Пользователь удалён` });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
