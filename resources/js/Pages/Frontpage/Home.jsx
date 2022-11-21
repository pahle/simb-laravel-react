import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TitleSection from '@/Components/TitleSection';
import CardBerita from '@/Components/CardBerita';
import { Head } from '@inertiajs/inertia-react';

export default function Home(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header="Home"
        >
            <Head title="Home" />

            <TitleSection title="Berita Gempa Bumi"/>
            <CardBerita thumbnail=""/>

            <TitleSection title="Tentang SiTaSu"/>
        </AuthenticatedLayout>
    );
}
