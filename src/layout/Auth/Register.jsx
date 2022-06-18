import React, { Component, Fragment } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import userService from "../../subscribe/user-service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const valEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const valPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      successful: false,
      message: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSignUp(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      userService
        .signup(this.state.name, this.state.email, this.state.password)
        .then(
          (response) => {
            this.setState({
              message: <div class="flex h-full flex-col justify-between">
              <svg class="h-12 w-12 mt-4 m-auto text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                  </path>
              </svg>
              <p class="text-gray-600 dark:text-gray-100 text-md py-2 px-1">
                  Account has been created.
              </p>
              <a href="./Login">
              <div class="flex items-center justify-between gap-4 w-full mt-8">
                  <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                      Close
                  </button>
              </div>
              </a>
          </div>,
              successful: true,
            });
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            this.setState({
              successful: false,
              message: resMessage,
            });
          }
        );
    }
  }

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
                      <h1 className="text-gray-600 text-sm font-bold">
                        Sign Up
                      </h1>
                    </div>
                    <div className="btn-wrapper text-center">
                      {/* <h4></h4> */}
                    </div>
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold"></div>
                    <Form
                      onSubmit={this.handleSignUp}
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      {!this.state.successful && (
                        <div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-name"
                            >
                              Name
                            </label>
                            <Input
                              type="text"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Name"
                              name="name"
                              value={this.state.name}
                              onChange={this.onChangeName}
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Email
                            </label>
                            <Input
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Email"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChangeEmail}
                              validations={[required, valEmail]}
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Password
                            </label>
                            <Input
                              type="password"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Password"
                              name="password"
                              value={this.state.password}
                              onChange={this.onChangePassword}
                              validations={[required, valPassword]}
                            />
                          </div>                      
                          <div className="text-center mt-6">
                            <button className="bg-blue-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-cyan-500 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                              Create Account
                            </button>
                          </div>
                        </div>
                      )}
                      {this.state.message && (
                        <div className="form-group">
                          <div
                            className={
                              this.state.successful
                                ? "alert alert-success"
                                : "alert alert-danger"
                            }
                            role="alert"
                          >
                            {" "}
                            {this.state.message}
                          </div>
                        </div>
                      )}
                      <CheckButton
                        style={{ display: "none" }}
                        ref={(c) => {
                          this.checkBtn = c;
                        }}
                      />
                    </Form>
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
