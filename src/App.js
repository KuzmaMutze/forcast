import logo from './logo.svg';
import './App.css';
import SearchContainer from './components/Search/SearchContainer';
import CityContainer from './components/City/CityContainer'

function App() {
  return (
    <div className="App">
      <CityContainer/>
      <SearchContainer/>
    </div>
  );
}

export default App;
