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
import AddTrip from './components/AddTrip';
import EditTrip from './components/EditTrip';
import EventContainer from './components/EventContainer';
import DetailTrip from './components/DetailTrip';

function App() {
  const dispatch = useDispatch();
  const uname= getCookie('userName');
  useEffect(()=>{
    if(uname){
      dispatch(setLogin())
    }
  //eslint-disable-next-line
  },[])
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/join" element={<JoinForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/destinations" element={<DestinationsContainer />}/>
          <Route path="/trips/:cityNational" element={<DetailTrip/>}/>
          <Route path="/event" element={<EventContainer/>}/>
          <Route path="/addTrip" element = {<AddTrip/>}/>
          <Route path="/editTrip" element = {<EditTrip/>}/>
          <Route path="/deleteTrip" element = {<AddTrip/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
