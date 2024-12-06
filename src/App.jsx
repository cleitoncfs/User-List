import './App.css'
import { Routes, Route } from 'react-router-dom'
import UsersPage from './pages/UsersPage/UsersPage'
import NewUserPage from './pages/NewUserPage/NewUserPage'
import UserPage from './pages/UserPage/UserPage'
import EditUserPage from './pages/EditUserPage/EditUserPage'

function App() {

  return (<>

    <Routes>
      <Route path='/' element={<UsersPage />} />
      <Route path='/new' element={<NewUserPage />} />
      <Route path='/:userId' element={<UserPage />} />
      <Route path='/edit/:userId' element={<EditUserPage />} />
      <Route path='*' element={<div>404 Page!</div>} />
    </Routes>

    {/* <UsersPage /> */}

  </>)

}

export default App