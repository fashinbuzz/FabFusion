import './App.css';
import Layout from './Components/Layout';
// import Category from './Components/Categories/Category';
// import Footer from './Components/Footer';
// import Validation from './Components/Validation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Validation />
      <Category />
      <Footer /> */}
        <Layout />
      </div>
    </BrowserRouter>

  );
}

export default App;
