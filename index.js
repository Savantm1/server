//Главный файл. Здесь происходят подключения всех пакетов
import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

// Порт, на который будет подключаться сервер
const PORT = 5000;
// url подключение к базе данных с данными  пользователя
const urlDB =
  "mongodb+srv://savantm1:88002600@cluster0.xsdga.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// подключаем экспресс
const app = express();
// необходимо подключить для того, чтобы отображать данные в консоли
app.use(express.json());
// пакет для работы с файлами
app.use(fileUpload({}));
// пакет для подключения папки со статическими файлами
app.use(express.static("static"));
// подлкючение роутера
app.use("/api", router);

// функция для запуска сервера
async function startApp(req, res) {
  try {
    // подключение базы данных с помощью мангуса
    await mongoose.connect(urlDB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    // слушаем порт и в случае запуска, то выводится в консоль строка
    app.listen(PORT, () => {
      console.log("server working on PORT:" + PORT);
    });
  } catch (e) {
    res.status(500).json(e);
  }
}

// запуск функции
startApp();
