import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOffer, getOfferId } from "../store/actions/offerAction";
import { CButton, CModal, CModalHeader, CModalTitle, CFormInput, CModalFooter, CForm } from "@coreui/react";
import { getProject } from "../store/actions/projectAction";

function FormAddInvoice({ visible, setVisible, offerUser }) {
    const { project } = useSelector((state) => state.project);
    const [offer, setOffer] = useState({
        no_invoice: "",
        no_reference: "",
        jenis_pembayaran: "",
        status_pembayaran: "",
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
                <CModalTitle>Add Invoice</CModalTitle>
            </CModalHeader>
            <CForm className="p-4">
                <CFormInput
                    onChange={inputHandle}
                    value={offer.no_invoice}
                    className="mb-2"
                    name="no_invoice"
                    type="text"
                    label="No Invoice"
                    placeholder="No Invoice"
                />
                <CFormInput onChange={inputHandle} value={offer.code} className="mb-2" name="code" type="text" label="Code" placeholder="Nama Perusahaan" />
                <CFormInput
                    onChange={inputHandle}
                    value={offer.no_reference}
                    className="mb-2"
                    name="no_reference"
                    type="text"
                    label="No Reference"
                    placeholder="No Reference"
                />
                <CFormInput
                    onChange={inputHandle}
                    value={offer.jenis_pembayaran}
                    className="mb-2"
                    name="jenis_pembayaran"
                    type="text"
                    label="Jenis Pembayaran"
                    placeholder="Jenis Pembayaran"
                />
                <CFormInput
                    onChange={inputHandle}
                    value={offer.status_pembayaran}
                    className="mb-2"
                    name="status_pembayaran"
                    type="text"
                    label="Status Pembayaran"
                    placeholder="Status Pembayaran"
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

export default FormAddInvoice;
