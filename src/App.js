
import { useContext } from "react";
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Intro from './Component/Intro/Intro';
import ProductList from './Component/ProductList/ProductList';
import Toggle from "./Component/Toggle/Toggle";
import { ThemeContext } from "./context";

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div 
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
