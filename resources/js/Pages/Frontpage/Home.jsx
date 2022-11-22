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

            <GempaTerkini className="h-[90vh]"/>

            <div className="py-12">
                <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-8">
                    <TitleSection title="Berita Gempa Bumi" />
                    <CardBerita thumbnail="" />

                    <TitleSection title="Tentang SiTaSu" />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
