import React from "react";
import { Typewriter } from "react-simple-typewriter";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(first);
  };
  const handleType = count =>{
    console.log(count)
  } 
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className=" bg-none backdrop-blur-sm min-h-screen">
      <div className="flex flex-col gap-9 items-center align-middle ml-10">
        <div className="text-center ">
          <h1
            className=" font-extrabold  "
            style={{
              paddingTop: "5rem",
              margin: "auto 0",
              fontWeight: "800",
              textAlign: "center",
              fontSize: "68px",
            }}
          >
            {" "}
            <span style={{ color: "red", fontWeight: "extra-bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Sign Up Now"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>
        </div>
        <div className="card bg-none  w-full min-h-[800px]   mb-10  shrink-0 shadow-2xl">
          <form className="card-body  space-y-12">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="email"
                placeholder="please paste your photo url here"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control  md:mx-auto w-[320px]">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
