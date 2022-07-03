import "./App.css";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import OfferContent from "./components/OfferContent";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TabelSupplier from "./components/TabelSupplier";
import { Route, Routes } from "react-router-dom";
import { RequireAuth, RequireNoAuth } from "./components/RequireAuth";
import "@coreui/coreui/dist/css/coreui.min.css";
import OfferDetail from "./views/OfferDetail";
import Profile from "./components/Profile";
import Neraca from "./components/Neraca";
import BukuBesar from "./components/BukuBesar";
import BukuBesarDetail from "./components/BukuBesarDetail";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route
                        path="/customers"
                        element={
                            <RequireAuth>
                                <div className="lg:h-screen h-screen lg:w-screen w-screen">
                                    <div className="min-h-[100%] w-full lg:min-h-full flex">
                                        <Sidebar />
                                        <div className="bg-gray-200 w-[100%] lg:min-h-full flex flex-col">
                                            <Navbar />
                                            <OfferContent />
                                        </div>
                                    </div>
                                </div>
                            </RequireAuth>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/supplier"
                        element={
                            <RequireAuth>
                                <div className="lg:h-screen h-screen lg:w-screen w-screen">
                                    <div className="min-h-[100%] w-full lg:min-h-full flex">
                                        <Sidebar />
                                        <div className="bg-gray-200 w-[100%] lg:min-h-full flex flex-col">
                                            <Navbar />
                                            <TabelSupplier />
                                        </div>
                                    </div>
                                </div>
                            </RequireAuth>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/customers/:id"
                        element={
                            <RequireAuth>
                                <div className="lg:h-screen h-screen lg:w-screen w-screen">
                                    <div className="min-h-[100%] w-full lg:min-h-full flex">
                                        <Sidebar />
                                        <div className="bg-gray-200 w-[100%] lg:min-h-full flex flex-col">
                                            <Navbar />
                                            <OfferDetail />
                                        </div>
                                    </div>
                                </div>
                            </RequireAuth>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/profile"
                        element={
                            <RequireAuth>
                                <div className="lg:h-screen h-screen lg:w-screen w-screen">
                                    <div className="min-h-[100%] w-full lg:min-h-full flex">
                                        <Sidebar />
                                        <div className="bg-gray-200 w-[100%] lg:min-h-full flex flex-col">
                                            <Navbar />
                                            <Profile />
                                        </div>
                                    </div>
                                </div>
                            </RequireAuth>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/neraca"
                        element={
                            <RequireAuth>
                                <div className="lg:h-screen h-screen lg:w-screen w-screen">
                                    <div className="min-h-[100%] w-full lg:min-h-full flex">
                                        <Sidebar />
                                        <div className="bg-gray-200 w-[100%] lg:min-h-full flex flex-col">
                                            <Navbar />
                                            <Neraca />
                                        </div>
                                    </div>
                                </div>
                            </RequireAuth>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/neraca/:id"
                        element={
                            <RequireAuth>
                                <div className="lg:h-screen h-screen lg:w-screen w-screen">
                                    <div className="min-h-[100%] w-full lg:min-h-full flex">
                                        <Sidebar />
                                        <div className="bg-gray-200 w-[100%] lg:min-h-full flex flex-col">
                                            <Navbar />
                                            <BukuBesarDetail />
                                        </div>
                                    </div>
                                </div>
                            </RequireAuth>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/buku-besar"
                        element={
                            <RequireAuth>
                                <div className="lg:h-screen h-screen lg:w-screen w-screen">
                                    <div className="min-h-[100%] w-full lg:min-h-full flex">
                                        <Sidebar />
                                        <div className="bg-gray-200 w-[100%] lg:min-h-full flex flex-col">
                                            <Navbar />
                                            <BukuBesar />
                                        </div>
                                    </div>
                                </div>
                            </RequireAuth>
                        }
                    />
                </Routes>
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <RequireNoAuth>
                                <LoginPage />
                            </RequireNoAuth>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <RequireAuth>
                                <HomePage />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;
