import { useRef } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function Form() {
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");

  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(apiUrl + "users/signup", data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="flex items-center justify-center h-screen">
      <form className="w-full max-w-md p-6 bg-white dark:bg-emerald-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-emerald-500">
          Sign Up
        </h2>
        <div className="mb-4">
          <input
            ref={name}
            type="text"
            className="input"
            name="name"
            id="name"
            placeholder="First Name"
          />
        </div>
        <div className="mb-4">
          <input
            ref={lastName}
            type="text"
            className="input"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <input
            ref={country}
            type="text"
            className="input"
            name="country"
            id="country"
            placeholder="Country"
          />
        </div>
        <div className="mb-4">
          <input
            ref={photo}
            type="text"
            className="input"
            name="photo"
            id="photo"
            placeholder="Photo URL"
          />
        </div>
        <div className="mb-4">
          <input
            ref={mail}
            type="text"
            className="input"
            name="mail"
            id="mail"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            ref={password}
            type="password"
            className="input"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          className="btn-primary w-full py-3 rounded-md font-semibold bg-emerald-200 hover:bg-emerald-300"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Anchor
            className="text-primary font-bold hover:underline"
            to="/auth/signin"
          >
            Sign in
          </Anchor>
        </p>
      </form>
    </section>
  );
}
