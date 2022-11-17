import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './Services/Services';
import './App.css';

function App() {
  return (
  <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
