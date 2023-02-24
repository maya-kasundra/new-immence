// import React, { useState } from 'react'

// import './login.css'
import './loginn.css'
import login_img from '../images/rafiki.svg'
import login_pattern from '../images/pattern.svg'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  // const { register, handleSubmit } = useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleRegistration = (data) => console.log(data)
  const handleError = (errors) => {}
  const registerOptions = {
    name: { required: 'Name is required' },
    email: { required: 'Email is required' },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
  }

  // const [email, setEmail] = useState('')

  return (
    // <div classNameName="container-fluid m-0">
    //   <div classNameName="row">
    //     <div classNameName="col-md-6 p-0 d-flex">
    //       <div classNameName="main-left-container">
    //         <form classNameName="Auth-form">
    //           <div classNameName="Auth-form-content">
    //             <h3 classNameName="Auth-form-title">Welcome immencer!</h3>
    //             <p classNameName="signing-to-continue">Signing to continue</p>
    //             <div classNameName="form-group mt-3 ">
    //               <label>
    //                 Email address <span>*</span>
    //               </label>
    //               <input
    //                 type="email"
    //                 classNameName="form-control mt-1"
    //                 placeholder="Enter Your email"
    //               />
    //             </div>
    //             <div classNameName="form-group mt-3">
    //               <label>
    //                 Password <span>*</span>
    //               </label>
    //               <Link to={'/'} classNameName="link text-decoration-none">
    //                 Forgot Password ?
    //               </Link>
    //               <input
    //                 type="password"
    //                 classNameName="form-control mt-1"
    //                 placeholder="Enter Your password"
    //               />
    //             </div>
    //             <div classNameName="d-grid gap-2 mt-1 mb-5">
    //               <button type="submit" classNameName="btn btn-sing-in">
    //                 Sign In
    //               </button>
    //             </div>
    //             <div classNameName="login-footer">
    //               <img src={login_img} alt="" classNameName="img-fluid" />
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //     <div classNameName="col-md-6 p-0">
    //       <div classNameName="main-right-container img-container">
    //         <img src={login_pattern} alt="" classNameName="login-pattern" />
    //       </div>
    //     </div>
    //     {/* <div classNameName="col p-0">
    //       <div className="parent">
    //         <article>
    //           <section className="category">Cars</section>
    //         </article>
    //       </div>
    //     </div> */}
    //   </div>
    // </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-5 d-flex flex-column justify-content-center left-div">
          <h1 className="Auth-form-title">Welcome, immencer!</h1>
          <p className="signing-to-continue">Signing to Continue</p>
          <div className="form-style">
            <form onSubmit={handleSubmit(handleRegistration, handleError)}>
              <div className="form-group pb-1">
                <label className="mb-1">
                  Email address <span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  // required
                  name="email"
                  {...register('email', registerOptions.email)}
                />
                <small className="text-danger">
                  {errors?.email && errors.email.message}
                </small>
              </div>
              <div className="form-group pb-1">
                <label className="mb-1">
                  Password <span>*</span>
                  <Link to={'/'} className="text-decoration-none link">
                    Forgot Password ?
                  </Link>
                </label>

                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                  id="exampleInputPassword1"
                  // required
                  name="password"
                  {...register('password', registerOptions.password)}
                />
                <small className="text-danger">
                  {errors?.password && errors.password.message}
                </small>
              </div>

              <div className="pb-2">
                <button
                  type="submit"
                  className="btn w-100 font-weight-bold sign-in-btn"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="login-footer">
            <img
              src={login_img}
              className="img-fluid img-class"
              alt="qq"
              // style={{ minHeight: '100%' }}
            />
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={login_pattern}
            className="img-fluid login-pattern"
            alt="qq"
            style={{ minHeight: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
