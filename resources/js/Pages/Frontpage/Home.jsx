import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TitleSection from '@/Components/TitleSection';
import CardBerita from '@/Components/CardBerita';
import { Head } from '@inertiajs/inertia-react';
import GempaTerkini from '@/Components/GempaTerkini';

export default function Home(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header=""
        >
            <Head title="Home" />

            <GempaTerkini/>

            <TitleSection title="Berita Gempa Bumi"/>
            <CardBerita thumbnail=""/>

            <TitleSection title="Tentang SiTaSu"/>
        </AuthenticatedLayout>
    );
}
