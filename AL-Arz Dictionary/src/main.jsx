import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Search from './search'
import Favourite from './favourite'
import Root from './root'
import History from './history'
import Admin from './admin'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="root" element={<Root />} />
      <Route path="favourite" element={<Favourite />} />
      <Route path="search" element={<Search />} />
      <Route path="history" element={<History />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
