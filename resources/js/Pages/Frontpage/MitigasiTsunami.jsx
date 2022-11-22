import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel, CImage, CCarouselItem } from '@coreui/react';

export default function MitigasiTsunami(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header=""
        >
            <div className='h-[500px] absolute flex justify-center items-center z-[2] w-full '>
                <h1 className='text-5xl font-semibold text-white text-center drop-shadow-xl'>Mitigasi Tsunami</h1>
            </div>

            {/* carousel */}
            <div className='mb-3'>
                <CCarousel indicators>
                    <CCarouselItem>
                        <div className='w-100 h-[500px] overflow-hidden'>
                            <CImage className="d-block w-100 mt-[-250px]" src="/assets/images/CarouselTsunami/Bock-Clark-Sulawesi.webp" alt="slide 1" />
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='w-100 h-[500px] overflow-hidden'>
                            <CImage className="d-block w-100 mt-[-350px]" src="/assets/images/CarouselTsunami/tsunami-terbesar-yang-terjadi-di.original.jpegquality-90.jpg" alt="slide 2" />
                        </div>
                    </CCarouselItem>
                    <CCarouselItem>
                        <div className='w-100 h-[500px] overflow-hidden'>
                            <CImage className="d-block w-100 mt-[-350px]" src="/assets/images/CarouselTsunami/202103181357-main.cropped_1617196916.jpg" alt="slide 3" />
                        </div>
                    </CCarouselItem>
                </CCarousel>
            </div>

            <div className='container-lg'>
                <div className='rounded-md overflow-hidden w-2/3 m-auto'>
                    <img src="/assets/images/2022_09_20_09_02_44.520721_file.jpeg" alt="mitigasi bencana tsunami" />
                </div>
                <div className="w-full my-3">
                    <div className="text-left text-3xl font-semibold mb-2">
                        Pra Bencana
                    </div>
                    <ul className='list-disc leading-8'>
                        <li>Pembangunan sistem peringatan dini tsunami.</li>
                        <li>sosialisasi terhadap masyarakat yang tinggal di pinggir pantai mengenai ciri terjadinya tsunami dan cara evakuasi mandiri.</li>
                        <li>Mengetahui pusat informasi bencana, seperti BPBD, BMKG, PVMBG dan instansi lainnya.</li>
                        <li>Kenali area sekitar yang beresiko dan mengetahui wilayah dataran tinggi dan dataran yang beresiko terkena tsunami.</li>
                        <li>Penting mengetahui rute evakuasi yang telah di buat ketika peringatan dikeluarkan.</li>
                        <li> Siapkan persediaan pengungsian dalam suatu tempat yang mudah di bawa.</li>
                    </ul>

                    <div className="text-left text-3xl font-semibold mb-2">
                        Saat Bencana
                    </div>
                    <ul className='list-disc leading-8'>
                        <li>Jika anda berada di sekitar pantai dan terasa guncangan gempa bumi dan di susul air laut surut secara tiba-tiba sehingga dasar laut terlihat, segeralah lari menuju ke tempat yang tinggi (perbukitan atau bangunan tinggi)</li>
                        <li>Jika anda sedang berada di perahu atau kapal di tengah laut, kemudian anda mendengar berita dari pantai telah terjadi tsunami, jangan arahkan perahu atau kapal mendekat ke pesisir pantai.</li>
                        <li>Jika gelombang pertama yang datang telah surut, jangan segera turun ke tempat yang rendah, karena gelombang tsunami bisa jadi tidak datang sekali, bisa jadi gelombang yang datang kemudian justru lebih tinggi dan berbahaya.</li>
                        <li>Jika tsunami terjadi pada saat anda sedang menyetir kendaraan, segera keluar dan cari tempat yang tinggi dan aman.</li>
                        <li>Segera mengungsi setelah ada pemberitahuan dari pihak yang berwenang atas penyebaran informasi tentang tsunami. Penting untuk tidak mempercayai berita dengan sumber yang tidak jelas kebenarannya.</li>
                        <li>Utamakan keselamatan terlebih dahulu, tinggalkan barang yang tidak perlu dan menghambat anda dalam melakukan evakuasi diri. Selanjutnya anda bisa memastikan tidak ada anggota keluarga yang tertinggal pada saat pergi ke tempat evakuasi.</li>
                        <li>Nyalakan radio untuk mengetahui apakah tsunami terjadi setelah adanya gempa bumi di sekitar wilayah pantai.</li>
                    </ul>

                    <div className="text-left text-3xl font-semibold mb-2">
                        Pasca Bencana
                    </div>
                    <ul className='list-disc leading-8'>
                        <li>Pembangunan shelter atau tempat pengungsian serta dapur umum.</li>
                        <li>Penanaman mangrove di tepi pantai.</li>
                        <li>Jauhi pantai. Jangan pernah menuju ke pantai untuk melihat datangnya tsunami.</li>
                        <li>Cepat bergerak ke arah daratan yang lebih tinggi dan tinggal di sana sementara waktu.</li>
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

