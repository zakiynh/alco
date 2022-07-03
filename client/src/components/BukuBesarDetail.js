import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BukuBesarDetail() {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/asset/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
          }, []);
          console.log("data: ", data);
    return (
        <div className="bg-gray-200 h-[100%] w-[100%] mt-8 text-gray-600">
            <div className="flex flex-col p-8 lg:flex lg:flex-col lg:flex-wrap w-full gap-3 lg:pt-1 font-bold">
                <div className="bg-white shadow-2xl h-full p-2 rounded-md flex flex-col gap-1">
                    <div className="bg-white shadow-2xl h-full p-2 rounded-md flex flex-col gap-1">
                        <h1 className="text-left text-[#4c71dd] p-4 border-b text-2xl font-bold">{data.account_name}</h1>
                        <table className="w-full border-2 mb-4">
                            <thead className="border border-b-2 border-l-2 border-r-2">
                                <tr className="border border-b-2 border-l-2 border-r-2">
                                    <th className="border border-b-2 border-l-2 border-r-2 w-24">Tanggal</th>
                                    <th className="border border-b-2 border-l-2 border-r-2 w-auto">Keterangan</th>
                                    <th className="border border-b-2 border-l-2 border-r-2 w-44">Debet</th>
                                    <th className="border border-b-2 border-l-2 border-r-2 w-44">Kredit</th>
                                    <th className="border border-b-2 border-l-2 border-r-2 w-44">Saldo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-b-2 border-l-2 border-r-2">2022-02-27</td>
                                    <td className="border border-b-2 border-l-2 border-r-2">Nana (Kapegangg 2 buah)</td>
                                    <td className="border border-b-2 border-l-2 border-r-2">23000</td>
                                    <td className="border border-b-2 border-l-2 border-r-2"></td>
                                    <td className="border border-b-2 border-l-2 border-r-2">23000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BukuBesarDetail;
