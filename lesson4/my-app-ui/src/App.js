import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import Search from './components/search/Search';
import Login from './components/login/Login';
import products from './static/products.json';

class App extends React.Component {

  render() {
    return (
      <>
        <div>Something</div>
        <ContactUs />
        <Search products={products}/>
        <Login />
      </>
    )
  }
}

export default App;
