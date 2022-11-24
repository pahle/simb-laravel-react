import React from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TitleSection from "@/Components/TitleSection";
import CardBerita from "@/Components/CardBerita";
import { Head } from "@inertiajs/inertia-react";
import GempaTerkini from "@/Components/GempaTerkini";
import { getGempaTerkini } from "../../API/API";

export default function Home(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors} header="">
            <Head title="Home" />

            <GempaTerkini className="h-[90vh]" />

            <div className="py-12">
                <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between gap-9">
                        <div className="md:w-2/3 w-full">
                            <h2>Berita Terbaru</h2>
                            <div className="flex flex-row justify-between mt-4">
                                <div className="w-[430px]">
                                    <div className="w-full">
                                        <img
                                            src="https://via.placeholder.com/430x250"
                                            alt=""
                                            className=""
                                        />
                                    </div>
                                    <div className="text-left flex flex-row justify-between mt-4">
                                        <h5 className="text-[18px] font-semibold">
                                            Gempa Cianjur Terjadi Lagi
                                        </h5>
                                        <p className="text-[16px] font-semibold ">
                                            24 Jan 2022
                                        </p>
                                    </div>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Provident eaque hic
                                        reiciendis inventore harum quo?
                                        <a href="/"> Read More</a>
                                    </p>
                                </div>
                                <div className="w-[430px]">
                                    <div className="w-full">
                                        <img
                                            src="https://via.placeholder.com/430x250"
                                            alt=""
                                            className=""
                                        />
                                    </div>
                                    <div className="text-left flex flex-row justify-between mt-4">
                                        <h5 className="text-[18px] font-semibold">
                                            Gempa Cianjur Terjadi Lagi
                                        </h5>
                                        <p className="text-[16px] font-semibold ">
                                            24 Jan 2022
                                        </p>
                                    </div>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Provident eaque hic
                                        reiciendis inventore harum quo?
                                        <a href="/"> Read More</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-4">
                                <div className="w-[430px]">
                                    <div className="w-full">
                                        <img
                                            src="https://via.placeholder.com/430x250"
                                            alt=""
                                            className=""
                                        />
                                    </div>
                                    <div className="text-left flex flex-row justify-between mt-4">
                                        <h5 className="text-[18px] font-semibold">
                                            Gempa Cianjur Terjadi Lagi
                                        </h5>
                                        <p className="text-[16px] font-semibold ">
                                            24 Jan 2022
                                        </p>
                                    </div>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Provident eaque hic
                                        reiciendis inventore harum quo?
                                        <a href="/"> Read More</a>
                                    </p>
                                </div>
                                <div className="w-[430px]">
                                    <div className="w-full">
                                        <img
                                            src="https://via.placeholder.com/430x250"
                                            alt=""
                                            className=""
                                        />
                                    </div>
                                    <div className="text-left flex flex-row justify-between mt-4">
                                        <h5 className="text-[18px] font-semibold">
                                            Gempa Cianjur Terjadi Lagi
                                        </h5>
                                        <p className="text-[16px] font-semibold ">
                                            24 Jan 2022
                                        </p>
                                    </div>
                                    <p className="text-justify">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Provident eaque hic
                                        reiciendis inventore harum quo?
                                        <a href="/"> Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h2>Berita Populer</h2>
                            <div className="flex flex-col justify-between mt-4 gap-4">
                                <div className="flex flex-row w-full hover:bg-gray-300 ease-in-out transition-all duration-3003">
                                    <img
                                        src="https://via.placeholder.com/100x100"
                                        alt=""
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
                                        src="https://via.placeholder.com/100x100"
                                        alt=""
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
                                        src="https://via.placeholder.com/100x100"
                                        alt=""
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
                                        src="https://via.placeholder.com/100x100"
                                        alt=""
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
                    <div className="flex flex-col justify-center mt-20">
                        <TitleSection title="Tentang SITASU" />
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ad, modi ut a ipsa, ab neque reprehenderit
                            deserunt, alias eos debitis omnis numquam
                            voluptatibus harum similique sit quod quas. Eveniet
                            minima accusantium blanditiis maxime harum odit
                            commodi aliquid ducimus earum ea voluptatibus
                            tempore debitis perspiciatis, incidunt nihil
                            consequuntur dolorem amet totam!
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
