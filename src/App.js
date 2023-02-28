import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Login from './Pages/Login'
import Sidebar from './layout/Sidebar/Sidebar'

function App() {
  return (
    <Routes>
      {/* <Sidebar /> */}
      <Route path="/" element={<Sidebar />}></Route>
      {/* <Route path="/" element={<Sidebar />}></Route> */}
    </Routes>
  )
}

export default App
