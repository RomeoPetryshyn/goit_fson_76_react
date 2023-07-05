import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./redux/posts/operations";
import { getPosts } from "./redux/posts/selectors";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  // const { items, isLoading, error } = useSelector(getPosts);
  // console.log({ items, isLoading, error });
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
        
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
