import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  //SignUp karne ke bad sign up vala component na dikhe ....
  const auth = localStorage.getItem("user");
  // isliye liya gaya code

  //logut function
  const navigate = useNavigate("user");
  const logout = () => {
    localStorage.clear();
    navigate("/SignUp");
  };
  //

  return (
    <div>
      <img
        className="image"
        alt="logo"
        src="https://media.istockphoto.com/id/1429456277/photo/online-shopping-with-credit-car-or-cash-money.jpg?s=1024x1024&w=is&k=20&c=U-WywrpANXEOMnCB69B0UjEzZ1M4AEUIV4vi2idBmak="
      />

      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update/:id">Update Product</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/SignUp">
              Logout ({JSON.parse(auth).name})
              {/* Logout ke side me kisne logout kiya uska naam ane ke liye   */}
            </Link>
          </li>

          {/* {auth ? (
            <Link onClick={logout} to="/SignUp">
              Logout
            </Link>
          ) : (
            <Link to="/SignUp">Sign Up</Link>
          )} */}

          {/* {auth ? (
          <li>
            <Link to="/logout">logout</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/SignUp"></Link>Sign Up
            </li>
            <li>
              <Link to="/login"></Link>Login{" "}
            </li>
          </> */}
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
            {""}
          </li>
        </ul>
      )}
    </div>
  );
};
export default Nav;
