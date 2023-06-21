import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Posts from './components/posts/Posts';
import PostDetails from './components/postDetails/PostDetails';
import NotFound from './pages/notFound/NotFound';
import Contact from './components/contact/Contact';
import { Mission } from './components/about/Mission';
import { Team } from './components/about/Team';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="/posts" element={<Posts/>} />
          <Route path="/postdetails/:postId" element={<PostDetails/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>



      
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/posts" element={<Posts/>} />
        <Route path="/postdetails/:postId" element={<PostDetails/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/> */}
    </div>
  );
}

export default App;
