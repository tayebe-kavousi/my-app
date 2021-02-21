import logo from './logo.svg';
import { Navbar , NavbarBrand} from 'reactstrap';
import Menue from './components/menuComponent'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <Navbar href="/" >Restorant Con Fusion</Navbar>
        </div>
        </Navbar>
        <menu/>
    </div>
  );
}

export default App;
 