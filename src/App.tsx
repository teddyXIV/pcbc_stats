import Header from './Header'
import './App.css'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import AuthDetails from './auth/AuthDetails'

function App() {
  return (
    <>
      <Header />
      <SignIn />
      <SignUp />
      <AuthDetails />
    </>
  )
}

export default App
