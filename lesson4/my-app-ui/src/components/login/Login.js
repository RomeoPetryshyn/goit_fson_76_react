import React from 'react';

// Початковий стейт (дефолтний стейт)
const INITIAL_STATE = {
    email: '',
    password: '',
    agreed: false
}

class Login extends React.Component {
    // оголошення стейту
    state = {
        ...INITIAL_STATE
    }

    // відправляє всю форму, діставши поля форми зі стейту
    handleSubmit = (event) => {
        console.log({ event, state: this.state }, 'handleSubmit');

        event.preventDefault();
        // дістаємо емейл і пароль зі стейту
        const { email, password } = this.state;
        // логуємо емайл і пароль
        console.log('Sending email and password', {email, password});
        // скидаємо стейт до початкового (дефолтного значення)
        this.setState({ ...INITIAL_STATE });
    }

    // записує поля з input в наш стейт
    handleInputChange = (event) => {
        console.log({ event, state: this.state }, 'handleInputChange');
        // дістаємо імя та значення поля input з нашого event (події)
        const { name, value } = event.target;
        // записуємо значення поля інпут в наш стейт
        this.setState({ [name]: value });
    }

    // записує в стейт чи натиснув користувач на Agree чекбокс
    handleCheckboxChange = (event) => {
        console.log({ event, state: this.state }, 'handleCheckboxChange');
        // записуємо результат чекбоксу у наш стейт (поле стейту називається agreed)
        this.setState({ agreed: event.target.checked }); 
    }

    // кінцева функція відображення компонента
    render() {
        // дістаємо поле емейл, пароль, і agreed (чекбокс) зі стейту
        const { email, password, agreed } = this.state;

        console.log({ email, password, agreed }, 'render');

        return (
            <div style={{marginTop: 100}}>
                {/* При сабміті форми викликаємо метод handleSubmit */}
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder='email' 
                        type="text" 
                        name="email" 
                        // при зміні поля email викликаємо handleInputChange
                        onChange={this.handleInputChange}
                        // значення поля = значення стейту
                        value={email}
                    />
                    <input 
                        placeholder='password' 
                        type="text" 
                        name="password" 
                        // при зміні поля password викликаємо handleInputChange
                        onChange={this.handleInputChange}
                        // значення поля = значення стейту
                        value={password}
                    />

                <label>
                Agree to terms
                    <input
                        type="checkbox"
                        // значення поля = значення стейту
                        checked={agreed}
                        // при зміні поля чекбокса викликаємо handleCheckboxChange
                        onChange={this.handleCheckboxChange}
                    />
                </label>

                    {/* При натисканні на кнопку відпрацьовує onSubmit форми */}
                    <button disabled={!agreed} type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;