import './App.css';
import Items from './components/Items';
import StarWars from './components/StarWars';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <StarWars />
      <Items name = "Lightsabers" />
      </header>
    
    </div>
  );
}

export default App;
