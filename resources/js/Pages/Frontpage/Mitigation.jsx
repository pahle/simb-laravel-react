import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import CardMitigasi from "@/Components/CardMitigasi";
import CarouselMitigasi from "@/Components/CarouselMitigasi";
import TitleSection from "@/Components/TitleSection";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CCol, CRow } from "@coreui/react";

export default function Mitigation(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header="Mitigasi"
        >
            <Head title="Mitigasi" />

            <div className="py-12">
                <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-8">
                    <div>
                        <TitleSection title="Pengetahuan Kebencanaan" />
                    </div>

                    {/* definisi bencana */}
                    <div>
                        <div className="text-left text-3xl font-semibold">
                            <h2 className="font-semibold">Definisi Bencana</h2>
                        </div>
                        <div className="flex relative">
                            <div className="basis-2/3 pr-10 ">
                                <p className="leading-8 text-justify">
                                    Bencana adalah peristiwa atau rangkaian
                                    peristiwa yang mengancam dan mengganggu
                                    kehidupan dan penghidupan masyarakat yang
                                    disebabkan, baik oleh faktor alam dan/atau
                                    faktor nonalam maupun faktor manusia
                                    sehingga mengakibatkan timbulnya korban jiwa
                                    manusia, kerusakan lingkungan, kerugian
                                    harta benda, dan dampak psikologis. Definisi
                                    tersebut menyebutkan bahwa bencana
                                    disebabkan oleh faktor alam, non alam, dan
                                    manusia. Oleh karena itu, Undang-Undang
                                    Nomor 24 Tahun 2007 tersebut juga
                                    mendefinisikan mengenai bencana alam,
                                    bencana nonalam, dan bencana sosial.
                                </p>
                                <p className="leading-8 text-justify">
                                    Bencana nonalam adalah bencana yang
                                    diakibatkan oleh peristiwa atau rangkaian
                                    peristiwa nonalam yang antara lain berupa
                                    gagal teknologi, gagal modernisasi, epidemi,
                                    dan wabah penyakit.
                                </p>
                                <p className="leading-8 text-justify">
                                    Bencana alam adalah bencana yang diakibatkan
                                    oleh peristiwa atau serangkaian peristiwa
                                    yang disebabkan oleh alam antara lain berupa
                                    gempa bumi, tsunami, gunung meletus, banjir,
                                    kekeringan, angin topan, dan tanah longsor.
                                </p>
                            </div>
                            <div className="basis-1/3">
                                <CarouselMitigasi />
                            </div>
                        </div>
                    </div>

                    {/* card bencana */}
                    <div className="w-full flex flex-row justify-between mx-auto mt-20 pb-5">
                        <CardMitigasi />
                    </div>

                    {/* potensi ancaman */}
                    <div className="pb-2">
                        <div className="w-full my-3">
                            <div className="text-left text-3xl font-semibold">
                                Potensi Ancaman Bencana
                            </div>
                        </div>
                        <img
                            src="https://bnpb.go.id//uploads/24/3-4-1.jpg"
                            alt="Peta Indonesia"
                            className="w-full rounded-[15px] mx-auto"
                        />
                        <p className="pb-3 pt-4 leading-8">
                            Wilayah Indonesia terletak di daerah iklim tropis
                            dengan dua musim yaitu panas dan hujanlingkungan
                            yang minimal, proses pembangunan tetap menimbulkan
                            dampak kerusakan lingkungan dan ekosistem.
                            Pembangunan yang selama ini bertumpu pada
                            eksploitasi sumber daya alam (terutama dalam skala
                            besar) menyebabkan hilangnya daya dukung sumber daya
                            ini terhadap kehidupan mayarakat. Dari tahun ke
                            tahun sumber daya hutan di Indonesia semakin
                            berkurang, sementara itu pengusahaan sumber daya
                            mineral juga mengakibatkan kerusakan ekosistem yang
                            secara fisik sering menyebabkan peningkatan risiko
                            bencana.
                        </p>
                    </div>

                    {/* penanggulangan */}
                    <div className="w-full mx-auto pb-3">
                        <div className="my-3">
                            <div className="text-left text-3xl font-semibold">
                                Sistem Penanggulangan Bencana
                            </div>
                        </div>

                        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                            <CCol xs>
                                <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500 h-full">
                                    <header>
                                        <h2 className="text-lg font-semibold pb-2">
                                            Legislasi
                                        </h2>
                                    </header>
                                    <p className="pb-2">
                                        Pemerintah Indonesia telah mengesahkan
                                        Undang-Undang Nomor 24 Tahun 2007
                                        Tentang Penanggulangan Bencana. Produk
                                        hukum di bawahnya antara lain Peraturan
                                        Pemerintah , Peraturan Presiden,
                                        Peraturan Kepala Kepala Badan, serta
                                        peraturan daerah.
                                    </p>
                                    <footer className="text-slate-400 text-md">
                                        - Source{" "}
                                        <a
                                            href="//bnpb.go.id/sistem-penanggulangan-bencana"
                                            className="hover:text-sky-400 cursor-pointer italic no-underline text-inherit"
                                        >
                                            bnpb.go.id
                                        </a>
                                    </footer>
                                </div>
                            </CCol>
                            <CCol xs>
                                <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500 h-full">
                                    <header>
                                        <h2 className="text-lg font-semibold pb-2">
                                            Kelembagaan
                                        </h2>
                                    </header>
                                    <p className="pb-2">
                                        Badan Nasional Penanggulangan Bencana
                                        (BNPB) merupakan focal point lembaga
                                        pemerintah di tingkat pusat. Sementara
                                        itu, focal point penanggulangan bencana
                                        di tingkat provinsi dan kabupaten/kota
                                        adalah Badan Penanggulangan Bencana
                                        Daerah (BPBD).
                                    </p>
                                    <footer className="text-slate-400 text-md">
                                        - Source{" "}
                                        <a
                                            href="//bnpb.go.id/sistem-penanggulangan-bencana"
                                            className="hover:text-sky-400 cursor-pointer italic no-underline text-inherit"
                                        >
                                            bnpb.go.id
                                        </a>
                                    </footer>
                                </div>
                            </CCol>
                            <CCol xs>
                                <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500 h-full">
                                    <header>
                                        <h2 className="text-lg font-semibold pb-2">
                                            Pendanaan
                                        </h2>
                                    </header>
                                    <p className="pb-2">
                                        Komunitas internasional mendukung
                                        Pemerintah Indonesia dalam membangun
                                        manajemen penanggulangan bencana menjadi
                                        lebih baik.
                                    </p>
                                    <footer className="text-slate-400 text-md">
                                        - Source{" "}
                                        <a
                                            href="//bnpb.go.id/sistem-penanggulangan-bencana"
                                            className="hover:text-sky-400 cursor-pointer italic no-underline text-inherit"
                                        >
                                            bnpb.go.id
                                        </a>
                                    </footer>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
