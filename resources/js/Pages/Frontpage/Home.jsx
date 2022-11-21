import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TitleSection from '@/Components/TitleSection';
import { Head } from '@inertiajs/inertia-react';
import GempaTerkini from '@/Components/GempaTerkini';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCardImage, CCol, CRow } from '@coreui/react';
import Button from "./../../Components/Button";


export default function Home(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header=""
        >
            <Head title="Home" />

            <GempaTerkini/>

            <TitleSection title="Berita Gempa Bumi"/>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="mb-5 max-w-full">
                <CCol xs>
                    <div className="border rounded-md hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white h-full flex flex-column overflow-hidden">
                        <div className="h-40 overflow-hidden">
                            <CCardImage className="hover:scale-110 transition-all" orientation="top" src="" alt="Thumbnail Berita" />
                        </div>
                        <div className="p-3 flex flex-column flex-auto">
                            <header>
                                <h2 className="text-lg font-semibold pb-2">bencana Tsunami</h2>
                            </header>
                            <p className="pb-2">Tsunami adalah gelombang air besar yang diakibatkan oleh gangguan di dasar laut, seperti gempa bumi.</p>
                            <footer className="text-slate-400 text-sm pb-3 font-light">Published 02 November 2022</footer>
                            <div className="text-center flex-auto flex justify-content-center align-items-end">
                                <a href="//id.wikipedia.org/wiki/Tsunami" className="hover:text-white no-underline"><Button Button="Read more" /></a>
                            </div>
                        </div>
                    </div>
                </CCol>
            </CRow>

            <TitleSection title="Tentang SiTaSu"/>
        </AuthenticatedLayout>
    );
}
