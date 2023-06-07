import { useEffect } from "react";

function Header() {

    // on component will unmount
    useEffect(() => {
        return () => {
            // code here
            console.log('I am unmounting')
        }
    }, []);

    return <>I am header</>
}

export default Header;