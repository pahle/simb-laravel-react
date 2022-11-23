import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CFormLabel, CFormInput, CFormCheck, CFormTextarea } from '@coreui/react';

export default function Report(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header="Laporan Kebencanaan Gempa dan Tsunami"
        >
            <Head title="Laporan" />

            <div className="py-12">
                <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-8 flex justify-center">
                    <div className="bg-white hover:bg-gradient-to-tl hover:from-gray-100 hover:to-white overflow-hidden shadow-sm sm:rounded-lg w-full lg:px-[400px] md:px-10 sm:px-0">
                        <div></div>

                        <div className='p-4'>
                            <CFormLabel htmlFor="basic-url" className='text-lg font-semibold'>Identitas Pelapor</CFormLabel>
                            <CFormInput type="text" id="floatingInput" floatingLabel="nama lengkap" placeholder="nama lengkap" className='mb-3' />
                            <CFormInput type="text" id="floatingInput" floatingLabel="NIK" placeholder="NIK" className='mb-3 focus:outline-sky-600' />
                            <CFormLabel htmlFor="basic-url" className='text-lg font-semibold'>Kronologi Gempa</CFormLabel>
                            <CFormInput type="text" id="floatingInput" floatingLabel="lokasi gempa" placeholder="lokasi gempa" className='mb-3' />
                            <CFormInput type="text" id="floatingInput" floatingLabel="waktu" placeholder="waktu" className='mb-3' />
                            <CFormInput type="text" id="floatingInput" floatingLabel="korban" placeholder="korban" className='mb-3' />
                            <CFormInput type="text" id="floatingInput" floatingLabel="durasi" placeholder="durasi" className='mb-3' />
                            <div className='flex'>
                                <CFormLabel htmlFor="basic-url" className='text-lg'>Guncangan</CFormLabel>
                                <div className='flex-auto text-center'>
                                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="1"/>
                                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="2"/>
                                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="option3" label="3"/>
                                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox4" value="option4" label="4"/>
                                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox5" value="option5" label="5"/>
                                </div>
                            </div>
                            <CFormTextarea
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                floatingLabel="kronologis kejadian"
                                style={{ height: '100px' }}
                            ></CFormTextarea>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
