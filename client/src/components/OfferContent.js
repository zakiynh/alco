import React, { useEffect, useState } from "react";
import { FaPlus, FaSistrix, FaRegEdit, FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getOffer, deleteOffer } from "../store/actions/offerAction";
import FormAddOffer from "./FormAddOffer";
import ReactLoading from "react-loading";
import FormEditOffer from "./FormEditOffer";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import FormAddProject from "./FormAddInvoice";
import { CButton, CModal, CModalHeader, CModalTitle, CFormInput, CModalFooter, CForm } from "@coreui/react";
import { addProject, getProject } from "../store/actions/projectAction";

function OfferContent() {
    const [visible, setVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [addProjectVisible, setaddProjectVisible] = useState(false);
    const { offer } = useSelector((state) => state.offer);
    const dispatch = useDispatch();
    const [id, setId] = useState(null);
    const [offerUser, setOfferUser] = useState(null);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [total, setTotal] = useState([]);
    const [offerData, setOfferData] = useState([]);

    const handleDetail = (id) => navigate(`/customers/${id}`);
    const handlePageClick = (e) => {
        setCurrentPage(e.selected);
        const newPage = e.selected;
        dispatch(getOffer(newPage, perPage)).then((res) => {
            setOfferData(res);
        });
    };

    const pageCount = Math.ceil(total.length / perPage);

    function handleDelete(id) {
        dispatch(deleteOffer(id));
    }

    useEffect(() => {
        dispatch(getOffer());
        dispatch(getProject());
    }, [dispatch]);

    const { project } = useSelector((state) => state.project);
    const [offerProject, setOfferProject] = useState({
        code_project: `PN220702000${project.length + 1}`,
        code: "IC214",
        kontak_pribadi: "",
        nama_perusahaan: "",
        nama_proyek: "",
    });

    const inputHandle = (e) => {
        setOfferProject({
            ...offerProject,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandle = (e) => {
        e.preventDefault();
        let payload = offerProject
        payload.offer_id = id
        dispatch(addProject(payload));
        setaddProjectVisible(false);
    };

    if (!offer.length) {
        return (
            <div className="flex h-full items-center justify-center">
                <ReactLoading type="spinningBubbles" color="#0000FF" height={100} width={50} />
            </div>
        );
    }
    return (
        <>
            <div className="bg-gray-200 h-[100%] w-[100%] mt-8 text-gray-600">
                <div className="flex flex-col p-8 lg:flex lg:flex-col lg:flex-wrap w-full gap-3 lg:pt-1 font-bold">
                    <div
                        onClick={() => setVisible(!visible)}
                        className="bg-[#1cc88a] p-2 w-[10%] rounded-md flex items-center justify-center gap-1 cursor-pointer"
                    >
                        <FaPlus className="h-4 w-4" />
                        <h1 className="text-sm flex justify-center text-center items-center my-auto">Customer</h1>
                    </div>

                    <FormAddOffer visible={visible} setVisible={setVisible} />

                    <div className="bg-white shadow-2xl h-full p-2 rounded-md flex flex-col gap-1">
                        <h1 className="text-left text-[#4c71dd] p-4 border-b text-2xl font-bold">Daftar Customer</h1>

                        <div className="flex flex-col lg:flex-row justify-between p-4 mb-1 text-left">
                            <div className="lg:text-left items-center justify-center">
                                <h1 className="text-base">Show 10 entries</h1>
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
                                    <th className="border border-b-2 border-l-2 border-r-2">Kontak Pribadi</th>
                                    <th className="border border-b-2 border-l-2 border-r-2">Nama Perusahaan</th>
                                    <th className="border border-b-2 border-l-2 border-r-2">Alamat</th>
                                    <th className="border border-b-2 border-l-2 border-r-2">Email</th>
                                    <th className="border border-b-2 border-l-2 border-r-2">Marketing</th>
                                    <th className="border border-b-2 border-l-2 border-r-2">Aksi</th>
                                </tr>
                            </thead>

                            <tbody className="border-2 font-normal">
                                {offer?.map((el, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border border-b-2 border-l-2 border-r-2">{el.kontak_pribadi}</td>
                                            <td className="border border-b-2 border-l-2 border-r-2">{el.nama_perusahaan}</td>
                                            <td className="border border-b-2 border-l-2 border-r-2 w-52">{el.alamat}</td>
                                            <td className="border border-b-2 border-l-2 border-r-2">{el.email}</td>
                                            <td className="border border-b-2 border-l-2 border-r-2">{el.marketing}</td>
                                            <td className=" flex gap-1 my-2 items-center justify-center">
                                                <FaRegEdit
                                                    onClick={() => {
                                                        setId(el.id);
                                                        setEditVisible(!editVisible);
                                                    }}
                                                    className="bg-yellow-400 p-2 h-8 w-8 rounded-md text-black cursor-pointer"
                                                />
                                                <FaEye
                                                    onClick={() => handleDetail(el.id)}
                                                    className="bg-blue-700 p-2 h-8 w-8 rounded-md text-black cursor-pointer"
                                                />
                                                <AiFillDelete
                                                    onClick={() => handleDelete(el.id)}
                                                    className="bg-red-700 p-2 h-8 w-8 rounded-md text-black cursor-pointer"
                                                />
                                                <FaPlus
                                                    onClick={() => {
                                                        setId(el.id);
                                                        setaddProjectVisible(!addProjectVisible);
                                                        const setProj = {

                                                            code_project: `PN220702000${project.length + 1}`,
                                                        code: "IC214",
                                                        kontak_pribadi: el.marketing,
                                                        nama_perusahaan: el.nama_perusahaan,
                                                        nama_proyek: "",
                                                        }
                                                        setOfferProject(setProj);
                                                    }}
                                                    className="bg-green-700 p-2 h-8 w-8 rounded-md text-black cursor-pointer"
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <FormEditOffer visible={editVisible} setVisible={setEditVisible} id={id} />
                        {/* <FormAddProject visible={addProjectVisible} setVisible={setaddProjectVisible} offerUser={offerUser} /> */}

                        <CModal className="items-center" visible={addProjectVisible} onClose={() => setVisible(false)}>
                            <CModalHeader onClose={() => setaddProjectVisible(false)}>
                                <CModalTitle>Add Project</CModalTitle>
                            </CModalHeader>
                            <CForm className="p-4">
                                <CFormInput
                                    onChange={inputHandle}
                                    value={offerProject.code_project}
                                    className="mb-2"
                                    name="code_project"
                                    type="text"
                                    label="Offer Code"
                                    placeholder="PN220702000"
                                />
                                <CFormInput
                                    onChange={inputHandle}
                                    value={offerProject.code}
                                    className="mb-2"
                                    name="code"
                                    type="text"
                                    label="Code"
                                    placeholder="Nama Perusahaan"
                                />
                                <CFormInput
                                    onChange={inputHandle}
                                    value={offerProject.kontak_pribadi}
                                    className="mb-2"
                                    name="kontak_pribadi"
                                    type="text"
                                    label="Kontak Pribadi"
                                    placeholder="Kontak Pribadi"
                                />
                                <CFormInput
                                    onChange={inputHandle}
                                    value={offerProject.nama_perusahaan}
                                    className="mb-2"
                                    name="nama_perusahaan"
                                    type="nama_perusahaan"
                                    label="Nama Perusahaan"
                                    placeholder="Nama Perusahaan"
                                />
                                <CFormInput
                                    onChange={inputHandle}
                                    value={offerProject.nama_proyek}
                                    className="mb-2"
                                    name="nama_proyek"
                                    type="text"
                                    label="Nama Proyek"
                                    placeholder="Nama Proyek"
                                />
                                <CModalFooter>
                                    <CButton color="danger" onClick={() => setaddProjectVisible(false)}>
                                        Cancel
                                    </CButton>
                                    <CButton onClick={submitHandle} color="primary">
                                        Add
                                    </CButton>
                                </CModalFooter>
                            </CForm>
                        </CModal>

                        <div className="flex flex-col lg:flex-row justify-between p-4 mb-1 text-left">
                            <div className="lg:text-left items-center justify-center">
                                <h1 className="text-base">Showing 1 to 10 of 50 entries</h1>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:space-x-3 lg:items-end space-y-1">
                                <div className="flex items-center justify-center bg-white h-10">
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel=" >"
                                        // onPageChange={handlePageClick}
                                        pageRangeDisplayed={8}
                                        // pageCount={pageCount}
                                        previousLabel="< "
                                        renderOnZeroPageCount={null}
                                        containerClassName=" mx-4 p-4 border flex justify-center items-center align-center my-auto"
                                        pageClassName="border p-2 w-10 rounded-full"
                                        pageLinkClassName="page-link"
                                        activeClassName="bg-yellow-400"
                                        previousClassName="my-auto font-extrabold mr-2"
                                        nextClassName="my-auto font-extrabold ml-2"
                                        previousLinkClassName="page-link"
                                        breakClassName="my-auto"
                                        breakLinkClassName="page-link"
                                        className="flex justify-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OfferContent;
