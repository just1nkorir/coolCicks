import { Route, Routes, useRoutes  } from 'react-router-dom'
import Login from './components/Login.jsx'
import {navigationroutes }from './routes/Routes'

function App() {
const route=useRoutes(navigationroutes);

  return route
}

export default App
