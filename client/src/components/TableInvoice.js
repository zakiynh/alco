import React from "react";

function TableInvoice() {
    return (
        <tr>
            <td className="border border-b-2 border-l-2 border-r-2">{i + 1}</td>
            <td className="border border-b-2 border-l-2 border-r-2">Nama Supplier</td>
            <td className="border border-b-2 border-l-2 border-r-2 w-52">Nama Klien</td>
            <td className="border border-b-2 border-l-2 border-r-2 w-52">Tanggal</td>
        </tr>
    );
}

export default TableInvoice;
