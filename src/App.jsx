import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Pages from './Pages/Pages';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Pages />
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
