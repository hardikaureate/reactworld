import './App.css';
import './animate.css'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import AllPosts from './components/AllPosts';
import BlogDetailsPage from './components/BlogDetailsPage';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import MainShop from './pages/MainShop';
import ProductPage from './shop_component/ProductPage';
import Cart from './shop_component/Cart';
import ParentProductPage from './shop_component/ParentProductPage';
import Documentation from './components/Documentation';
//import CategoryPost from './components/CategoryPost';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <Cart />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/post/:slug" exact>
            <BlogDetailsPage />
          </Route>
          {/* <Route path="/category/:slug" exact>
          <CategoryPost />
        </Route> */}
          <Route path="/products/:handle" exact>
            <ParentProductPage />
          </Route>
          <Route path="/post/" exact>
            <AllPosts />
          </Route>
          <Route path="/shop" exact>
            <MainShop />
          </Route>
          <Route path="/doc" exact>
            <Documentation />
          </Route>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
