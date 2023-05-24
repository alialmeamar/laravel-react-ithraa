import { Link } from "react-router-dom";
import axiosClient from "../axuos-client";
import { createRef } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import { useState } from "react";

export default function Login() {
    const emailRef = createRef()
    const passwordRef = createRef()
    const { setUser, setToken } = useStateContext()
    const [message, setMessage] = useState(null)

    const onSubmit = ev => {
        ev.preventDefault()

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setMessage(response.data.message)
                }
            })
    }

    return (
        <div className=" ">

            {/* ddd
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login into your account</h1>

                    {message &&
                        <div className="alert">
                            <p>{message}</p>
                        </div>
                    }

                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
                </form>
            </div>*/}
            <div>

                <div className="container ">

                    <div className="row">
                        <div className="col-6  ">
                            <div className=" element mainloginR mainloginHight">

                                <img src="img/loginglogo.png" alt="loginglogo" className="loginglogo text-center"></img>

                                <div className="loginglogoText text-center">
                                    <h2 className="pt-5 ">
                                        نظام اثراء
                                    </h2>
                                    <h5 className="pt-3 ">
                                        نظام ادارة الشكاوى و المقترحات
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 position-relative ">
                            <div className="mainloginL mainloginHight ">
                                <h4 className="text-center mt-3  animated fadeInDown ">
                                    تسجيل الدخول
                                </h4>

                                {/* <form className="px-3 pt-5">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">
                                            البريد الالكتروني ( الايميل )
                                        </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">
                                            رمز الدخول
                                        </label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check form-check-reverse">
                                        <input type="checkbox" className="form-check-input  " id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1"> ابقى تسجيل الدخول مفتوحاً</label>
                                    </div>
                                    <div className="text-center">
                                        <a href="/dashbord" className="btn topbtn2 w-50    "> دخول </a>
                                    </div>
                                </form> */}

                                <div className="form  animated fadeInDown">
                                    <form onSubmit={onSubmit} className="px-3 pt-5">


                                        {message &&
                                            <div className="alert">
                                                <p>{message}</p>
                                            </div>
                                        }
                                        <div className="mb-3">

                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                البريد الالكتروني ( الايميل )
                                            </label>
                                        </div>

                                        <div className="mb-3">

                                            <input ref={emailRef} type="email" placeholder="Email" className="form-control" />
                                        </div>
                                        <div className="mb-3">

                                            <label htmlFor="exampleInputPassword1" className="form-label">
                                                رمز الدخول
                                            </label>
                                        </div>
                                        <div className="mb-3">

                                            <input ref={passwordRef} type="password" placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="text-center">
                                            <button className="btn topbtn2 w-50  ">دخول</button>
                                        </div>
                                    </form>



                                    <div className="text-center  mt-3">
                                        <Link to="/signup" className="ColoredLink "> تسجيل حساب جديد </Link>
                                    </div>
                                </div>


                                <div className="text-center  ColoredLinkMiniPos mt-3">
                                    <a href="#" className="ColoredLinkMini ">

                                        استعادة كلمة المرور

                                    </a> <br />

                                    <a href="#" className="ColoredLinkMini ">
                                        سياسة الخصوصية و الاستخدام
                                    </a>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >




    )
}
