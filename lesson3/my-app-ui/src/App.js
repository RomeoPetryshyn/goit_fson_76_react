import React from 'react';
import Header from './components/header/Header';
import { Footer } from './components/footer/Footer';

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <>
        <Header title={"My APP UI"} />
        <div>I am my-app-ui Application on CLASS 2</div>
        <Footer />
      </>
    )
  }
}

export default App;
