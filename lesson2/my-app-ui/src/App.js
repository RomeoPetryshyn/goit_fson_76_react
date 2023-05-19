import _ from 'lodash';
import Header from './components/header/Header';
import ProductsList from './components/productsList/ProductsList';
import { Footer } from './components/footer/Footer';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const a = 2 + 3;
  const b = 3 + 4;
  const c = a + b;
  const f = _.add(c, 10);

  const isError = false;

  if (isError) {
    return <ErrorPage errorType={'error'}>
        <div>I am ERROR</div>
    </ErrorPage>
  }

  return (
    <>
      <Header></Header>
      <ProductsList></ProductsList>
      <Footer isActive={false} testNumber={100500}/>
      <HomePage />
      {/* <NotFoundPage /> */}
      <div>{f}</div>
    </>
  );
}

export default App;
