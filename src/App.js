import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import JoinForm from './components/JoinForm';
import LoginForm from './components/LoginForm';
import Index from './main/Index';
import { useDispatch } from 'react-redux';
import { getCookie } from './util/cookie';
import { useEffect } from 'react';
import { setLogin } from './modules/logincheck';
import DestinationsContainer from './components/DestinationsContainer';
// import DetailTrip from './components/DetailTrip';

function App() {
  const dispatch = useDispatch();
  const uname= getCookie('userName');
  useEffect(()=>{
    if(uname){
      dispatch(setLogin())
    }
  },[])
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/join" element={<JoinForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/destinations" element={<DestinationsContainer />}/>
          {/* <Route path="/detailview/:id" element={<DetailTrip/>}/> */}
        
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
