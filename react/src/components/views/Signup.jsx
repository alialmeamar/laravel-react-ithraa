



import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import axiosClient from "../axuos-client";

import { useStateContext } from "../context/ContextProvider.jsx";

export default function Signup() {
    const nameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const passwordConfirmationRef = createRef()
    const { setUser, setToken } = useStateContext()
    const [errors, setErrors] = useState(null)

    const onSubmit = ev => {
        ev.preventDefault()

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        axiosClient.post('/signup', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
    }

    return (
        <div className="login-signup-form animated fadeInDown">

            <div className="login-signup-form  ">

                <div>

                    <div className="container">

                        <div className="row">
                            <div className="col-6  ">
                                <div className="mainloginR">

                                    <img src="img/loginglogo.png" className="loginglogo text-center"></img>

                                    <div className="loginglogoText text-center">
                                        <h2 className="pt-5">
                                            نظام اثراء
                                        </h2>
                                        <h5 className="pt-3 ">
                                            نظام ادارة الشكاوى و المقترحات
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 position-relative ">
                                <div className="mainloginL">
                                    <h4 className="text-center mt-3  animated fadeInDown">
                                        تسجيل حساب جديد
                                    </h4>




                                    <div className="form  animated fadeInDown">
                                        <form onSubmit={onSubmit}>

                                            {errors &&
                                                <div className="alert">
                                                    {Object.keys(errors).map(key => (
                                                        <p key={key}>{errors[key][0]}</p>
                                                    ))}
                                                </div>
                                            }
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                الأسم
                                            </label>
                                            <input ref={nameRef} type="text" placeholder="الاسم" className="form-control" />
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                البريد الالكتروني ( الايميل )
                                            </label>
                                            <input ref={emailRef} type="email" placeholder="الايميل (البريد الإلكتروني)" className="form-control" />
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                الرمز
                                            </label>
                                            <input ref={passwordRef} type="password" placeholder="الرمز" className="form-control" />
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                تأكيد الرمز
                                            </label>
                                            <input ref={passwordConfirmationRef} type="password" placeholder="اعد كتابة الرمز" className="form-control" />

                                            <div className="text-center mt-3 mb-3">

                                                <button className="btn topbtn2 w-50  mb-3" >تسجيل </button>
                                                <p className="message"> <Link to="/login" className="ColoredLink  ">تسجيل دخول !</Link></p>
                                            </div>
                                        </form>
                                    </div>


                                    <div className="text-center  ColoredLinkMiniPos mt-3">
                                        <a className="ColoredLinkMini ">

                                            استعادة كلمة المرور

                                        </a> <br />

                                        <a className="ColoredLinkMini ">
                                            سياسة الخصوصية و الاستخدام
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div >




            </div>


        </div>
    )
}


// import { Link } from "react-router-dom";
// import { createRef, useState } from "react";
// import axiosClient from "../axuos-client";
// import { useStateContext } from "../context/ContextProvider.jsx";

// export default function Signup() {
//     const nameRef = createRef()
//     const emailRef = createRef()
//     const passwordRef = createRef()
//     const passwordConfirmationRef = createRef()
//     const { setUser, setToken } = useStateContext()
//     const [errors, setErrors] = useState(null)

//     const onSubmit = ev => {
//         ev.preventDefault()

//         const payload = {
//             name: nameRef.current.value,
//             email: emailRef.current.value,
//             password: passwordRef.current.value,
//             password_confirmation: passwordConfirmationRef.current.value,
//         }
//         axiosClient.post('/signup', payload)
//             .then(({ data }) => {
//                 setUser(data.user)
//                 setToken(data.token);
//             })
//             .catch(err => {
//                 const response = err.response;
//                 if (response && response.status === 422) {
//                     setErrors(response.data.errors)
//                 }
//             })
//     }

//     return (
//         <div className="login-signup-form  ">

//             <div>

//                 <div className="container">

//                     <div className="row">
//                         <div className="col-6  ">
//                             <div className="mainloginR">

//                                 <img src="img/loginglogo.png" className="loginglogo text-center"></img>

//                                 <div className="loginglogoText text-center">
//                                     <h2 className="pt-5">
//                                         نظام اثراء
//                                     </h2>
//                                     <h5 className="pt-3 ">
//                                         نظام ادارة الشكاوى و المقترحات
//                                     </h5>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-6 position-relative ">
//                             <div className="mainloginL">
//                                 <h4 className="text-center mt-3  animated fadeInDown">
//                                     تسجيل حساب جديد
//                                 </h4>

//                                 <form className="px-3 pt-1">
//                                     {/* <div className="mb-1">
//                                          <label for="exampleInputEmail1" className="form-label">
//                                              الأسم
//                                          </label>
//                                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


//                                          <label for="exampleInputEmail1" className="form-label">
//                                              البريد الالكتروني ( الايميل )
//                                          </label>
//                                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

//                                      </div>
//                                      <div className="mb-1">
//                                          <label for="exampleInputPassword1" className="form-label">
//                                              رمز الدخول
//                                          </label>
//                                          <input type="password" className="form-control" id="exampleInputPassword1" />
//                                      </div>
//                                      <div className="mb-1">
//                                          <label for="exampleInputPassword1" className="form-label">
//                                              رمز الدخول
//                                          </label>
//                                          <input type="password" className="form-control" id="exampleInputPassword1" />
//                                      </div>


//                                      <div className="text-center">
//                                          <a href="/dashbord" className="btn topbtn2 w-50    "> تسجيل حساب جديد </a>
//                                      </div>

//                                      <div className="text-center  mt-3">
//                                          <Link to="/login" className="ColoredLink ">
//                                              تسجيل  دخول
//                                          </Link>
//                                      </div> */}

//                                     <div className="form  animated fadeInDown">
//                                         <form onSubmit={onSubmit}>

//                                             {errors &&
//                                                 <div className="alert">
//                                                     {Object.keys(errors).map(key => (
//                                                         <p key={key}>{errors[key][0]}</p>
//                                                     ))}
//                                                 </div>
//                                             }
//                                             <label htmlFor="exampleInputEmail1" className="form-label">
//                                                 الأسم
//                                             </label>
//                                             <input ref={nameRef} type="text" placeholder="الاسم" className="form-control" />
//                                             <label htmlFor="exampleInputEmail1" className="form-label">
//                                                 البريد الالكتروني ( الايميل )
//                                             </label>
//                                             <input ref={emailRef} type="email" placeholder="الايميل (البريد الإلكتروني)" className="form-control" />
//                                             <label htmlFor="exampleInputEmail1" className="form-label">
//                                                 الرمز
//                                             </label>
//                                             <input ref={passwordRef} type="password" placeholder="الرمز" className="form-control" />
//                                             <label htmlFor="exampleInputEmail1" className="form-label">
//                                                 تأكيد الرمز
//                                             </label>
//                                             <input ref={passwordConfirmationRef} type="password" placeholder="اعد كتابة الرمز" className="form-control" />

//                                             <div className="text-center mt-3 mb-3">

//                                                 <button className="btn topbtn2 w-50  mb-3" >تسجيل </button>
//                                                 <p className="message"> <Link to="/login" className="ColoredLink  ">تسجيل دخول !</Link></p>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </form>

//                                 <div className="text-center  ColoredLinkMiniPos mt-3">
//                                     <a className="ColoredLinkMini ">

//                                         استعادة كلمة المرور

//                                     </a> <br />

//                                     <a className="ColoredLinkMini ">
//                                         سياسة الخصوصية و الاستخدام
//                                     </a>

//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div >




//         </div>



//     )
// }
