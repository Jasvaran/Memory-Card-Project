import Header from './components/header';
import './App.css';
import Cards from './components/Cards';
import { carData } from './components/carData';

function App() {
  return (
    <div className="App">
      <div className='background-image'></div>
      <Header />
      <Cards carData={carData} />
    </div>
  );
}

export default App;
