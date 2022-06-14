import React, { Component, Fragment } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    formRegister: {
      name: "user",
      email: "user@user.com",
      password: "user",
    },
  };

  handleformChange = (event) => {
    let newFormRegister = { ...this.state.formRegister };
    newFormRegister[event.target.name] = event.target.value;
    this.setState({
      formRegister: newFormRegister,
    });
  };

  handleformChangeSubmit = () => {
    this.postRegister();
  };

  postRegister = () => {
    axios.post(
      "http://127.0.0.1:8080/auth/v1/register",
      this.state.formRegister
    );
  };

  render() {
    return (
      <>
        <Fragment>
          <div className="container mx-auto px-4 h-full animate__animated animate__fadeIn animate__fast">
            <img
              class="object-cover object-right-top h-96 w-auto absolute top-16 right-0 scale-96"
              src="assets/register_bg_2.png"
              alt="bg"
            />
            <img
              class="object-cover object-right-top h-96 w-auto absolute top-16 left-0 scale-96"
              src="assets/register_bg_2.png"
              alt="bg"
            />
            <img
              className="object-cover object-right-top h-auto w-96 absolute bottom-12 right-96 scale-96"
              src="assets/register_bg_2.png"
              alt="bg"
            />
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-sky-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-blue-700 text-sm font-bold">
                        Sign up with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-blueGray-50 text-blue-800 font-sans px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-blue-600 inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="text-xl hover:text-blue-600"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/1999/xlink"
                        >
                          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path>
                        </svg>
                        Facebook
                      </button>
                      <button
                        className="bg-white active:bg-blueGray-50 text-cyan-600 font-sans px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-lime-500 inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img
                          alt="..."
                          width="30"
                          height="30"
                          className="w-5 mr-1"
                          src="icons8-google.svg"
                        />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-2 border-sky-500" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                      <small>Or sign up with credentials</small>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-name"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Name"
                          onChange={this.handleformChange}
                          name="name"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                          onChange={this.handleformChange}
                          name="email"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                          onChange={this.handleformChange}
                          name="password"
                        />
                      </div>

                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            I agree with the{" "}
                            <a
                              href="#pablo"
                              className="text-lightBlue-500"
                              onClick={(e) => e.preventDefault()}
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-blue-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-cyan-500 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                          onClick={this.handleformChangeSubmit}
                        >
                          Create Account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </>
    );
  }
}
export default Register;
