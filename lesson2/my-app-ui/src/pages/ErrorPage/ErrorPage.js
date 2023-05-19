import PropTypes from "prop-types";

function ErrorPage({ errorType, children }) {
    const errorPageStyle = {
        color: getErrorTextColor(errorType)
    }
    return (
        <div style={errorPageStyle}>
            {children}
        </div>
    )
    // ===
    // return <div style={ {color: getErrorTextColor(errorType)} }>
    //     {children}
    // </div>
}

export default ErrorPage;

ErrorPage.propTypes = {
    errorType: PropTypes.string
}

const getErrorTextColor = (errorType) => {
    switch (errorType) {
        case 'warning':
            return 'yellow';
        case 'error':
            return 'red';
        default:
            return 'red';
    }
    // if (type === 'warning') {
    //     return 'yellow';
    // }
    // if (type === 'error') {
    //     return 'red';
    // }
    // return 'red';
}
