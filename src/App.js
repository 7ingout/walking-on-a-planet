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
import DestinationsContainer from './components/Destination/DestinationsContainer';
import AddTrip from './components/Destination/AddTrip';
import DetailTrip from './components/Destination/DetailTrip';
import EditTrip from './components/Destination/EditTrip';
import UsedTradeContainer from './components/UsedTrade/UsedTradeContainer';
import DetailGoods from './components/UsedTrade/DetailGoods';
import AddGoods from './components/UsedTrade/AddGoods';
import EditGoods from './components/UsedTrade/EditGoods';
import MyPage from './components/MyPage/MyPage';
import EventContainer from './components/Event/EventConatainer/EventContainer';
import DetailEvent from './components/Event/DetailEvent';
import AddEvent from './components/Event/AddEvent';
import SearchDestinaions from './components/Destination/SearchDestinaions';
import MyTrade from './components/UsedTrade/MyTrade';

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
          <Route path="/event/:userId" element={<DetailEvent/>}/>
          <Route path="/addTrip" element = {<AddTrip/>}/>
          <Route path="/editTrip/:cityNational" element = {<EditTrip/>}/>
          <Route path="/usedtrade" element = {<UsedTradeContainer/>}/>
          <Route path="/usedtrade/:no" element = {<DetailGoods/>}/>
          <Route path="/addGoods" element = {<AddGoods/>}/>
          <Route path="/editGoods/:no" element = {<EditGoods/>}/>
          <Route path="/myPage/:userId" element = {<MyPage/>}/>
          <Route path="/addEvent" element = {<AddEvent/>}/>
          <Route path="/search/:searchInput" element = {<SearchDestinaions/>}/>
          <Route path="/my/:userId" element = {<MyTrade/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
