import React, { Component } from 'react';

// клас Car наслідує React.Component
class Car extends Component {
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
        const { brand } = this.props;
        // повертаємо розмітку
        return (
            <div>
                <h1>My Car is {brand}</h1>
            </div>
        );
    }
}

export default Car;





// App.js
<Car brand={"Tesla"} />














//
function test () {
    return 1 + 2;
}

test; // Function
test(); // Результат виконання функції -> 3

//
state = {
    test: 1
}

this.state.test = 2; // Мутація (не вірно)
this.setState({ test: 2 }) // вірно


//
state = {
    test: 2,
    // не змінюється доки ми його не змінюємо самі в коді
    something: 10
}
this.setState({ test: 3 }); // просто змінили значення стейт змінної тест на 3 без урахування попереднього значення.
this.setState((prevState) => {
    // ми змінюємо стейт змінну test на попереднє значення змінної + 1
    return { test: prevState.test + 1 };
});
this.state.something // 10
this.setState({
    test: 100,
    something: 200
})
this.state.test // 100
this.state.something // 200















// Просто змінюємо стан стейт змінної test
this.setState({ 
    test: 2
})


// Змінюємо стан стейн змінної тест відповідно до попереднього стану (в залежності від попереднього стану)
this.setState((prevState) => {
    return { test: prevState.test + 1 };
});




















