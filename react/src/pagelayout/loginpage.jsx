

import { Link } from "react-router-dom";


const LoginPage = () => {

    return (

        <div>

            <div className="container">

                <div className="row">
                    <div className="col-6  ">
                        <div className="mainloginR mainloginHight">

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

                    <div className="col-6 position-relative">
                        <div className="mainloginL mainloginHight">
                            <h4 className="text-center mt-3">
                                تسجيل الدخول
                            </h4>

                            <form className="px-3 pt-5">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">
                                        البريد الالكتروني ( الايميل )
                                    </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">
                                        رمز الدخول
                                    </label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check form-check-reverse">
                                    <input type="checkbox" class="form-check-input  " id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1"> ابقى تسجيل الدخول مفتوحاً</label>
                                </div>
                                <div className="text-center">
                                    <a href="/dashbord" class="btn topbtn2 w-50    "> دخول </a>
                                </div>

                                <div className="text-center  mt-3">
                                    <Link to="/register" class="ColoredLink "> تسجيل حساب جديد </Link>
                                </div>



                                <div className="text-center  ColoredLinkMiniPos mt-3">
                                    <a href="#" class="ColoredLinkMini ">

                                        استعادة كلمة المرور

                                    </a> <br />

                                    <a href="#" class="ColoredLinkMini ">
                                        سياسة الخصوصية و الاستخدام
                                    </a>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );

}
export default LoginPage;