import React from "react";
import UsersList from "./components/usersList/UsersList";
import ContactUs from "./components/contactUs/ContactUs";
import { useWindowSize } from "./hooks/useWindowSize";

function App () {
  const sizes = useWindowSize();
  console.log(sizes);

  return (
    <>
      <div>I am app</div>
      <UsersList />
      <br /> <br /> <br /> <br />
      <ContactUs />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
    </>
  )
}

export default App;
