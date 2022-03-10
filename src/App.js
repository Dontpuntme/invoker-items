import './App.css';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className= "Heroes">
        <p>
          Heroes
        </p>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        </div>
      
    </div>
  );
}

export default App;
