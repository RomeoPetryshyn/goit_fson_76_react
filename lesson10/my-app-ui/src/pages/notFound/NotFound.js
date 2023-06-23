import { useNavigate } from 'react-router-dom';

// state={{from: 'navBar'}}

import { Link } from 'react-router-dom';

function NotFound() {
    return <>
        <div>Page not found</div>
        <div>
            <Link to='/' state={{from: 'notFound'}}>Go back home</Link>
        </div>
    </>
}

export default NotFound;

// function NotFound() {
//     const navigate = useNavigate();
//     const goHomeHandler = () => navigate('/', { replace: true });

//     return <>
//         <div style={{marginTop: 10}}>Page not found</div>
//         <div style={{marginTop: 10}}>
//             <button onClick={goHomeHandler}>Go back home</button>
//         </div>
//     </>
// }

// import { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// function NotFound() {
//     const [goBackToHome, setGoBackToHome] = useState(false);
    
//     const goHomeHandler = () => setGoBackToHome(true);

//     if (goBackToHome) {
//         return <Navigate to="/" replace={true} />;
//     }

//     return <>
//         <div style={{marginTop: 10}}>Page not found</div>
//         <div style={{marginTop: 10}}>
//             <button onClick={goHomeHandler}>Go back home</button>
//         </div>
//     </>
// }

// import { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// function NotFound() {
//     return <Navigate to="/" replace={true} />;
// }

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function NotFound() {
//     const navigate = useNavigate();

//     useEffect(() => {
//         setTimeout(() => {
//             navigate('/', { replace: true });
//         }, 3000);
//     }, []);

//     return <>
//         <div style={{marginTop: 10}}>Page not found</div>
//     </>
// }



// export default NotFound;