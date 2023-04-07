import React from 'react'
import Login from '../pages/login'
// import GameList from '../component/gameList'
import SetupDate from '../component/dateSetup&Time'
import EventDuration from '../component/eventDuration'
import Checkout from '../pages/checkout';
import GameList from '../pages/gameList'
import { Routes, Route } from "react-router-dom"



export default function app() {
  return (
    <Routes>
       <Route path="/" element={<Login />}></Route>
       <Route path="/game" element={<GameList />}></Route>
       <Route path="/setupDate" element={<SetupDate />}></Route>
       <Route path="/eventDur" element={<EventDuration />}></Route>
       <Route path="/checkOut" element={<Checkout />}></Route>
       
    </Routes>
  )
}
