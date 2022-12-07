import { React, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TitleSection from "@/Components/TitleSection";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import GempaTerkini from "@/Components/GempaTerkini";
import { getGempaTerkini } from "../../API/API";
import axios from "axios";

export default function Home(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        email: '',
        pesan: ''
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('contact'));
    };

    const posts = props.posts;

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors} header="">
            <Head title="Home" />

            <GempaTerkini className="h-[90vh]" />

            <div className="py-12">
                <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between gap-9">
                        {/* section berita */}
                        <div className="md:w-2/3 w-full">
                            <h2 className="text-3xl text-black">Berita Terbaru</h2>
                            <div className="grid gap-8 md:grid-cols-1 xl:grid-cols-2 mt-4 dark:text-black">
                                {posts.map((post, index) => (
                                    <div key={index} className="w-[430px]" >
                                        <div className="w-full">
                                            <img
                                                src="https://via.placeholder.com/430x250"
                                                alt=""
                                                className=""
                                            />
                                        </div>
                                        <div className="text-left flex flex-row justify-between mt-4">
                                            <h5 className="text-[18px] font-semibold">
                                                {post.title}
                                            </h5>
                                            <p className="text-[16px] font-normal w-50 text-right text-gray-500">
                                                24 Jan 2022
                                            </p>
                                        </div>
                                        <p className="text-justify">
                                            {post.excerpt}
                                            <a href={post.references} className="no-underline dark:text-blue-800"> Read More</a>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* section berita populer */}
                        <div className="md:w-1/3 w-full">
                            <h2 className="text-3xl text-black">Berita Populer</h2>
                            <div className="flex flex-col justify-between mt-4 gap-4 text-black">
                                <div className="flex flex-row w-full hover:bg-gray-300 ease-in-out transition-all duration-3003">
                                    <img
                                        src="assets/images/030289100_1642047204-photo-1621077742331-2df96a07cca7.jpg"
                                        alt=""
                                        width='100px'
                                    />
                                    <div className="flex flex-col gap-2 ml-4 my-auto">
                                        <h5 className="text-[16px] font-semibold">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </h5>
                                        <p>24 Nov 2022</p>
                                    </div>
                                </div>
                                <div className="flex flex-row w-full hover:bg-gray-300 ease-in-out transition-all duration-3003">
                                    <img
                                        src="assets/images/030289100_1642047204-photo-1621077742331-2df96a07cca7.jpg"
                                        alt=""
                                        width='100px'
                                    />
                                    <div className="flex flex-col gap-2 ml-4 my-auto">
                                        <h5 className="text-[16px] font-semibold">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </h5>
                                        <p>24 Nov 2022</p>
                                    </div>
                                </div>
                                <div className="flex flex-row w-full hover:bg-gray-300 ease-in-out transition-all duration-3003">
                                    <img
                                        src="assets/images/030289100_1642047204-photo-1621077742331-2df96a07cca7.jpg"
                                        alt=""
                                        width='100px'
                                    />
                                    <div className="flex flex-col gap-2 ml-4 my-auto">
                                        <h5 className="text-[16px] font-semibold">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </h5>
                                        <p>24 Nov 2022</p>
                                    </div>
                                </div>
                                <div className="flex flex-row w-full hover:bg-gray-300 ease-in-out transition-all duration-3003">
                                    <img
                                        src="assets/images/030289100_1642047204-photo-1621077742331-2df96a07cca7.jpg"
                                        alt=""
                                        width='100px'
                                    />
                                    <div className="flex flex-col gap-2 ml-4 my-auto">
                                        <h5 className="text-[16px] font-semibold">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </h5>
                                        <p>24 Nov 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-black my-6">
                        <TitleSection title="Hubungi Kami"/>
                    </div>
                    <div className="flex text-black">
                        <div className="flex flex-col items-stretch border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500 gap-6 w-2/3">
                            <p className="font-semibold text-lg">Tentang Kami</p>
                            <p>Pusat Informasi Gempa Bumi merupakan lembaga penanggulangan bencana yang berkedudukan di bawah dan bertanggung jawab kepada Gubernur. BPBD dipimpin oleh seorang kepala, yang dijabat secara ex officio oleh Sekretaris Daerah (Sekda), yang berkedudukan di bawah dan bertanggung jawab kepada Gubernur.</p>
                            <p>Email : simb.pusatiinformasigempa@jogjakota.go.id</p>
                        </div>
                
                        <form onSubmit={submit} className="w-full">
                            <div className="flex flex-col w-full justify-center items-stretch p-10 pt-0 gap-4">
                                <div className="mt-4">
                                    <InputLabel forInput="nama" value="Nama" />

                                    <TextInput
                                        type="text"
                                        name="nama"
                                        className="mt-1 block w-full"
                                        autoComplete="nama"
                                        placeholder="type here"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message='' className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel forInput="email" value="Email" />

                                    <TextInput
                                        type="email"
                                        name="email"
                                        className="mt-1 block w-full"
                                        autoComplete="email"
                                        placeholder="type here"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message='' className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel forInput="pesan" value="Pesan" />

                                    <TextInput
                                        type="text"
                                        name="pesan"
                                        className="mt-1 block w-full"
                                        autoComplete="pesan"
                                        placeholder="type here"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message='' className="mt-2" />
                                </div>
                                <div className="flex items-center justify-center mt-4">
                                <PrimaryButton className="w-1/2 bg-gradient-to-r from-[#030F6B] to-[#23284F]" processing={processing}>
                                    Submit
                                </PrimaryButton>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
