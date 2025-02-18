import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store";
import { useRef } from "react";

const Auth = () => {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const handleAuth = (event) => {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    dispatch(authActions.login({ enteredEmail, enteredPassword }));
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleAuth}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={password}
            />
          </div>
          <button onClick={handleAuth}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
