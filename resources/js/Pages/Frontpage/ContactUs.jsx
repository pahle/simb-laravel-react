import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCol, CRow } from '@coreui/react';
import Button from "../../Components/Button";

const ContactUs = (props) => {
    return (

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header="News Update"
        >
            <Head title="Statistik" />

            <div className="py-12">
                <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full lg:px-[100px] md:px-4 sm:px-10 hover:bg-gradient-to-tl hover:from-gray-100 hover:to-white py-16">

                    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                        <CCol xs>
                            <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500 h-full">
                                <header>
                                    <h2 className="text-lg font-semibold pb-2 text-center">BNPB Yogyakarta</h2>
                                </header>
                                <p className="mb-2">Gempa bumi adalah getaran atau guncangan yang terjadi di permukaan bumi yang disebabkan oleh tumbukan antar lempeng bumi, patahan aktif, akitivitas gunung api atau runtuhan batuan.</p>
                                <footer className="text-slate-400 text-md pb-3">- Website    <a href="//bnpb.go.id/definisi-bencana" className="hover:text-sky-400 cursor-pointer italic no-underline text-inherit">bnpb.go.id/definisi-bencana</a></footer>
                                <div className="text-center flex-auto flex justify-content-center align-items-end">
                                    <a href="//bnpb.go.id/definisi-bencana" className="hover:text-white no-underline"><Button Button="Read more" /></a>
                                </div>
                            </div>
                        </CCol>
                    </CRow>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default ContactUs;