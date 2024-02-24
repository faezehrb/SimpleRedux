import { useDispatch, useSelector } from "react-redux";
import { agree, agreeEmail } from "./loginFormSlice";

export function ConfirmForm() {
  const agreedToTerms = useSelector((state) => state.loginForm.agreedToTerms);
  const name = useSelector((state) => state.loginForm.name)
  const email  = useSelector((state) => state.loginForm.email)
  const showEmail  = useSelector((state) => state.loginForm.showEmail)
  const loggingIn  = useSelector((state) => state.loginForm.loggingIn)
  const dispatch = useDispatch();
  const reStart = () => {
    location.reload() 
  }
  return (
    <div>
      <h1>Hello {name}!</h1>

      {agreedToTerms ? (
        <>
         <p>✔️ Welcome!</p>
         <button onClick = {reStart}>

         </button>
        </>
      ) : (
        <>
          <p>❌ You must agree to continue.</p>

          <label htmlFor="agreement">I agree to join</label>
          <input
            type="checkbox"
            id="agreement"
            checked={false}
            onChange={() => {
              dispatch(agree());
            }}
          />
        </>
      )}
       <br/>
      { showEmail ? (email) : (
         <>
         <p>The mail is hidded!</p> 
         <label htmlFor="showEmail">show my E-mail</label>
          <input
            type="checkbox"
            id="showEmail"
            checked={false}
            onChange={() => {
                dispatch(agreeEmail());
            }}
          />
         </>
      )}
    </div>
  );
}
