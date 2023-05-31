import React from 'react';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import products from './static/products.json';
import Modal from './components/modal/Modal';
import Child from './components/child/Child';


class App extends React.Component {
  state = {
    title: '[Header Title 1]',
    isHeaderHidden: false,
    isProductsListHidden: false,

    // 5 task
    products: [],

    // Portal
    clicks: 0
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ products: products })
    }, 4000);
  }

  changeTitle = () => {
    this.setState({ title: '[Header title 2]' });
  }

  hideHeader = () => {
    console.log(this.state.products);
    this.setState({ isHeaderHidden: true });
  }

  hideProductsList = () => {
    this.setState({ isProductsListHidden: true })
  }

  // Portal logic
  handleClickInModal = () => {
    const {clicks} = this.state;
    this.setState({ clicks: clicks+1 });
  }
  
  render() {
    const {title, isHeaderHidden, isProductsListHidden} = this.state;

    return (
      <>
        {isHeaderHidden ? 'Header is hidden' : <Header title={title}/>}
        {/* <Header title={title}/> */}
        <button onClick={this.changeTitle}>Change title</button>
        <button onClick={this.hideHeader}>Hide Header</button>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


        {/* 5 task */}
        {!isProductsListHidden && <ProductList products={this.state.products}/>}
        <button onClick={this.hideProductsList}>Hide Header</button>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />








        {/* Portal */}
          {/* <div onClick={this.handleClickInModal}>
          <div>clicks: {this.state.clicks}</div>
          <p>
            Open up the browser DevTools
            to observe that the button
            is not a child of the div
            with the onClick handler.
          </p>
          <Modal>
            <Child />
          </Modal>
        </div> */}
      </>
    )
  }
}

export default App;
