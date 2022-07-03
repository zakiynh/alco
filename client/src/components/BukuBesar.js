import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNeraca } from "../store/actions/neracaAction";

function BukuBesar() {
    const dispatch = useDispatch();
    const { neraca } = useSelector((state) => state.neraca);
    useEffect(() => {
        dispatch(getNeraca());
    }, []);
    return (
        <div className="bg-gray-200 h-[100%] w-[100%] mt-8 text-gray-600">
            <div className="flex flex-col p-8 lg:flex lg:flex-col lg:flex-wrap w-full gap-3 lg:pt-1 font-bold">
                <div className="bg-white shadow-2xl h-full p-2 rounded-md flex flex-row items-center justify-between gap-3">
                    <CDropdown className="w-[10%]">
                        <CDropdownToggle color="secondary">Asset</CDropdownToggle>
                        <CDropdownMenu>
                            {neraca.asset?.map((el, index) => 
                                <CDropdownItem>
                                    <Link to={`/neraca/${el.id}`} className="no-underline w-full flex">
                                        {el.account_name}
                                    </Link>
                                </CDropdownItem>)}
                        </CDropdownMenu>
                    </CDropdown>
                    <CDropdown className="w-[10%]">
                        <CDropdownToggle color="secondary">Liability</CDropdownToggle>
                        <CDropdownMenu>
                            {neraca.liability?.map((el, index) => 
                                <CDropdownItem>
                                    <Link to={`/neraca/${el.id}`} className="no-underline w-full flex">
                                        {el.account_name}
                                    </Link>
                                </CDropdownItem>)}
                        </CDropdownMenu>
                    </CDropdown>
                    <CDropdown className="w-[10%]">
                        <CDropdownToggle color="secondary">Equity</CDropdownToggle>
                        <CDropdownMenu>
                            {neraca.equity?.map((el, index) => 
                                <CDropdownItem>
                                    <Link to={`/neraca/${el.id}`} className="no-underline w-full flex">
                                        {el.account_name}
                                    </Link>
                                </CDropdownItem>)}
                        </CDropdownMenu>
                    </CDropdown>
                    <CDropdown className="w-[10%]">
                        <CDropdownToggle color="secondary">Sales</CDropdownToggle>
                        <CDropdownMenu>
                            {neraca.sales?.map((el, index) => 
                                <CDropdownItem>
                                    <Link to={`/neraca/${el.id}`} className="no-underline w-full flex">
                                        {el.account_name}
                                    </Link>
                                </CDropdownItem>)}
                        </CDropdownMenu>
                    </CDropdown>
                    <CDropdown className="w-[10%]">
                        <CDropdownToggle color="secondary">COGS</CDropdownToggle>
                        <CDropdownMenu>
                            {neraca.cogs?.map((el, index) => 
                                <CDropdownItem>
                                    <Link to={`/neraca/${el.id}`} className="no-underline w-full flex">
                                        {el.account_name}
                                    </Link>
                                </CDropdownItem>)}
                        </CDropdownMenu>
                    </CDropdown>
                    <CDropdown className="w-[10%]">
                        <CDropdownToggle color="secondary">Expense</CDropdownToggle>
                        <CDropdownMenu>
                            {neraca.expenses?.map((el, index) => 
                                <CDropdownItem>
                                    <Link to={`/neraca/${el.id}`} className="no-underline w-full flex">
                                        {el.account_name}
                                    </Link>
                                </CDropdownItem>)}
                        </CDropdownMenu>
                    </CDropdown>
                    <CDropdown className="w-[10%]">
                        <CDropdownToggle color="secondary">Others</CDropdownToggle>
                        <CDropdownMenu>
                            {neraca.other?.map((el, index) => 
                                <CDropdownItem>
                                    <Link to={`/neraca/${el.id}`} className="no-underline w-full flex">
                                        {el.account_name}
                                    </Link>
                                </CDropdownItem>)}
                        </CDropdownMenu>
                    </CDropdown>
                </div>
            </div>
        </div>
    );
}

export default BukuBesar;
