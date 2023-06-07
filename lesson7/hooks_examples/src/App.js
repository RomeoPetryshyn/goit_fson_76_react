import { useState, useEffect } from "react"; 
import Header from "./components/header/Header";

function App() {

  const [title, setTitle] = useState('I am default title');
  const [description, setDescription] = useState('I am default description');
  const [contacts, setContacts] = useState([
    { number: 100, name: 'Jake' }, {number: 200, name: 'Mike'}
  ]);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  // const [title, setTitle] = useState(() => {
  //   return 'I am default title';
  // });

  // setTitle('I am title'); так писати не можна

  // // component did mount
  // useEffect(() => {
  //   console.log({ title }, 'I am running on component did mount');
  // }, []);

  // // component did update (always)
  // useEffect(() => {
  //   console.log('I am running on each update')
  // });

  // // component did update (on change of title)
  useEffect(() => {
    console.log('I am running on each TITLE update');
  }, [title]);

  useEffect(() => {
    console.log('I am contacts use effect');
  }, [JSON.stringify(contacts)]);

  const setTitleHandler = () => {
    setTitle('I am title');
  }
  const setDescriptionHandler = () => {
    setDescription('I am description');
  }
  const hideHeaderHandler = () => {
    setIsHeaderHidden(true);
  }
  const updateContactsHandler = () => {
    // const oldContacts = contacts;
    // const newContacts = [...oldContacts, { number: 300, name: 'Josh' }];
    // setContacts(newContacts);
    
    // setContacts([...contacts, { number: 300, name: 'Josh' }]);
    
    setContacts([{ number: 300, name: 'Josh' }, {number: 400, name: 'John'}]);
  }

  console.log({ contacts });

  return (
    <div className="App">
      <button onClick={setTitleHandler}>Set title</button>
      <button onClick={setDescriptionHandler}>Set description</button>
      <br /> <br /> <br />
      <div>{title}</div>
      <div>{description}</div>
      <br /> <br /> <br />
      <br /> <br /> <br />
      <button onClick={hideHeaderHandler}>Hide header</button> <br />
      {isHeaderHidden ? '' : <Header />}
      <br /> <br /> <br />
      <br /> <br /> <br />
      {contacts.map(({ name, number }, index) => (
        <span key={`container-item-${index}`}>{name}:{number}</span>
      ))}
      <button onClick={updateContactsHandler}>Set new contacts</button>
    </div>
  );
}

export default App;
