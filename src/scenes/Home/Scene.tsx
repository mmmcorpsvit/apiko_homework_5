import React, {Fragment} from "react";

const Scene: React.FC = () => {

    return (
        <Fragment>
            <div>Welcome to Home</div><br/>
            <code className="code" >
                Реалізувати невеликий тестовий додаток, використовуючи знання про React Router & Hooks:<br/><br/>
                При першому завантаженні додатку має відобразитись HomePage (URL: ‘/’), із навігаційною панеллю зверху NavBar, який
                складатиметься із 3 елементів - Home, Shop, Reviews. Сама сторінка складатиметься із простого тексту Welcome to Home.
                Клік на кнопку Home направлятиме на ту ж сторінку HomePage.<br/><br/>

                При кліку на кнопку Shop ми переходимо на сторінку ShopPage (URL: ‘/shop’), де зображено напис Welcome to Shop і кнопка
                Purchase. NavBar залишається зверху доступний. При кліку на кнопку Buy вискакує модалка із текстом
                There is no products now і кнопкою ОК, при натисканні на яку ми повертаємось на сторінку HomePage<br/><br/>

                При кліку на кнопку Reviews ми переходимо на сторінку ReviewsPage (URL: ‘/reviews’), де знаходиться звичайний text input.
                NavBar залишається зверху доступний. При введені тексту в поле інпуту і його Submit, текст добавляється списком знизу
                (схоже як ми робили ToDoList на заняттях - зберігаємо їх в localstorage). Кожен елемент списку - це посилання на
                сторінку окремого review - ReviewPage<br/><br/>

                При кліку на окремий елемент списку reviews ми переходимо на сторінку ReviewPage (URL: ‘/review/:reviewId’), де
                відображено текст review і кнопка Back. NavBar зверху більше недоступний. При кліку на кнопку Back повертаємось назад на
                сторінку ReviewsPage із знову доступним NavBar.
                <br/><br/>
                Завдання із зірочкою: Елемент NavBar має підсвічуватись, коли ми знаходимось на відповідній до URL сторінці

                <br/>
                <br/>
                <br/>

            </code>
            <div style={{height: 1000}}>Very long text test, must top after navigate!</div>
        </Fragment>
    )
};


export default Scene;
