// клас Car наслідує React.Component
class Car extends React.Component {
    // ініціалізація за допомогою конструктора який приймає обєкт параметрів props
    constructor(props) {
        // викликаємо конструктор батьківського класу React.Component з пропсами які нам передали
        // це стандартна процедура присутня у всіх класових компонентах
        // JavaScript не дозволить пряцювати з контекстом this в класі який наслідує інший клас
        // доки ми не викличемо super() - конструктор батька
        // Для тих кого цікавить дана інформація дуже глибоко - https://overreacted.io/why-do-we-write-super-props/
        super(props);
    }

    // метод render() у класових компонентах відповідає за кінцевий вивід розмітки (в функційних компонентах
    // ми використовували просто return)
    render() {
        // повертаємо розмітку
        return (
            <div>
                <h1>My Car is {brand}</h1>
            </div>
        );
    }
}