import { useDispatch, useSelector } from "react-redux";
import {
  agree,
  disagree,
  logIn,
  setAge,
  setEmail,
  setName,
  agreeEmail,
  disagreeEmail
} from "./loginFormSlice";

export function LoginForm() {
  const name = useSelector((state) => state.loginForm.name);
  const email = useSelector((state) => state.loginForm.email);
  const age = useSelector((state) => state.loginForm.age);
  const agreedToTerms = useSelector((state) => state.loginForm.agreedToTerms);
  const showEmail = useSelector((state) => state.loginForm.showEmail);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Log in</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(logIn());
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onInput={(event) => dispatch(setName(event.currentTarget.value))}
        />

        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onInput={(event) => dispatch(setEmail(event.currentTarget.value))}
        />

        <br />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={age}
          onInput={(event) => dispatch(setAge(event.currentTarget.value))}
        />

        <br />

        <label htmlFor="agreement">I agree to join</label>
        <input
          type="checkbox"
          id="agreement"
          checked={agreedToTerms}
          onChange={(event) => {
            if (event.currentTarget.checked) {
              dispatch(agree());
            } else {
              dispatch(disagree());
            }
          }}
        />

        <br />

        <label htmlFor="showEmail">I agree to show my email</label>
        <input
          type="checkbox"
          id="showEmail"
          checked={showEmail}
          onChange={(event) => {
            if (event.currentTarget.checked) {
              dispatch(agreeEmail());
            } else {
              dispatch(disagreeEmail());
            }
          }}
        />

        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
