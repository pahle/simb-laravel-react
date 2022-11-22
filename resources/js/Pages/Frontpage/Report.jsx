import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CFormLabel, CFormInput, CCol, CRow, CFormTextarea } from '@coreui/react';

export default function Report(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header="Laporan Kebencanaan Gempa dan Tsunami"
        >
            <Head title="Laporan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-3/4">
                        <div></div>

                        <div className='p-4'>
                            <CFormLabel htmlFor="basic-url" className='text-lg font-semibold'>Identitas Pelapor</CFormLabel>
                            <CFormInput type="text" id="floatingInput" floatingLabel="nama lengkap" placeholder="nama lengkap" className='mb-3' />
                            <CFormInput type="text" id="floatingInput" floatingLabel="usia" placeholder="usia" className='mb-3' />
                            <CFormLabel htmlFor="basic-url" className='text-lg font-semibold'>Kronologi Gempa</CFormLabel>
                            <CFormInput type="text" id="floatingInput" floatingLabel="lokasi gempa" placeholder="lokasi gempa" className='mb-3' />
                            <CFormInput type="text" id="floatingInput" floatingLabel="magnitudo" placeholder="magnitudo" className='mb-3' />
                            <CRow className="g-3">
                                <CCol xs>
                                    <CFormInput type="text" id="floatingInput" floatingLabel="garis lintang" placeholder="garis lintang" className='mb-3' />
                                </CCol>
                                <CCol xs>
                                    <CFormInput type="text" id="floatingInput" floatingLabel="garis bujur" placeholder="garis bujur" className='mb-3' />
                                </CCol>
                            </CRow>
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
