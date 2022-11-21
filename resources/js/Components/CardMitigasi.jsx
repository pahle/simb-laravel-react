import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCard, CCardImage, CCardBody, CCardText, CCardTitle, CCol, CRow, CCardFooter } from '@coreui/react';
import Button from "./Button";

const CardComponent = (props) => {
    return (
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
            <CCol xs>
                <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500 h-full">
                    <header>
                        <h2 className="text-lg font-semibold pb-2">Gempa Bumi</h2>
                    </header>
                    <p className="pb-2">Gempa bumi adalah getaran atau guncangan yang terjadi di permukaan bumi yang disebabkan oleh tumbukan antar lempeng bumi, patahan aktif, akitivitas gunung api atau runtuhan batuan.</p>
                    <footer className="text-slate-400 text-md pb-3">- Source <a href="//bnpb.go.id/definisi-bencana" className="hover:text-sky-400 cursor-pointer italic no-underline text-inherit">bnpb.go.id/definisi-bencana</a></footer>
                    <div className="text-center flex-auto flex justify-content-center align-items-end">
                        <a href="//bnpb.go.id/definisi-bencana" className="hover:text-white no-underline"><Button Button="Read more" /></a>
                    </div>
                </div>
            </CCol>
            <CCol xs>
                <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500 h-full">
                    <header>
                        <h2 className="text-lg font-semibold pb-2">bencana Tsunami</h2>
                    </header>
                    <p className="pb-2">Tsunami adalah gelombang air besar yang diakibatkan oleh gangguan di dasar laut, seperti gempa bumi. Awalnya gelombang tersebut memiliki amplitudo kecil (umumnya 30-60 cm), tetapi amplitudonya membesar saat mendekati pantai.</p>
                    <footer className="text-slate-400 text-md pb-3">- Source <a href="//id.wikipedia.org/wiki/Tsunami" className="hover:text-sky-400 cursor-pointer italic no-underline text-inherit">id.wikipedia.org/wiki/Tsunami</a></footer>
                    <div className="text-center flex-auto flex justify-content-center align-items-end">
                        <a href="//id.wikipedia.org/wiki/Tsunami" className="hover:text-white no-underline"><Button Button="Read more" /></a>
                    </div>
                </div>
            </CCol>
        </CRow>
    );
}

CardComponent.defaultProps = {
    title: "Title Here",
    thumbnail: "thumbnail.png",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam, officia velit maxime odio dolorum quo distinctio quis. Quam culpa eveniet libero neque enim vero architecto vitae. Harum, aperiam cumque."
}

export default CardComponent; 