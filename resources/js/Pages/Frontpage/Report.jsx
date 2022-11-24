import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Report(props) {
    const [values, setValues] = useState({
        nama: "",
        nik: "",
        lokasi: "",
        tanggal: "",
        waktu: "",
        kerusakan: "",
        korban: "",
        deskripsi: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("/report", values);
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header="Laporan Kebencanaan Gempa dan Tsunami"
        >
            <Head title="Laporan" />

            <div className="py-12">
                <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-between form-control">
                            <div className="w-2/3 mx-auto mt-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-black">
                                        Nama
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="nama"
                                    placeholder="Type here"
                                    className="input input-bordered bg-white border-gray-500 w-full"
                                    value={values.nama}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-2/3 mx-auto mt-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-black">
                                        NIK
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered bg-white border-gray-500 w-full"
                                    value={values.nik}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="divider mt-12"></div>
                            <div className="w-2/3 mx-auto">
                                <label className="label">
                                    <span className="label-text font-semibold text-black">
                                        Lokasi
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered bg-white border-gray-500 w-full"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-2/3 mx-auto mt-4 flex flex-row justify-between gap-4">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-black">
                                            Tanggal
                                        </span>
                                    </label>
                                    <input
                                        type="date"
                                        placeholder="Type here"
                                        className="input input-bordered bg-white border-gray-500 w-full text-gray-400"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-black">
                                            Waktu
                                        </span>
                                    </label>
                                    <input
                                        type="time"
                                        placeholder="Type here"
                                        className="input input-bordered bg-white border-gray-500 w-full text-gray-400"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-2/3 mx-auto mt-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-black">
                                        Kerusakan
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue="50"
                                    className="range"
                                    step="25"
                                    onChange={handleChange}
                                />
                                <div className="w-full flex justify-between text-xs px-2">
                                    <span>Tidak Ada</span>
                                    <span>Ringan</span>
                                    <span>Sedang</span>
                                    <span>Banyak</span>
                                    <span>Sangat Banyak</span>
                                </div>
                            </div>
                            <div className="w-2/3 mx-auto mt-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-black">
                                        Korban
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue="50"
                                    className="range"
                                    step="25"
                                    onChange={handleChange}
                                />
                                <div className="w-full flex justify-between text-xs px-2">
                                    <span>0</span>
                                    <span>1-25</span>
                                    <span>26-50</span>
                                    <span>51-75</span>
                                    <span>76&gt;</span>
                                </div>
                            </div>
                            <div className="w-2/3 mx-auto mt-4">
                                <label className="label">
                                    <span className="label-text font-semibold text-black">
                                        Deskripsi
                                    </span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered w-full bg-white"
                                    placeholder="Jelaskan Kejadian"
                                ></textarea>
                            </div>
                            <div className="w-full flex justify-center mt-4 mb-4">
                                <button
                                    className="btn bg-gradient-to-r from-[#030F6B] to-[#23284F] text-white"
                                    type="submit"
                                    onClick={console.log(values)}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
