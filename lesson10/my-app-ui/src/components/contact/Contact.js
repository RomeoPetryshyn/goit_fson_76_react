import { useLocation, useSearchParams } from "react-router-dom";

function Contact() {
    // How to grab params from search address
    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get("type");
    console.log(type);


    // use location data (get state passed from Link)
    const location = useLocation();
    console.log({ location });
    return <>Contact us: 0-800-101010-100-800!!!</>
}

export default Contact;