import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOffer, getOfferId } from "../store/actions/offerAction";
import { CButton, CModal, CModalHeader, CModalTitle, CFormInput, CModalFooter, CForm } from "@coreui/react";
import { getProject } from "../store/actions/projectAction";

function FormAddSupplier({ visible, setVisible, offerUser }) {
    const { project } = useSelector((state) => state.project);
    const [offer, setOffer] = useState({
        nama_supplier: "",
        nama_klien: "",
        tanggal: "",
    });

    const dispatch = useDispatch();
    const inputHandle = (e) => {
        setOffer({
            ...offer,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandle = (e) => {
        e.preventDefault();
        dispatch(addOffer(offer));
        setVisible(false);
    };

    useEffect(() => {
        dispatch(getProject())
        // dispatch(getOfferId(offerUser.id))
    }, []);
    return (
        <CModal className="items-center" visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle>Add Supplier</CModalTitle>
            </CModalHeader>
            <CForm className="p-4">
                <CFormInput
                    onChange={inputHandle}
                    value={offer.nama_supplier}
                    className="mb-2"
                    name="nama_supplier"
                    type="text"
                    label="Nama Supplier"
                    placeholder="Nama Supplier"
                />
                <CFormInput
                    onChange={inputHandle}
                    value={offer.nama_klien}
                    className="mb-2"
                    name="nama_klien"
                    type="text"
                    label="Nama Klien"
                    placeholder="Nama Klien"
                />
                <CFormInput
                    onChange={inputHandle}
                    value={offer.tanggal}
                    className="mb-2"
                    name="tanggal"
                    type="date"
                    label="Tanggal"
                    placeholder="Tanggal"
                />
                <CModalFooter>
                    <CButton color="danger" onClick={() => setVisible(false)}>
                        Cancel
                    </CButton>
                    <CButton onClick={submitHandle} color="primary">
                        Add
                    </CButton>
                </CModalFooter>
            </CForm>
        </CModal>
    );
}

export default FormAddSupplier;
