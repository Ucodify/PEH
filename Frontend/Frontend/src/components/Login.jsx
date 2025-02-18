import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import useLogin from "./hooks/useLogin";
function Login() {
  const [email, setEmail] = useState("");

  const [password, setpassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    // await axios
    //   .post("http://localhost:4001/user/login", userInfo)
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data) {
    //       toast.success("Login Successful!");
    //       document.getElementById("my_modal_3").close();
    //       setTimeout(() => {
    //         window.location.reload();
    //         localStorage.setItem("Users", JSON.stringify(res.data.user));
    //       }, 1000);
    //     }
    //   })
    //   .catch((err) => {
    //     if (err.response) {
    //       console.log(err);
    //       toast.error("Error: " + err.response.data.message);
    //       setTimeout(() => {}, 1000);
    //     }
    //   });
  };

  return (
    <>
      <dialog
        id="my_modal_3"
        className="modal dark:text-black "
        method="dialog"
      >
        <div className="modal-box text-slate-100 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            X
          </Link>

          <>
            {/* // onSubmit={handleSubmit(onSubmit)} */}
            <form onSubmit={handleSubmit}>
              <h3 className="font-bold italic text-2xl text-center justify-center">
                Login
                <span className="text-red-700 italic font-extrabold text-2xl">
                  {" "}
                  as a Client
                </span>
              </h3>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered max-w-sm w-96 px-3 py-1 border rounded-md outline-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 bg-gray-400"
                  value={email}
                  //  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <label>Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered max-w-sm w-96 px-3 py-1 border-5 rounded-md outline-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 bg-primary"
                  value={password}
                  // {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-9">
                <button
                  className="btn border-gray-700 bg-green-800 hover:bg-emerald-900 duration-200  bg-clip-padding backdrop-filter backdrop-blur-lg text-white font-bold text-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Login"
                  )}
                </button>
                <p className="ms-20">
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="underline
                     text-green-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").close()
                    }
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </>
        </div>
      </dialog>
    </>
  );
}

export default Login;
