import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { User } from './pages/User'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<User />} />
          <Route path='*' element={<h2>ERROR</h2>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
