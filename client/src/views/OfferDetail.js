import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOfferId } from "../store/actions/offerAction";
import TabelSupplier from "../components/TabelSupplier";
import { FaPlus, FaPrint } from "react-icons/fa";
import FormAddInvoice from "../components/FormAddInvoice";
import FormAddSupplier from "../components/FormAddSupplier";

function OfferDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const [addInvoiceVisible, setAddInvoiceVisible] = useState(false);
    const [addSupplierVisible, setAddSupplierVisible] = useState(false);

    useEffect(() => {
        dispatch(getOfferId(id)).then((data) => {
            setData(data);
        });
    }, [dispatch]);
    console.log("data: ", data.Projects);
    return (
        <div className="bg-gray-200 h-[100%] w-[100%] mt-8 text-gray-600">
            <div className="flex flex-col p-8 lg:flex lg:flex-col lg:flex-wrap w-full gap-3 lg:pt-1 font-bold">
                <div className="bg-white shadow-2xl h-full p-2 rounded-md flex flex-col gap-1">
                    <h1 className="text-left text-[#4c71dd] p-4 border-b text-2xl font-bold">Detail Customer</h1>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2">Kontak Pribadi</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Nama Perusahaan</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Alamat</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Email</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Marketing</th>
                            </tr>
                        </thead>

                        <tbody className="border-2 font-normal">
                            <tr>
                                <td className="border border-b-2 border-l-2 border-r-2">{data.kontak_pribadi}</td>
                                <td className="border border-b-2 border-l-2 border-r-2">{data.nama_perusahaan}</td>
                                <td className="border border-b-2 border-l-2 border-r-2 w-52">{data.alamat}</td>
                                <td className="border border-b-2 border-l-2 border-r-2">{data.email}</td>
                                <td className="border border-b-2 border-l-2 border-r-2">{data.marketing}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h1 className="text-left text-[#4c71dd] pl-4 border-b text-xl font-bold">Projects</h1>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Nama Proyek</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Status</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Aksi</th>
                            </tr>
                        </thead>

                        <tbody className="border-2 font-normal">
                            {data.Projects?.map((item, i) => {
                                return (
                                    <tr key={item.id}>
                                        <td className="border border-b-2 border-l-2 border-r-2">{i + 1}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{item.nama_proyek}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 w-52">{item.status}</td>
                                        <td className="flex gap-1 my-2 items-center justify-center">
                                            <div
                                                onClick={() => {
                                                    setAddInvoiceVisible(!addInvoiceVisible);
                                                }}
                                                className="flex flex-row justify-center items-center bg-green-700 rounded-md"
                                            >
                                                <FaPlus className="bg-green-700 p-2 h-8 w-8 rounded-md text-black cursor-pointer" />
                                                <p className="flex cursor-pointer justify-center text-center items-center pr-2 text-white my-auto">
                                                    Add Invoice
                                                </p>
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setAddSupplierVisible(!addSupplierVisible);
                                                }}
                                                className="flex flex-row justify-center items-center bg-green-700 rounded-md"
                                            >
                                                <FaPlus className="bg-green-700 p-2 h-8 w-8 rounded-md text-black cursor-pointer" />
                                                <p className="flex cursor-pointer justify-center text-center items-center pr-2 text-white my-auto">
                                                    Add Supplier
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <h1 className="text-left text-[#4c71dd] pl-4 border-b text-xl font-bold">Invoice</h1>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2">No Invoice</th>
                                <th className="border border-b-2 border-l-2 border-r-2">No Reference</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Jenis Pembayaran</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Status Pembayaran</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Print</th>
                            </tr>
                        </thead>

                        <tbody className="border-2 font-normal">
                            {data.Projects?.map((item, i) => {
                                return (
                                    <tr key={item.id}>
                                        <td className="border border-b-2 border-l-2 border-r-2">{i + 1}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">No Invoice</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 w-52">No Reference</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 w-52">Jenis Pembayaran</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 w-52">Status Pembayaran</td>
                                        <td className="border w-full flex items-center justify-center my-auto">
                                            <FaPrint className="bg-gray-500 rounded-md w-8 h-8 p-2 text-black" />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <h1 className="text-left text-[#4c71dd] pl-4 border-b text-xl font-bold">Supplier</h1>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Nama Supplier</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Nama Klien</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Tanggal</th>
                            </tr>
                        </thead>

                        <tbody className="border-2 font-normal">
                            {data.Projects?.map((item, i) => {
                                return (
                                    <tr key={item.id}>
                                        <td className="border border-b-2 border-l-2 border-r-2">{i + 1}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">Nama Supplier</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 w-52">Nama Klien</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 w-52">Tanggal</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <FormAddInvoice visible={addInvoiceVisible} setVisible={setAddInvoiceVisible} />
                    <FormAddSupplier visible={addSupplierVisible} setVisible={setAddSupplierVisible} />
                </div>
            </div>
            {/* <TabelSupplier /> */}
        </div>
    );
}

export default OfferDetail;
