
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Intro from './Component/Intro/Intro';
import ProductList from './Component/ProductList/ProductList';

function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
