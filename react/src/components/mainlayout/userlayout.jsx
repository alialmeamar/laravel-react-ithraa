import { useStateContext } from "../context/ContextProvider";
import ToptitleBr from "../../pagelayout/Tobtitlebr";
import Popuppg from "../../pagelayout/popup";
import Popup from 'reactjs-popup';
import { useEffect } from "react";
import axiosClient from "../axuos-client";

import { Link, Navigate, Outlet } from "react-router-dom";

const User = () => {
    // eslint-disable-next-line no-unused-vars
    const { user, token, setUser, setToken, notification } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = ev => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data)
            })
    }, [setUser])



    return (
        <div className=" row  m-0 vh-100   overflow-hidden ">
            <div className=" rgh text-center  bg-dark text-light   center">

                <div className="logo center">
                    <span className="material-symbols-outlined">
                        web
                    </span>
                </div>

                <div className="bttn    ">
                    <Link to="/" className="btn btn-primary btn-sm w-100 mt-2 text-end    " href="#" role="button">
                        <span className="material-symbols-outlined deb">home</span>
                        الرئيسية

                    </Link>

                    <Link to="/allrequests" className="btn btn-primary btn-sm w-100 mt-2 text-end " href="#" role="button">
                        <span className="material-symbols-outlined deb">Description</span>
                        كل الطلبات

                    </Link>

                    <Link to="/f" className="btn btn-primary btn-sm w-100 mt-2 text-end " href="#" role="button">
                        <span className="material-symbols-outlined deb">Description</span>
                        الصفحة الاولى

                    </Link>


                    <Link to="/Proposal" className="btn btn-primary btn-sm w-100 mt-2 text-end " href="#" role="button">
                        <span className="material-symbols-outlined deb">Description</span>
                        الصفحة الثانية

                    </Link>

                    <Link to="/pageview" className="btn btn-primary btn-sm w-100 mt-2 text-end " href="#" role="button">
                        <span className="material-symbols-outlined deb">Description</span>
                        الصفحة الثالثة

                    </Link>

                    <Popup trigger={
                        <a href="#" className="btn btn-primary btn-sm w-100 mt-2 text-end " role="button">
                            <span className="material-symbols-outlined deb">Description</span>
                            الصفحة م

                        </a>
                    } position="left center " arrow="False" modal="bool" offsetX="1000" lockScroll="bool ">


                        <Popuppg />

                    </Popup>

                    <div className="condiv">
                        {/* <Link to="/login" className="btn btn-light btn-sm w-100 mt-2 contralbtn  text-end " href="#" role="button">
                            <span className="material-symbols-outlined deb">Login</span>
                            تسجيل الدخول
                        </Link> */}
                        <a onClick={onLogout} className="btn btn-light btn-sm w-100 mt-2 contralbtn  text-end " href="#" role="button">
                            <span className="material-symbols-outlined deb">Logout</span>
                            تسجيل الخروج
                        </a>
                        <Link to="#" className="btn btn-light btn-sm w-100 mt-2  contralbtn text-end " href="#" role="button">
                            <span className="material-symbols-outlined deb">Tune</span>
                            الإعدادات
                        </Link>
                    </div>


                </div>
            </div>
            <div className="   col  w-75 body">
                <ToptitleBr datapass={user} />
                <Outlet />
            </div>
        </div>



    );
}
export default User;
