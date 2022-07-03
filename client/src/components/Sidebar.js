import React, { useEffect } from "react";
import { FaChartPie, FaTachometerAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getOffer } from "../store/actions/offerAction";

function Sidebar() {
    return (
        <div className="bg-[#4c71dd] lg:w-[20%] font-mono">
            <div className="bg-[#4c71dd] flex space-x-4 items-center justify-center pb-2 m-4 border-b border-gray-400">
                <FaChartPie className="text-white h-8 w-8" />
                <h1 className="font-bold text-xs lg:text-lg lg:font-bold text-white">Project Alco</h1>
            </div>
            <div className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 m-4 border-b border-gray-400">
                <FaTachometerAlt className="text-white h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-white">Dashboard</h1>
            </div>
            <div className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 ml-6 border-gray-400">
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-white">INPUT DATA</h1>
            </div>
            <Link to={'/customers'} className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 ml-6 border-gray-400">
                <FaArrowUp className="text-gray-300 h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-gray-300">Penawaran</h1>
            </Link>
            <Link to={'/supplier'} className="bg-[#4c71dd] flex space-x-4 justify-start ml-6 border-gray-400">
                <FaArrowUp className="text-gray-300 h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-gray-300">Supplier</h1>
            </Link>
            <div className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 mt-2 ml-6 border-gray-400">
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-white">KEUANGAN</h1>
            </div>
            <Link to={'/buku-besar'} className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 ml-6 border-gray-400">
                <FaArrowUp className="text-gray-300 h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-gray-300">Buku Besar</h1>
            </Link>
            <Link to={'/neraca'} className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 ml-6 border-gray-400">
                <FaArrowUp className="text-gray-300 h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-gray-300">Neraca Saldo</h1>
            </Link>
            <div className="bg-[#4c71dd] flex space-x-4 justify-start ml-6 border-gray-400">
                <FaArrowUp className="text-gray-300 h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-gray-300">Jurnal Penyesuaian</h1>
            </div>
            <div className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 mt-2 ml-6 border-gray-400">
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-white">TRANSAKSI DAN REKAP DATA</h1>
            </div>
            <div className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 ml-6 border-gray-400">
                <FaArrowUp className="text-gray-300 h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-gray-300">Kas Kecil</h1>
            </div>
            <div className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 ml-6 border-gray-400">
                <FaArrowUp className="text-gray-300 h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-gray-300">Stok Gudang</h1>
            </div>
            <div className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 ml-6 border-gray-400">
                <FaArrowUp className="text-gray-300 h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-gray-300">Po Stok Gudang</h1>
            </div>
            <div className="bg-[#4c71dd] flex space-x-4 justify-start pb-2 ml-6 border-gray-400">
                <FaArrowDown className="text-gray-300 h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-gray-300">List Po</h1>
            </div>
            <div className="bg-[#4c71dd] flex space-x-4 justify-start ml-6 mr-4 pb-4 border-b border-gray-400">
                <FaArrowDown className="text-gray-300 h-4 w-4" />
                <h1 className="font-bold text-xs lg:text-md lg:font-bold text-gray-300">List Invoice</h1>
            </div>
            <div className="bg-[#4c71dd] flex space-x-4 items-center justify-center m-2 border-gray-400">
                <IoIosArrowDropleft className="text-white h-8 w-8" />
            </div>
        </div>
    );
}

export default Sidebar;
