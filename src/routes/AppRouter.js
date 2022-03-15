//import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React from 'react'
//import { useDispatch } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Add from '../components/crud/Add'
import Header1 from '../components/Header1'
import Header2 from '../components/Header2'
import LogIn from '../components/LogIn'
import Register from '../components/Register'
import Container from '../container/Container'
//import { LoginEmailPassword } from '../redux/actions/actionLogin'
// import { DashboardRoutes } from './DashboardRoutes'
// import { PrivateRoute } from './PrivateRoute'
// import { PublicRoute } from './PublicRoute'


const AppRouter = () => {

  // const dispatch = useDispatch();

  // const [checking, setChecking] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user?.uid) {
  //       console.log(user)
  //       dispatch(LoginEmailPassword(user.uid, user.displayName));
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //     setChecking(false);
  //   });
  // }, [ setChecking, setIsLoggedIn])

  // if (checking) {
  //   return (
  //     <h1>Espere...</h1>
  //   )
  // }


  return (

    <BrowserRouter>
       <Header1/>
        <Header2/>
        <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Container />} />

                    <Route path="/add" element={<Add/>} />
                    <Route path='*' element={<Navigate to="/" />} />
        </Routes>





{/* 
      <Routes>
        <Route path="/logIn" element={
          <PublicRoute isAuthenticated={isLoggedIn}>
            <LogIn />
          </PublicRoute>
        } />

        <Route path="/register" element={
          <PublicRoute isAuthenticated={isLoggedIn}>
            <Register />
          </PublicRoute>
        } />

        <Route path="/home" element={
          <PublicRoute isAuthenticated={isLoggedIn}>
              <Container/>
          </PublicRoute>
        } />


        <Route path="/*" element={
          <PublicRoute isAuthenticated={isLoggedIn}>
            <DashboardRoutes />
          </PublicRoute>
          } />
      </Routes> */}
    </BrowserRouter>
  )
}

export default AppRouter