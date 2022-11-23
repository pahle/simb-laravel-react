import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
    CFormLabel,
    CFormInput,
    CCol,
    CRow,
    CFormTextarea,
} from "@coreui/react";

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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full">
                        <form action="" className="p-5">
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        type="email"
                                        name="floating_email"
                                        id="floating_email"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        for="floating_email"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Email address
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        type="password"
                                        name="floating_password"
                                        id="floating_password"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        for="floating_password"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        type="password"
                                        name="repeat_password"
                                        id="floating_repeat_password"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        for="floating_repeat_password"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Confirm password
                                    </label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input
                                            type="text"
                                            name="floating_first_name"
                                            id="floating_first_name"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            for="floating_first_name"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            First name
                                        </label>
                                    </div>
                                </div>

                            <h1 className="text-center">Guncangan</h1>
                            <fieldset className="flex flex-row gap-4 justify-between mt-5">
                                <legend className="sr-only">Countries</legend>

                                <div className="flex items-center mb-4 ">
                                    <input
                                        id="option-1"
                                        type="radio"
                                        name="countries"
                                        value="USA"
                                        className="w-10 h-10 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="option-1"
                                        className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        1
                                    </label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input
                                        id="option-2"
                                        type="radio"
                                        name="countries"
                                        value="Germany"
                                        className="w-10 h-10 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="option-2"
                                        className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        2
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="option-3"
                                        type="radio"
                                        name="countries"
                                        value="Germany"
                                        className="w-10 h-10 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="option-3"
                                        className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        3
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="option-4"
                                        type="radio"
                                        name="countries"
                                        value="Germany"
                                        className="w-10 h-10 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="option-4"
                                        className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        4
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="option-5"
                                        type="radio"
                                        name="countries"
                                        value="Germany"
                                        className="w-10 h-10 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="option-5"
                                        className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        5
                                    </label>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
