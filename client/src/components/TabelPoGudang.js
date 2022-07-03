import React from "react";

function TabelPoGudang() {
    return (
        <div className="bg-gray-200 h-[100%] w-[100%] mt-8 text-gray-600">
            <div className="flex flex-col p-8 lg:flex lg:flex-col lg:flex-wrap w-full gap-3 lg:pt-1 font-bold">
                <div className="bg-white shadow-2xl h-full p-2 rounded-md flex flex-col gap-1">
                    <h1 className="text-left text-[#4c71dd] p-4 border-b">Tabel PO Gudang</h1>

                    <div className="flex flex-col lg:flex-row justify-between p-4 mb-1 text-left">
                        <div className="lg:text-left items-center justify-center">
                            <h1>Show 10 entries</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:space-x-3 lg:items-end space-y-1">
                            <div className="flex items-center justify-center bg-white h-10">
                                <div className="border-l-2 border-y-2 border-gray-400 h-full pl-2">
                                    <FaSistrix className="text-[#4c71dd] font-bold text-xl h-full" />
                                </div>
                                <form className="w-full">
                                    <input
                                        type="text"
                                        className="lg:w-40 w-full h-10 px-1 border-y-2 border-r-2 border-gray-400 text-[#4c71dd] focus:outline-none"
                                        placeholder="Find Customer"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>

                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Nomor PO</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Tanggal Kirim</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Batas Waktu</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Note</th>
                                <th className="border border-b-2 border-l-2 border-r-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="border-2 font-normal">
                            <tr>
                                <td className="border border-b-2 border-l-2 border-r-2">1</td>
                                <td className="border border-b-2 border-l-2 border-r-2">123123123</td>
                                <td className="border border-b-2 border-l-2 border-r-2">2022-02-09</td>
                                <td className="border border-b-2 border-l-2 border-r-2">2022-02-02</td>
                                <td className="border border-b-2 border-l-2 border-r-2">Ini Adalah notes</td>
                                <td className=" flex gap-1 my-2 items-center justify-center">
                                    <FaRegEdit className="bg-yellow-400 p-2 h-10 w-10 rounded-md text-black" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex flex-col lg:flex-row justify-between p-4 mb-1 text-left">
                        <div className="lg:text-left items-center justify-center">
                            <h1>Showing 1 to 10 of 50 entries</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:space-x-3 lg:items-end space-y-1">
                            <div className="flex items-center justify-center bg-white h-10">PAGINATION NANTI DISINI</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabelPoGudang;
