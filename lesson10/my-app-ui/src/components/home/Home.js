import { useLocation } from "react-router-dom";

function Home () {
    const location = useLocation();
    console.log({ location });
    return <>I am Home component</>
}

export default Home;