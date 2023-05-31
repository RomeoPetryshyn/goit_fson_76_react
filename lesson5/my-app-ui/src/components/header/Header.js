import React from 'react';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            testNumber: 10
        }

        console.log('I am constructor', new Date().toISOString());
    }

    componentDidMount() {
        console.log('I am componentDidMount', new Date().toISOString());
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('I am componentDidUpdate', new Date().toISOString());
        console.log({ title: this.props.title, prevProps, prevState });
        // this.setState({ testNumber: 100 }); - так писати не можна, оновлення стейту лише за певної специфічної умови
        if (prevProps.title !== this.props.title) {
            this.setState({ testNumber: 100 });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log({ nextProps, nextState, currentProps: this.props });
        // if(nextProps.title !== this.props.title) {
        //     return false;
        // }
        // this.setState({ testNumber: 1000 }); - так писати не можна, оновлення стейту лише за певної специфічної умови
        console.log('I am shouldComponentUpdate', new Date().toISOString());
        return true;
    }

    componentWillUnmount() {
        console.log('I am componentWillUnmount', new Date().toISOString());
    }

    render() {
        console.log('I am render', new Date().toISOString());
        const { title } = this.props;
        const { testNumber } = this.state;
        return (
            <>
                I am header {title} . Test number: {testNumber}
            </>
        )
  }
}

export default Header;
