import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../src/store/actions/userAction";

function LoginPage() {
    const [logins, setLogin] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function loginHandler(e) {
        const { value, name } = e.target;
        const newLogin = { ...logins };
        newLogin[name] = value;
        setLogin(newLogin);
    }

    function submitLogin(e) {
        e.preventDefault();
        dispatch(login(logins))
            .then(() => {
                navigate('/')
            })
    }
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
                <div className=" flex flex-col bg-white w-[25%] shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl max-w-md ">
                    <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">Welcome Back</div>
                    <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">Enter your credentials to access your account</div>

                    <div className="mt-10">
                        <form 
                        onSubmit={submitLogin}
                        >
                            <div className="flex flex-col mb-2">
                                <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">
                                    E-Mail Address:
                                </label>
                                <div className="relative">
                                    <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                        <i className="fas fa-at text-[#1cc88a]"></i>
                                    </div>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={login.email}
                                        onChange={loginHandler}
                                        className="text-sm placeholder-gray-500 pl-4 pr-4 rounded-2xl border-2 border-[#1cc88a] w-full py-2 focus:outline-none focus:border-blue-400 "
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                    Password:
                                </label>
                                <div className="relative">
                                    <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 ">
                                        <span>
                                            <i className="fas fa-lock text-[#1cc88a]"></i>
                                        </span>
                                    </div>

                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={login.password}
                                        onChange={loginHandler}
                                        className=" text-sm placeholder-gray-500 pl-4 pr-4 rounded-2xl border-2 border-[#1cc88a] w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Enter your password"
                                    />
                                </div>
                            </div>

                            <div className="flex w-full">
                                <button
                                    type="submit"
                                    className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#1cc88a] hover:bg-blue-400 rounded-2xl py-2 w-full transition duration-150 ease-in "
                                >
                                    <span className="mr-2 uppercase">Sign In</span>
                                    <span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
