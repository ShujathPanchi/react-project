import './App.css';
import Appbar from './components/Appbar';
import Bookstore from './components/bookstore';


function App() {
  return (
    <div className="App">
      <Appbar/>
      <Bookstore></Bookstore>
    </div>
  );
}

export default App;
