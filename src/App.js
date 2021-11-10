import './App.css';
import './Theme.css';
import { BrowserRouter, Route} from "react-router-dom";
import useCartModel,{CartContext} from './model/Cart/';
import useThemeModel,{ThemeContext} from './model/Theme/';
import Home from './scenes/Home/';
import Contact from './components/Contact/';
function App() {
  const [cartData,handleCart] = useCartModel();
  const [themeData,handleTheme] = useThemeModel();
  return (
    <ThemeContext.Provider value={[handleTheme]}>
      <CartContext.Provider value={[cartData,handleCart]}>
        <section id="App" className={themeData}>
          <Contact />
            <BrowserRouter>      
              <Route path ="/" component={Home} />
            </BrowserRouter>
        </section>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
