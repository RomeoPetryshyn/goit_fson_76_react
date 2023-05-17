import _ from 'lodash';
import Header from './components/header/Header';
import ProductsList from './components/productsList/ProductsList';
import { Footer } from './components/footer/Footer';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  const a = 2 + 3;
  const b = 3 + 4;
  const c = a + b;
  const f = _.add(c, 10);

  return (
    <>
      <Header></Header>
      <ProductsList></ProductsList>
      <Footer />
      {/* <NotFoundPage /> */}
      <div>{f}</div>
    </>
  );
}

export default App;
