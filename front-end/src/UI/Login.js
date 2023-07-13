import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    } else {
    }
  }, []);

  //Login ka data backend me bhejne ke liye
  const handleLogin = async () => {
    console.warn(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("auth", JSON.stringify(result.auth));

      navigate("/");
    } else {
      alert("Please enter correct name");
    }
  };

  return (
    <div className="login">
      <h1>Login Page</h1>
      <input
        type="text"
        value={email}
        className="inputBox"
        placeholder="enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        className="inputBox"
        placeholder="enter pasword"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin} className="appbutton">
        Login
      </button>
    </div>
  );
};

export default Login;
