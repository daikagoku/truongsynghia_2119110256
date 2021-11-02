import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import MainMenu from './components/menu/MainMenu';
import MainContent from './components/content/MainContent';
import HomeContent from './components/content/HomeContent';
import ProductDetailContent from './components/content/ProductDetailContent';
function App() {
  return (
    <div className="App">
        <BrowserRouter>      
          <Route path="/" component={Header} />
          <Route path="/" component={MainMenu} />
          <Route path="/" render={()=>(
            <MainContent>
                <Route exact path="/"component={HomeContent} />
                <Route path="/productdetail" component={ProductDetailContent} />
            </MainContent>
          )} />
          <Route path="/" component={Footer} />
          <Route path="/" component={Contact} />
        </BrowserRouter>
    </div>
  );
}

export default App;
