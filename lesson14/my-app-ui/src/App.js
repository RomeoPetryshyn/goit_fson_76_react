import Header from "./components/header/Header";
import Content from "./components/content/Content";
import ProductsList from "./components/productsList/ProductsList";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <br/>
      <br/>
      <br/>
      <Info/>
      <br/>
      {/* <ProductsList/> */}
      <Footer/>
    </div>
  );
}

export default App;
