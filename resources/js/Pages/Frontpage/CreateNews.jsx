import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

const CreateNews = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        author: '',
        title: '',
        excerpt: '',
        references: '',
        thumbnail: ''
    });
    
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('addPost'));
    };

    return (

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header="News Update"
        >
            <Head title="Admin | Create Post" />

            <div className="py-12">
                <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={submit}>

                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full lg:px-[400px] md:px-10 sm:px-0 hover:bg-gradient-to-tl hover:from-gray-100 hover:to-white py-16">

                            <div className="">
                                <InputLabel forInput="author" value="Author" />

                                <TextInput
                                    type="text"
                                    name="author"
                                    className="mt-1 block w-full"
                                    autoComplete="author"
                                    placeholder="type here"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message='' className="mt-2" />
                            </div>
                            <div className="mt-4">
                                <InputLabel forInput="title" value="Title" />

                                <TextInput
                                    type="text"
                                    name="title"
                                    className="mt-1 block w-full"
                                    autoComplete="title"
                                    placeholder="type here"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message='' className="mt-2" />
                            </div>
                            <div className="mt-4">
                                <InputLabel forInput="excerpt" value="Excerpt" />

                                <TextInput
                                    type="text"
                                    name="excerpt"
                                    className="mt-1 block w-full"
                                    autoComplete="excerpt"
                                    placeholder="type here"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message='' className="mt-2" />
                            </div>
                            <div className="mt-4">
                                <InputLabel forInput="references" value="References" />

                                <TextInput
                                    type="text"
                                    name="references"
                                    className="mt-1 block w-full"
                                    autoComplete="references"
                                    placeholder="type here"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message={errors.references} className="mt-2" />
                            </div>
                            <div className="mt-4">
                                <InputLabel forInput="dropzone" value="Thumbnail" />
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-1 border-gray-300 border rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div> 

                                <InputError message='' className="mt-2" />
                            </div>

                            <div className="flex items-center justify-center mt-4">
                                <PrimaryButton className="w-1/2 bg-gradient-to-r from-[#030F6B] to-[#23284F]" processing={processing}>
                                    Publish
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default CreateNews;