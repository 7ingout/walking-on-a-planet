import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Index from './main/Index';
import { Route, Routes } from "react-router-dom";
import JoinForm from './components/JoinForm';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/join" element={<JoinForm/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
