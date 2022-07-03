import React, { useEffect } from "react";

function Profile() {
    // useEffect(() => {
    //     localStorage.get
    // }, [])
    return (
        <div className="bg-gray-200 h-[100%] w-[50%] mx-auto items-center justify-center mt-8 text-gray-600">
            <div className="flex flex-col p-8 lg:flex lg:flex-col lg:flex-wrap w-full gap-3 lg:pt-1 font-bold">
                <div className="bg-white shadow-2xl h-full p-2 rounded-md flex flex-col gap-1">
                    <h1 className="text-center text-[#4c71dd] text-xl p-4 border-b">Profile</h1>
                    <div className="flex flex-row text-left text-xl pl-4 mb-2">
                        Name : <span className="ml-4 text-gray-400 font-bold text-xl">{localStorage.getItem("name")}</span>
                    </div>
                    <div className="flex flex-row text-left text-xl pl-4 mb-2">
                        Email  : <span className="ml-4 text-gray-400 font-bold text-xl">{localStorage.getItem("email")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
