import React from "react";
import { Result } from "./components/result/Result";
import { useOutsideClick } from "./hooks/useOutsideClick";

function App() {
  const buttonRef = React.useRef();
  // const doNotClickButtonRef = React.useRef();
  
  useOutsideClick(() => {
    console.log('User clicked outside of allowed button');
  }, buttonRef);

  // useOutsideClick(() => {
  //   console.log('User clicked outside of NOT ALLOWED button');
  // }, doNotClickButtonRef);

  // React.useEffect(() => {
  //   console.log(buttonRef);
  //   // buttonRef.current.textContent = 'Click me now';
  //   // buttonRef.current.disabled = true;
  // }, []);



  return (
    <div>
      <button ref={buttonRef}>Click me please</button>
      <br /><br />
      {/* <button ref={doNotClickButtonRef}>Do not click me</button> */}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Result 
        username={'Jake'}
        email={'jake@test.com'}
        phoneNumber={'+4334534535453'}
        description={'I am Jake user and I want some uniq ID'}
      />
    </div>
  );
}

export default App;
