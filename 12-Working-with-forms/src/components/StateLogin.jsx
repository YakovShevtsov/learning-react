import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const emailInput = useInput(
    "",
    (value) => isEmail(value) && isNotEmpty(value)
  );
  const passwordInput = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailInput.hasError || passwordInput.hasError) {
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          error={emailInput.hasError && "Please enter a valid email"}
          id="email"
          label="Email"
          type="email"
          name="email"
          onBlur={emailInput.handleInputBlur}
          onChange={emailInput.handleInputChange}
          value={emailInput.value}
        />

        <Input
          error={passwordInput.hasError && "Password must be 6 symbols min"}
          id="password"
          label="Password"
          type="password"
          name="password"
          onBlur={passwordInput.handleInputBlur}
          onChange={passwordInput.handleInputChange}
          value={passwordInput.value}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
