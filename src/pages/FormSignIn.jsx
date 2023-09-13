import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";

const { signin } = user_actions
export default function Form() {
  const navigate = useNavigate();
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const dispatch = useDispatch()

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    dispatch(signin({ data }))
      .then((res) => {
        //console.log(res);
        if (res.payload.token) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged in!',
            showConfirmButton: false,
            timer: 2500
          });
          navigate("/");
        } else if (res.payload.messages.length > 0) {

          let html = res.payload.messages
            .map((each) => `<p>${each}</p>`)
            .join("");
          Swal.fire({
            title: "Something went wrong!",
            icon: "error",
            html,
          });
        }
      })
      .catch((err) => console.log(err));
  }
  let user = useSelector(store=>store)
  //console.log(user);
  return (
    <section className="flex items-center justify-center h-screen ">
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
        
        <p className="flex justify-center"><em>or sign in with</em></p>
      <div className="flex flex-wrap justify-around">
        <button className="flex rounded-full items-center justify-center  hover:bg-emerald-50 text-gray-400 font-semibold py-2 px-4 border border-gray-200  my-3 w-full ">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <p className="ml-2">Continue with Google </p>
        </button>
        <button className="flex rounded-full items-center justify-center   hover:bg-emerald-50 text-gray-400 font-semibold py-2 px-4 border border-gray-200   mb-3 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 48 48">
            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
          </svg>
          <p className="">Continue with Facebook</p>
        </button>
      </div>
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



