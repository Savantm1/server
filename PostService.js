import Post from "./Post.js";
import FileService from "./FileService.js";
//работа с бд
class PostService {
  // создание экземляра
  async create(post, picture) {
    const fileName = FileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    // получение всех экземпляров
    const Posts = await Post.find();
    return Posts;
  }

  async getOne(id) {
    // проверка на наличие
    if (!id) {
      throw new Error("id не указан");
    }
    // получение конкретного экземпляра
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    // проверка  на наличие
    if (!post._id) {
      throw new Error("id не указан");
    }
    // поиск конкретного экземпляра и изменение
    const updatePost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatePost;
  }

  async delete(id) {
    // проверка на наличие конкретного id
    if (!id) {
      throw new Error("Пользователь не найден");
    }
    // удаление экземпляра
    await Post.findOneAndDelete(id);
  }
}

export default new PostService();
