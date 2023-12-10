# Поект MESTO 
"Mesto" - это интерактивная страница, где пользователи могут делиться фотографиями. Данная работа переведена на фреймворк React. 

### Функционал:
Авторизация и регистрация пользователей, добавление и удаление фотографии, "Лайк" для фотографии, редактирование профиля пользователя, данные хранятся на сервере и загружаются с сервера, валидация форм на стороне клиента

### Технологии:
* Flexbox
* Grid Layout
* Positioning Elements
* Animation and Transform using CSS
* BEM Methodology
* File Structure and File Paths (Nested BEM)
* Git
* JavaScript (Asynchronous JS, OOP, Fetch API)
* Webpack
* React JS
* Functional Components
* Client-side form validation (custom hook)

### Инструкция по установке:

```

git clone https://github.com/MelnikovAleksei/react-mesto-auth.git

В директории проекта запустить приложение в режиме разработки:

npm install
npm start

```

### Будущая доработка проекта будет включать в себя:
создание сервера на Nodejs

### Языки:
JavaScript

### Библиотеки:
Reactjs

### Роуты для пользователей:
* GET /users - возвращает всех пользователей;
* GET /users/:userId - возвращает пользователя по переданному _id;
* POST /users - создает пользователя с переданными в теле запроса name, about и avatar;

### Роуты для карточек:
* GET /cards - возвращает все карточки из базы данных;
* POST /cards - создаёт карточку с переданными в теле запроса name и link. owner
* DELETE /cards/:cardId - удаляет карточку по переданному _id;


