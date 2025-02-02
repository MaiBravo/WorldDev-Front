import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import logo from "./world-developers.png";
import suitcase from "./suitcase.svg";
import "./Styles.css";
import { useAuth } from "../../context/AuthContext";
import { clearCart } from "../../redux/action/cartAction";
import { getDetailUser } from "../../redux/action/actionAuth";

export default function Nav() {
  const cartTotalQuantity = useSelector(
    (state) => state.reducerCart.cartTotalQuantity
  );

  const { logout, user, loading } = useAuth();

  const navigate = useNavigate()
  const dispatch = useDispatch()




  const datosTotal= useSelector(state => state.reducerAuth.users)

  useEffect(()=>{
    if(user && user.hasOwnProperty('uid')){
      dispatch(getDetailUser(user.uid))
    }
   }, [user])




  const handleLogout = async () => {
    try {
      await logout();
      dispatch(clearCart())
      setUserMenuVisibility(!userMenuVisibility)
      navigate('/')
    } catch (error) {
      console.error(error.message);
    }
  };

  const [userMenuVisibility, setUserMenuVisibility] = useState(false)
  const handleUserMenuToggle = () => setUserMenuVisibility(!userMenuVisibility)

  if (loading) return <h1>loading...</h1>;
  
  return (
    <nav className="nav-container navbar navbar-expand-lg sticky-top">
      <div className="container-fluid container-nav">
        <Link
          className="navbar-brand d-flex justify-content-start align-items-center"
          to="/"
        >
          <img className="navbar-logo" src={logo} alt="World Developers logo" />
          <div className="text-start">
            <h6 className="mb-0">WORLD DEVELOPERS</h6>
            <small className="fs-6">Work & Relax</small>
          </div>
        </Link>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toogle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mx-auto"></div>
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/home">
                HOTELS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/home/Events">
                EVENTS
              </Link>
            </li>

            {/* {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/home/dashboard">
                    CREATE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/favorite">
                    FAVORITES
                  </Link>
                </li>
              </>
            )} */}

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">
                ABOUT US
              </Link>
            </li>
            <li className="nav-cart-container nav-item">
              <Link to="/cart">
                <img className="mx-3" src={suitcase} alt="Shopping Cart" />
                <span className="nav-cart-itemsSelected">
                  {cartTotalQuantity}
                </span>
              </Link>
            </li>

            {!user ? (
              <button className="nav-log-btn ms-4" onClick={() => navigate('/login')} type="button">
                LOG IN
              </button>
            ) : (
              <div className="nav-user-container d-flex flex-column align-items-end ms-4" onClick={handleUserMenuToggle}>
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://www.clarkstontolldentalpractice.com/wp-content/uploads/2020/06/default-img-2-1.jpg"
                  }
                  alt="Profile pic"
                />
                <small>
                  {user.displayName ? user.displayName : user.email}
                </small>
              </div>
            )}

            {userMenuVisibility && (
              <div className="nav-usermenu-bg">
                    {
                      datosTotal.rol==='user'?
                      <Link onClick={handleUserMenuToggle} to="/profileusers">See profile</Link>:null
                    }
                    {
                      datosTotal.rol==='admin' ?
                      <Link onClick={handleUserMenuToggle} to="/profileAdmin">See profile</Link>:null
                    }
                    {
                      datosTotal.rol==='superAdmin'?
                      <Link onClick={handleUserMenuToggle} to="/profileSuperAdmin">See profile</Link>:null
                    }
              
                <hr />
                <button className="nav-log-btn" onClick={handleLogout} type="button">
                  Log out
                </button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}