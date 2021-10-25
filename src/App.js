
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import AboutUs from './Components/AboutUs/AboutUs';
import ContractUs from './Components/ContractUs/ContractUs';
import Depertment from './Components/Depertment/Depertment';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Booking from './Components/Booking/Booking';
import AuthProvider from './Components/Context/AuthProvider';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>

            <Route path="/home">
                <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/depertment">
              <Depertment></Depertment>
            </Route>

            <PrivetRoute path="/booking/:bookingId">
              <Booking></Booking>
            </PrivetRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
