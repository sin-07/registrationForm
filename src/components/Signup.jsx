import React, { useState } from "react";
import axios from 'axios'

function Signup() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name,e.target.value)
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const signup = () => {
    const { name, email, password, cpassword } = user;
    if(name&&email&&(password===cpassword)){
      axios.post("http://localhost:3000/signup",user)
      .then(res=>console.log(res))
    }else{
      console.log("invalid input")
    }


  };

  return (
    <>
      <div>
        {
          // console.log(user)
        }
        <div>
          <h1>yeti</h1>
          <div>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="ENter name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="ENter email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="ENter password"
            />
          </div>
          <div>
            <input
              type="cpassword"
              name="cpassword"
              value={user.cpassword}
              onChange={handleChange}
              placeholder="ENter cpassword"
            />
          </div>

          <button onClick={signup}>SignUp</button>
          <p>or</p>
          <button>Login</button>
        </div>
      </div>
    </>
  );
}

export default Signup;
