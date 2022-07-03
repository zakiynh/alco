import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNeraca } from "../store/actions/neracaAction";
import ReactLoading from "react-loading";

function Neraca() {
    const { neraca } = useSelector((state) => state.neraca);
    console.log("neraca: ", neraca.asset);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNeraca());
    }, []);
    if (!neraca.asset) {
        return (
            <div className="flex h-full items-center justify-center">
                <ReactLoading type="spinningBubbles" color="#0000FF" height={100} width={50} />
            </div>
        );
    }
    return (
        <div className="bg-gray-200 h-[100%] w-[100%] mt-8 text-gray-600">
            <div className="flex flex-col p-8 lg:flex lg:flex-col lg:flex-wrap w-full gap-3 lg:pt-1 font-bold">
                <div className="bg-white shadow-2xl h-full p-2 rounded-md flex flex-col gap-1">
                    <h1 className="text-left text-[#4c71dd] p-4 border-b text-2xl font-bold">Neraca Saldo</h1>

                    <h4 className="text-left text-[#4c71dd] pl-4 border-b text-base font-bold">Asset</h4>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2 w-10">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-20">No Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-auto">Nama Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Debet</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Kredit</th>
                            </tr>
                        </thead>
                        <tbody className="border-2 font-normal">
                            {neraca.asset.map((el, index) => {
                                return (
                                    <tr>
                                        <td className="border border-b-2 border-l-2 border-r-2">{index + 1}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.code}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 text-left pl-4">{el.account_name}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.debet}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.credit}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <h4 className="text-left text-[#4c71dd] pl-4 border-b text-base font-bold">Liabilities</h4>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2 w-10">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-20">No Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-auto">Nama Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Debet</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Kredit</th>
                            </tr>
                        </thead>
                        <tbody className="border-2 font-normal">
                            {neraca.liability.map((el, index) => {
                                return (
                                    <tr>
                                        <td className="border border-b-2 border-l-2 border-r-2">{index + 1}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.code}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 text-left pl-4">{el.account_name}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.debet}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.credit}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <h4 className="text-left text-[#4c71dd] pl-4 border-b text-base font-bold">Equity</h4>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2 w-10">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-20">No Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-auto">Nama Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Debet</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Kredit</th>
                            </tr>
                        </thead>
                        <tbody className="border-2 font-normal">
                            {neraca.equity.map((el, index) => {
                                return (
                                    <tr>
                                        <td className="border border-b-2 border-l-2 border-r-2">{index + 1}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.code}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 text-left pl-4">{el.account_name}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.debet}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.credit}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <h4 className="text-left text-[#4c71dd] pl-4 border-b text-base font-bold">Sales</h4>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2 w-10">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-20">No Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-auto">Nama Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Debet</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Kredit</th>
                            </tr>
                        </thead>
                        <tbody className="border-2 font-normal">
                            {neraca.sales.map((el, index) => {
                                return (
                                    <tr>
                                        <td className="border border-b-2 border-l-2 border-r-2">{index + 1}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.code}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 text-left pl-4">{el.account_name}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.debet}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.credit}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <h4 className="text-left text-[#4c71dd] pl-4 border-b text-base font-bold">COGS (Cost of Goods Sold)</h4>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2 w-10">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-20">No Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-auto">Nama Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Debet</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Kredit</th>
                            </tr>
                        </thead>
                        <tbody className="border-2 font-normal">
                            {neraca.cogs.map((el, index) => {
                                return (
                                    <tr>
                                        <td className="border border-b-2 border-l-2 border-r-2">{index + 1}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.code}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 text-left pl-4">{el.account_name}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.debet}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.credit}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <h4 className="text-left text-[#4c71dd] pl-4 border-b text-base font-bold">Expenses</h4>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2 w-10">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-20">No Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-auto">Nama Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Debet</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Kredit</th>
                            </tr>
                        </thead>
                        <tbody className="border-2 font-normal">
                            {neraca.expenses.map((el, index) => {
                                return (
                                    <tr>
                                        <td className="border border-b-2 border-l-2 border-r-2">{index + 1}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.code}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 text-left pl-4">{el.account_name}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.debet}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.credit}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <h4 className="text-left text-[#4c71dd] pl-4 border-b text-base font-bold">Other</h4>
                    <table className="w-full border-2 mb-4">
                        <thead className="border border-b-2 border-l-2 border-r-2">
                            <tr className="border border-b-2 border-l-2 border-r-2">
                                <th className="border border-b-2 border-l-2 border-r-2 w-10">No</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-20">No Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-auto">Nama Akun</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Debet</th>
                                <th className="border border-b-2 border-l-2 border-r-2 w-44">Kredit</th>
                            </tr>
                        </thead>
                        <tbody className="border-2 font-normal">
                            {neraca.other.map((el, index) => {
                                return (
                                    <tr>
                                        <td className="border border-b-2 border-l-2 border-r-2">{index + 1}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.code}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2 text-left pl-4">{el.account_name}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.debet}</td>
                                        <td className="border border-b-2 border-l-2 border-r-2">{el.credit}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Neraca;
