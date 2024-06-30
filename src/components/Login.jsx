import React, { useState } from "react";

function Login() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        {
          console.log(user)
        }
        <form action="">
          <div>
            <h1>yeti</h1>
            <div>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </div>

            <button>Login</button>
            <p>or</p>
            <button>SignUp</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
