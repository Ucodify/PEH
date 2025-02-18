import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login.jsx";
//import axios from "axios";
import toast from "react-hot-toast";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { useState } from "react";
import useSignup from "./hooks/useSignup.js";
import Option from "./option.jsx";
function Signup() {
  //const signup = useSignup();
  const location = useLocation();

  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   // data.preventDefault();
  //   // console.log(data);
  //   const userInfo = {
  //     fullname: data.fullname,
  //     email: data.email,
  //     password: data.password,
  //     // confirmPassword: data.confirmPassword,
  //     // gender: data.gender,
  //   };

  const onSubmit = async (data) => {
    const [userInfo, setuserInfo] = useState({
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      option: data.option,
      gender: data.gender,
      profilePicture: data.profilePicture,
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
      setuserInfo({ ...userInfo, gender });
    };

    const handleOptionChange = (option) => {
      setuserInfo({ ...userInfo, option });
    };

    const handleSubmiit = async (e) => {
      e.preventDefault();
      await signup(userInfo);
    };

    // await axios
    //   .post("http://localhost:4001/user/signup", userInfo)
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data) {
    //       toast.success("Signup Successful");
    //       navigate(from, { replace: true });
    //     }
    //     localStorage.setItem("Users", JSON.stringify.res.data.user);
    //   })
    //   .catch((err) => {
    //     if (err.response) {
    //       console.log(err);
    //       toast.error("Error: " + err.response.data.message);
    //     }
    //   });
  };
  
  return (
    <>
      <div className="flex items-center justify-center bg-rose-950 dark:bg-black py-32 text-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray text-sm rounded-md">
        <div
          id="my_modal_3"
          className="border-[6px] border-emerald-900 rounded-full p-10 hover:border-emerald-950 hover:p-32 "
        >
          <div className="modal-box btn btn-sm h-0 rounded-full border-0 bg-transparent w-0 relative ">
            <Link
              to="/"
              className="absolute right-1 left-3 top-5 dark:bg-black text-white cursor-pointer"
            >
              X
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-32 py-10">
              <h3 className="font-bold text-red-100 text-base text-center">
                Make your Account today
              </h3>
              {/* //Name */}
              <div className="mt-4 space-y-2">
                <label className="">Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="input input-bordered max-w-sm w-96 px-3 border rounded-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 
       cursor-pointer h-10 placeholder-red-100 font-light"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* //Email */}
              <div className="mt-4 space-y-2">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered max-w-sm w-96 px-3 py-1 border rounded-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-base-100 cursor-pointer h-10 placeholder-red-100 font-light"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-800">
                    This field is required
                  </span>
                )}
              </div>
              {/* //Password */}
              <div className="mt-4 space-y-2">
                <label>Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered max-w-sm w-96 px-3 py-1 border rounded-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-base-100 cursor-pointer h-10 placeholder-red-100 font-light"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Confirm Password */}
              <div className="mt-4 space-y-2">
                <label>Confirm Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="input input-bordered max-w-sm w-96 px-3 py-1 border rounded-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-base-100 cursor-pointer h-10 placeholder-red-100 font-light"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.confirmPassword && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/** Option*/}
              <Option
                onCheckboxChange={`handleOptionChange`}
                selectedOption={`setuserInfo.option`}
              />
              {/**Gender Checkbox */}
              <GenderCheckbox
                onCheckboxChange={`handleCheckboxChange`}
                selectedGender={`setuserInfo.gender`}
              />

              {/* //Signup Button */}
              <div className="justify-around mt-2 ">
                <button
                  className="btn border-gray-600 text-gray-100 bg-emerald-900 hover:bg-emerald-950 duration-200 "
                  disabled={loading}
                >
                  Signup
                </button>
                <span className="ms-20 font-light">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="underline text-emerald-900 cursor-pointer font-bold"
                  >
                    Login
                  </Link>
                  <Login />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
