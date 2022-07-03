import React from "react";
import { CDropdown, CDropdownMenu, CDropdownItem, CDropdownToggle } from "@coreui/react";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
    function logout() {
        localStorage.removeItem("access_token");
        window.location.reload();
    }
    return (
        <nav className="h-[72px] w-[100%] bg-white shadow-lg flex justify-between">
            <div className="flex space-x-3 w-full items-end justify-between p-3 ">
                <h1 className="text-[#1c1a4e] hidden lg:block lg:font-bold lg:text-gray-400 lg:text-3xl">Sistem Informasi Admin</h1>
                <CDropdown className="flex cursor-pointer my-auto">
                    <div className="flex space-x-1 items-center justify-center">
                        <h1 className="text-[#1c1a4e] hidden lg:block lg:border-l lg:p-2 lg:text-base">Hallo, User</h1>
                    </div>
                    <CDropdownToggle color="btn-secondary" caret={false}>
                        <img
                            src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0"
                            alt="avatar"
                            className="items-center justify-center rounded-full border-2 lg:w-10 lg:h-10"
                        />
                    </CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem className="cursor-pointer flex flex-row w-full">
                            <Link to={'/profile'} className="cursor-pointer no-underline flex flex-row w-full text-left items-center">
                                <AiOutlineUser />
                                <span className="ml-2">Profile</span>
                            </Link>
                        </CDropdownItem>
                        <CDropdownItem onClick={logout} className="cursor-pointer flex flex-row w-full">
                            <div className="cursor-pointer flex flex-row w-full text-left items-center text-red-700">
                                <HiOutlineLogout />
                                <span className="ml-2">Logout</span>
                            </div>
                        </CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </div>
        </nav>
    );
}

export default Navbar;
