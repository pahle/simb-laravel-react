import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import CardMitigasi from '@/Components/CardMitigasi';
import CarouselMitigasi from '@/Components/CarouselMitigasi';
import TitleSection from '@/Components/TitleSection';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCol, CRow} from '@coreui/react';

export default function Mitigation(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header="Mitigasi"
        >
            <Head title="Mitigasi" />

            <div className="w-full overflow-hidden mt-10">
                <div
                    className='bg-white sm:px-16 px-6 flex justify-center items-start'
                >
                    <div className='xl:max-w-[1280px] w-full'>
                        <div>
                            <TitleSection title="Pengetahuan Kebencanaan" />
                        </div>

                        {/* definisi bencana */}
                        <div className="w-full my-3">
                            <div className="text-left text-3xl font-semibold">
                                Definisi Bencana
                            </div>
                        </div>
                        <div className="flex relative">
                            <p className="basis-2/3 pr-10 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vero delectus? Consequuntur mollitia amet dolorum omnis reiciendis molestiae doloribus tempore odio ab ad quibusdam pariatur nulla voluptatum, sit quam veniam nostrum commodi aperiam ex eaque. Blanditiis eligendi aperiam dolorem minima enim libero eos reiciendis, harum officia, pariatur eius saepe soluta illum aspernatur distinctio hic, possimus corrupti nesciunt quidem? Corporis quod velit ex ratione iusto exercitationem, dolores rem quisquam laudantium! Dolor, amet magni quaerat eveniet reprehenderit velit facere eum qui nostrum asperiores doloremque doloribus. Corrupti autem rerum, dolore explicabo accusantium nulla esse, possimus, ullam temporibus nam et vel velit quas vitae.</p>
                            <div className="basis-1/3">
                                <CarouselMitigasi />
                            </div>
                        </div>

                        {/* card bencana */}
                        <div className="w-2/3 mx-auto pb-5">
                            <CardMitigasi />
                        </div>

                        {/* potensi ancaman */}
                        <div className='pb-2'>
                            <div className="w-full my-3">
                                <div className="text-left text-3xl font-semibold">
                                    Potensi Ancaman Bencana
                                </div>
                            </div>
                            <img src="https://bnpb.go.id//uploads/24/3-4-1.jpg" alt="Peta Indonesia" className="w-2/3 rounded-[15px] mx-auto" />
                            <p className="pb-3 pt-4 leading-8">Wilayah Indonesia terletak di daerah iklim tropis dengan dua musim yaitu panas dan hujanlingkungan yang minimal, proses pembangunan tetap menimbulkan dampak kerusakan lingkungan dan ekosistem. Pembangunan yang selama ini bertumpu pada eksploitasi sumber daya alam (terutama dalam skala besar) menyebabkan hilangnya daya dukung sumber daya ini terhadap kehidupan mayarakat. Dari tahun ke tahun sumber daya hutan di Indonesia semakin berkurang, sementara itu pengusahaan sumber daya mineral juga mengakibatkan kerusakan ekosistem yang secara fisik sering menyebabkan peningkatan risiko bencana.</p>
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
                                    <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500">
                                        <header>
                                            <h2 className="text-lg font-semibold pb-2">Legislasi</h2>
                                        </header>
                                        <p className="pb-2">Pemerintah Indonesia telah mengesahkan Undang-Undang Nomor 24 Tahun 2007 Tentang Penanggulangan Bencana. Produk hukum di bawahnya antara lain Peraturan Pemerintah , Peraturan Presiden, Peraturan Kepala Kepala Badan, serta peraturan daerah.</p>
                                        <footer className="text-slate-400 text-md">- Source <a href="//bnpb.go.id/sistem-penanggulangan-bencana" className="hover:text-sky-400 cursor-pointer italic no-underline text-inherit">bnpb.go.id</a></footer>
                                    </div>
                                </CCol>
                                <CCol xs>
                                    <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500">
                                        <header>
                                            <h2 className="text-lg font-semibold pb-2">Kelembagaan</h2>
                                        </header>
                                        <p className="pb-2">Badan Nasional Penanggulangan Bencana (BNPB) merupakan focal point lembaga pemerintah di tingkat pusat. Sementara itu, focal point penanggulangan bencana di tingkat provinsi dan kabupaten/kota adalah Badan Penanggulangan Bencana Daerah (BPBD).</p>
                                        <footer className="text-slate-400 text-md">- Source <a href="//bnpb.go.id/sistem-penanggulangan-bencana" className="hover:text-sky-400 cursor-pointer italic no-underline text-inherit">bnpb.go.id</a></footer>
                                    </div>
                                </CCol>
                                <CCol xs>
                                    <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500">
                                        <header>
                                            <h2 className="text-lg font-semibold pb-2">Pendanaan</h2>
                                        </header>
                                        <p className="pb-2">Komunitas internasional mendukung Pemerintah Indonesia dalam membangun manajemen penanggulangan bencana menjadi lebih baik.</p>
                                        <footer className="text-slate-400 text-md">- Source <a href="//bnpb.go.id/sistem-penanggulangan-bencana" className="hover:text-sky-400 cursor-pointer italic no-underline text-inherit">bnpb.go.id</a></footer>
                                    </div>
                                </CCol>
                            </CRow>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
