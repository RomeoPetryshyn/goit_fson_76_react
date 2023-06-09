import React from 'react';

export function Result({ username, phoneNumber, email, description }) {
    function weirdRandomNumGenerator() {
        let randString = '';
        for(let i=0; i<1000; ++i) {
            randString += Math.floor(Math.random() * 10);
        }
        let num = 0;
        for(let j=0; j<100000000; ++j) {
            num += j;
        }
        randString+=num;
        return randString;
    }
    // const uniqId = weirdRandomNumGenerator(); - не продуктивно, треба зміна лиш при зміні username

    const uniqId = React.useMemo(
        () => weirdRandomNumGenerator(),
        [username, email]
    );

    return (
        <div>
            <div>User name: {username}</div>
            <div>Phone number: {phoneNumber}</div>
            <div>Email: {email}</div>
            <div>Description: {description}</div>
            <div>Uniq user ID: {uniqId}</div>
        </div>
    )
}




function weirdRandomNumGenerator() {
    let randString = '';
    for(let i=0; i<1000; ++i) {
        randString += Math.floor(Math.random() * 10);
    }
    let num = 0;
    for(let j=0; j<100000000; ++j) {
        num += j;
    }
    randString+=num;
    return randString;
}
