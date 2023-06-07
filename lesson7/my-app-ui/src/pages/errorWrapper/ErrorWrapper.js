import React from 'react';

function ErrorWrapper({isError, children}) {
    if (isError) {
        return <>Ooops! Something went wrong!</>
    }

    return <>{children}</>
}

export default ErrorWrapper;
