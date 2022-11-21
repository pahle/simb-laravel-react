import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCard, CCardBody, CCardText, CCol, CRow, CCardHeader } from '@coreui/react';

const CardPenanggulangan = () => {
    return (
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
            <CCol xs>
                <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500">
                    <header>
                        <h2 className="text-lg font-semibold pb-2">Legislasi</h2>
                    </header>
                    <p className="pb-2">Pemerintah Indonesia telah mengesahkan Undang-Undang Nomor 24 Tahun 2007 Tentang Penanggulangan Bencana. Produk hukum di bawahnya antara lain Peraturan Pemerintah , Peraturan Presiden, Peraturan Kepala Kepala Badan, serta peraturan daerah.</p>
                    <footer className="text-slate-400 text-md">- Source <a href="//bnpb.go.id/sistem-penanggulangan-bencana" className="hover:text-sky-400 cursor-pointer italic">bnpb.go.id</a></footer>
                </div>
            </CCol>
            <CCol xs>
                <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500">
                    <header>
                        <h2 className="text-lg font-semibold pb-2">Kelembagaan</h2>
                    </header>
                    <p className="pb-2">Badan Nasional Penanggulangan Bencana (BNPB) merupakan focal point lembaga pemerintah di tingkat pusat. Sementara itu, focal point penanggulangan bencana di tingkat provinsi dan kabupaten/kota adalah Badan Penanggulangan Bencana Daerah (BPBD).</p>
                    <footer className="text-slate-400 text-md">- Source <a href="//bnpb.go.id/sistem-penanggulangan-bencana" className="hover:text-sky-400 cursor-pointer italic">bnpb.go.id</a></footer>
                </div>
            </CCol>
            <CCol xs>
                <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500">
                    <header>
                        <h2 className="text-lg font-semibold pb-2">Pendanaan</h2>
                    </header>
                    <p className="pb-2">Komunitas internasional mendukung Pemerintah Indonesia dalam membangun manajemen penanggulangan bencana menjadi lebih baik.</p>
                    <footer className="text-slate-400 text-md">- Source <a href="//bnpb.go.id/sistem-penanggulangan-bencana" className="hover:text-sky-400 cursor-pointer italic">bnpb.go.id</a></footer>
                </div>
            </CCol>
        </CRow>
    );
}

CardPenanggulangan.defaultProps = {
    title: "Title Here",
    thumbnail: "thumbnail.png",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam, officia velit maxime odio dolorum quo distinctio quis. Quam culpa eveniet libero neque enim vero architecto vitae. Harum, aperiam cumque."
}

export default CardPenanggulangan; 