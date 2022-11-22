import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { getGempaTerasa } from "../../API/API";
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
                <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 text-left">
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
                    <div className="flex xl:flex-row flex-col mt-4 gap-4 xl:max-h-[400px]">
                        <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg xl:w-1/3 w-full">
                            <div className="p-6 text-gray-900 w-full xl:mb-0 max-w-[400px]">
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
                        <div className="flex flex-row xl:justify-around bg-white overflow-hidden shadow-sm sm:rounded-lg xl:w-2/3 w-full">
                            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3 px-6"
                                            >
                                                No
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6"
                                            >
                                                Tanggal
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6"
                                            >
                                                Wilayah
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6"
                                            >
                                                Magnitudo
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6"
                                            >
                                                Kedalaman
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((data, index) => (
                                            <tr class="bg-white border-b">
                                            <th
                                                scope="row"
                                                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                {index}
                                            </th>
                                            <td class="py-4 px-6">{data.Tanggal}</td>
                                            <td class="py-4 px-6">{data.Wilayah.split(" ").splice(-2).join(" ")}</td>
                                            <td class="py-4 px-6">{data.Magnitude}</td>
                                            <td class="py-4 px-6">{data.Kedalaman}</td>
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
