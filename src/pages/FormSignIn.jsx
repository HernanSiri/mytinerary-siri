import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";

export default function Form() {
  const mail_signin = useRef("");
  const password_signin = useRef("");

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    console.log(data);
  }

  return (
    <section className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-emerald-600">
          Sign In
        </h2>
        <div className="mb-4">
          <input
            ref={mail_signin}
            type="text"
            className="input"
            name="mail_signin"
            id="mail_signin"
            placeholder="Email address"
          />
        </div>
        <div className="mb-4">
          <input
            ref={password_signin}
            type="password"
            className="input"
            name="password_signin"
            id="password_signin"
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          className="btn-emerald w-full py-3 rounded-md font-semibold bg-emerald-200 hover:bg-emerald-300"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <p className="mt-4 text-center">
          Don't you have an account?{" "}
          <Anchor
            className="text-emerald-800 font-bold hover:underline"
            to="/auth/signup"
          >
            Sign up
          </Anchor>
        </p>
      </form>
    </section>
  );
}



