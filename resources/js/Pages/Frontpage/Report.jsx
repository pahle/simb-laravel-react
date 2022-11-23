import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CFormLabel, CFormInput, CFormCheck, CFormTextarea } from '@coreui/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

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

                        <div className='p-4'>
                            <CFormLabel htmlFor="basic-url" className='text-lg font-semibold'>Identitas Pelapor</CFormLabel>
                            <div className="mt-2">
                                <InputLabel forInput="nama" value="Nama" />

                                <TextInput
                                    type="text"
                                    name="nama"
                                    value=""
                                    className="mt-1 block w-full"
                                    autoComplete="nama"
                                />

                                <InputError message='' className="mt-2" />
                            </div>
                            <div className="mt-2 mb-4">
                                <InputLabel forInput="nik" value="NIK" />

                                <TextInput
                                    type="text"
                                    name="nik"
                                    value=""
                                    className="mt-1 block w-full"
                                    autoComplete="nik"
                                />

                                <InputError message='' className="mt-2" />
                            </div>
                            <CFormLabel htmlFor="basic-url" className='text-lg font-semibold'>Kronologi Gempa</CFormLabel>
                            <div className="mt-2">
                                <InputLabel forInput="lokasi" value="Lokasi" />

                                <TextInput
                                    type="text"
                                    name="lokasi"
                                    value=""
                                    className="mt-1 block w-full"
                                    autoComplete="lokasi"
                                />

                                <InputError message='' className="mt-2" />
                            </div>
                            <div className="mt-2">
                                <InputLabel forInput="waktu" value="Waktu" />

                                <TextInput
                                    type="text"
                                    name="waktu"
                                    value=""
                                    className="mt-1 block w-full"
                                    autoComplete="waktu"
                                />

                                <InputError message='' className="mt-2" />
                            </div>
                            <div className="mt-2">
                                <InputLabel forInput="korban" value="Korban" />

                                <TextInput
                                    type="text"
                                    name="korban"
                                    value=""
                                    className="mt-1 block w-full"
                                    autoComplete="korban"
                                />

                                <InputError message='' className="mt-2" />
                            </div>
                            <div className="mt-2">
                                <InputLabel forInput="durasi" value="Durasi" />

                                <TextInput
                                    type="text"
                                    name="durasi"
                                    value=""
                                    className="mt-1 block w-full"
                                    autoComplete="durasi"
                                />

                                <InputError message='' className="mt-2" />
                            </div>
                            <div className='flex mt-2 flex-column'>
                                <CFormLabel htmlFor="basic-url" className='text-sm font-medium'>Guncangan</CFormLabel>
                                <div className='flex-auto text-center'>
                                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="1"/>
                                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="2"/>
                                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="option3" label="3"/>
                                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox4" value="option4" label="4"/>
                                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox5" value="option5" label="5"/>
                                </div>
                            </div>
                            <div className='flex mt-2 flex-column'>
                                <CFormLabel htmlFor="basic-url" className='text-sm font-medium block'>Deskripsi</CFormLabel>
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
            </div>
        </AuthenticatedLayout>
    );
}
