import logo from './logo.svg';
import './main-site.css';
import HeaderNav from './component/HeaderNav/HeaderNav';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About'
import ErrorPage from './component/ErrorPage/ErrorPage';
import Blogs from './component/Blogs/Blogs';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Checkout from './component/Checkout/Checkout';
import ServiceDetail from './component/ServiceDetail/ServiceDetail';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import PasswordReset from './component/PasswordReset/PasswordReset';

function App() {
  return (
    <div className="main__site">
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forget-password' element={<PasswordReset></PasswordReset>}></Route>
        <Route path='/service/:serviceDetail' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>
        }></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
