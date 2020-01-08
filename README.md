## Завдання

Реалізувати невеликий тестовий додаток, використовуючи знання про React Router & Hooks:
При першому завантаженні додатку має відобразитись HomePage (URL: ‘/’), із навігаційною панеллю зверху NavBar, який 
складатиметься із 3 елементів - Home, Shop, Reviews. Сама сторінка складатиметься із простого тексту Welcome to Home. 
Клік на кнопку Home направлятиме на ту ж сторінку HomePage.
При кліку на кнопку Shop ми переходимо на сторінку ShopPage (URL: ‘/shop’), де зображено напис Welcome to Shop і кнопка 
Purchase. NavBar залишається зверху доступний. При кліку на кнопку Buy вискакує модалка із текстом 
There is no products now і кнопкою ОК, при натисканні на яку ми повертаємось на сторінку HomePage
При кліку на кнопку Reviews ми переходимо на сторінку ReviewsPage (URL: ‘/reviews’), де знаходиться звичайний text input. 
NavBar залишається зверху доступний. При введені тексту в поле інпуту і його Submit, текст добавляється списком знизу 
(схоже як ми робили ToDoList на заняттях - зберігаємо їх в localstorage). Кожен елемент списку - це посилання на 
сторінку окремого review - ReviewPage
При кліку на окремий елемент списку reviews ми переходимо на сторінку ReviewPage (URL: ‘/review/:reviewId’), де 
відображено текст review і кнопка Back. NavBar зверху більше недоступний. При кліку на кнопку Back повертаємось назад на 
сторінку ReviewsPage із знову доступним NavBar.

Завдання із зірочкою: Елемент NavBar має підсвічуватись, коли ми знаходимось на відповідній до URL сторінці

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Links

https://habr.com/ru/company/otus/blog/456124/
https://reach.tech/router/example/animation
https://www.npmjs.com/package/use-query-params#examples

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
