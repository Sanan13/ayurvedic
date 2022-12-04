import './App.css';
import Card from './component/Card';
import Carousel from './component/Carousel';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Carousel/>
     <Card className=""/>
    </div>
  );
}

export default App;
