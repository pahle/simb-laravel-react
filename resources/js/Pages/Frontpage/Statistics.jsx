import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { getGempaTerkini, getGempaList, getGempaTerasa } from "../../API/API";
import { Head } from "@inertiajs/inertia-react";
import { CChart } from "@coreui/react-chartjs";

export default function Statistics(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getGempaTerasa().then((data) => setData(data.Infogempa.gempa));
    }, []);

    let tanggal = data.map((data) => data.Tanggal).reverse();
    let magnitude = data.map((data) => data.Magnitude).reverse();
    let potensi = data.map((data) => data.Potensi);
    let kedalaman = data.map((data) => parseInt(data.Kedalaman)).reverse();
    let wilayah = data
        .map((data) => data.Wilayah.split(" ").splice(-2).join(" "))
        .reverse();

    console.log(data);

    let pot = 0;
    let tpot = 0;

    for (let i = 0; i < potensi.length; i++) {
        if (potensi[i] == "Tidak berpotensi tsunami") {
            pot += 1;
        } else {
            tpot += 1;
        }
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header="Statistik"
        >
            <Head title="Statistik" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <CChart
                                type="line"
                                data={{
                                    labels: [...tanggal],
                                    datasets: [
                                        {
                                            label: "Kekuatan Gempa (Magnitude)",
                                            backgroundColor:
                                                "rgba(220, 220, 220, 0.5)",
                                            borderColor:
                                                "rgba(255, 0, 0, 0.23)",
                                            pointBackgroundColor:
                                                "rgba(255, 0, 0, 1)",
                                            pointBorderColor: "#fff",
                                            data: [...magnitude],
                                        },
                                    ],
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex xl:flex-row flex-col mt-4">
                        <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg xl:w-1/3 w-full mr-6">
                            <div className="p-6 text-gray-900 w-full">
                                <CChart
                                    type="doughnut"
                                    data={{
                                        labels: [
                                            "Berpotensi Tsunami",
                                            "Tidak Berpotensi Tsunami",
                                        ],
                                        datasets: [
                                            {
                                                backgroundColor: [
                                                    "#41B883",
                                                    "#E46651",
                                                ],
                                                data: [pot, tpot],
                                            },
                                        ],
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row xl:justify-around bg-white overflow-hidden shadow-sm sm:rounded-lg xl:w-2/3 w-full xl:mt-0 mt-4">
                            <div className="text-gray-900 w-full overflow-auto xl:max-h-[400px]">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Tanggal
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                Wilayah
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                            >
                                                Magnitudo
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                            >
                                                Kedalaman
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {data.map((data, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {data.Tanggal}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {data.Wilayah.split(" ").splice(-2).join(" ")}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                                                    {data.Magnitude}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                                                    {data.Kedalaman}
                                                </td>
                                            </tr>
                                        ))}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
