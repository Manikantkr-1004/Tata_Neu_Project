import './App.css';
import { Footer } from './Component/Footer';
import { Mid1 } from './Component/Mid1';
import { Mid2 } from './Component/Mid2';
import { Mid3 } from './Component/Mid3';
import { Mid4 } from './Component/Mid4';
import { Mid6 } from './Component/Mid6';
import { Mid7 } from './Component/Mid7';
import { Mid8 } from './Component/Mid8';
import { Navbar } from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mid1 />
      <Mid2 />
      <Mid3 />
      <Mid4 />
      <Mid6 />
      <Mid7 />
      <Mid8 />
      <Footer />
    </div>
  );
}

export default App;
