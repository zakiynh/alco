import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import OfferContent from "../components/OfferContent";
import TabelSupplier from "../components/TabelSupplier";
import { RequireAuth, RequireNoAuth } from "../components/RequireAuth";

function HomePage() {
    return (
        <>
            <div className="lg:h-screen h-screen lg:w-screen w-screen">
                <div className="min-h-[100%] w-full lg:min-h-full flex">
                    <RequireAuth>
                        <Sidebar />
                    </RequireAuth>
                    <div className="bg-gray-200 w-[100%] lg:min-h-full flex flex-col">
                        <Navbar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
