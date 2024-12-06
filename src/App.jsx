import './App.css'
import UsersPage from './pages/UsersPage/UsersPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (<>

    <Routes>
      <Route path='/' element={<UsersPage />} />
      <Route path='/new' element={<div>New User Page!</div>} />
      <Route path='/:userId' element={<div>Single User Page!</div>} />
      <Route path='/edit/:userId' element={<div>Edit User Page!</div>} />
      <Route path='*' element={<div>404 Page!</div>} />
    </Routes>

    {/* <UsersPage /> */}

  </>)

}

export default App