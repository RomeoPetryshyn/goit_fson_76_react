import React from "react";
import UsersList from "./components/usersList/UsersList";
import ContactUs from "./components/contactUs/ContactUs";

class App extends React.Component {

  render() {
    return <>
      <div>I am app</div>
      <UsersList />
      <br /> <br /> <br /> <br />
      <ContactUs />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br />
    </>
  }
}

export default App;
