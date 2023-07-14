import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true });
        }, 3000);
    }, []);

    return <>
        <div style={{marginTop: 10}}>Page not found</div>
    </>
}

export default NotFound;