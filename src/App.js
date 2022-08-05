import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import JoinForm from './components/JoinForm';
import LoginForm from './components/LoginForm';
import Index from './main/Index';
// import DetailTrip from './components/DetailTrip';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/join" element={<JoinForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          {/* <Route path="/detailview/:id" element={<DetailTrip/>}/> */}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
