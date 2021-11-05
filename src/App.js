import './App.css';
import Content from './Components/Content/Content';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Amount from './Components/Amount/Amount'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Content />
      <Amount />
      <Footer/>
    </div>
  );
}

export default App;
