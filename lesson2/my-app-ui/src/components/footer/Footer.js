import PropTypes from "prop-types";

export const Footer = (props) => {
    const isActive = props.isActive;
    const testNumber = props.testNumber;

    const text = 'Footer';
    
    const firstPStyle = {
        color: 'green',
        marginBottom: 50 // === '50px'
    }

    const secondPStyle = {
        fontSize: isActive ? 30 : 15
    }

    // isActive ? 30 : 15 => якщо isActive=true - тоді 30, якщо false = 15
    
    return (
        <div style={ {backgroundColor: 'blue'} }>
            <p style={firstPStyle}>I am {text}</p>
            <p style={secondPStyle}>Welcome to my test app UI</p>
            <p>{testNumber}</p>
            {/* <p className={style['stat-list']}>Some test text</p> */}
        </div>
    )
}

Footer.propTypes = {
    isActive: PropTypes.bool.isRequired, // пропса обовязкова
    testNumber: PropTypes.number // пропса не обовязкова
};
