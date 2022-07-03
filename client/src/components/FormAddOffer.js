import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOffer } from "../store/actions/offerAction";
import { CButton, CModal, CModalHeader, CModalTitle, CFormInput, CModalFooter, CForm } from "@coreui/react";

function FormAddOffer({ visible, setVisible }) {
    const [offer, setOffer] = useState({
        kontak_pribadi: "",
        nama_perusahaan: "",
        alamat: "",
        email: "",
        marketing: "",
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
    return (
        <CModal className="items-center" visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle>Add Customer</CModalTitle>
            </CModalHeader>
            <CForm className="p-4">
                <CFormInput
                    onChange={inputHandle}
                    value={offer.kontak_pribadi}
                    className="mb-2"
                    name="kontak_pribadi"
                    type="text"
                    label="Kontak Pribadi"
                    placeholder="081312345..."
                />
                <CFormInput
                    onChange={inputHandle}
                    value={offer.nama_perusahaan}
                    className="mb-2"
                    name="nama_perusahaan"
                    type="text"
                    label="Nama Perusahaan"
                    placeholder="Nama Perusahaan"
                />
                <CFormInput onChange={inputHandle} value={offer.alamat} className="mb-2" name="alamat" type="text" label="Alamat" placeholder="Alamat" />
                <CFormInput onChange={inputHandle} value={offer.email} className="mb-2" name="email" type="email" label="Email" placeholder="Email" />
                <CFormInput
                    onChange={inputHandle}
                    value={offer.marketing}
                    className="mb-2"
                    name="marketing"
                    type="text"
                    label="Marketing"
                    placeholder="Marketing"
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

export default FormAddOffer;
