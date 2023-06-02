import React from 'react';

class ErrorWrapper extends React.Component {

    render() {
        const { isError, children } = this.props;

        if (isError) {
            return <>Ooops! Something went wrong!</>
        }

        return <>{children}</>
    }
}

export default ErrorWrapper;