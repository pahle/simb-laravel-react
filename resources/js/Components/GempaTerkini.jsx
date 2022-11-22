import React, { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { getGempaTerkini } from "../API/API";

const GempaTerkini = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getGempaTerkini().then((data) => setData(data.Infogempa.gempa));
    }, []);

    let lat = parseFloat(data.Coordinates?.split(",").shift());
    

    let long = parseFloat(data.Coordinates?.split(",").pop());


    console.log(lat,long);

    return (
        <>
            <div className="w-full h-screen bg-gradient-to-l from-white via-white/70 to-transparent absolute flex items-center justify-end z-[1]">
                <div className="flex justify-center basis-1/2 flex-col p-28 text-right mr-4">
                    <div className="w-full pb-4">
                        <div className="text-right text-5xl font-semibold py-3">
                            GEMPA TERKINI
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-lg">Wilayah</p>
                        <p className="pb-3">{data.Wilayah}</p>
                        <p className="font-semibold text-lg">Tanggal</p>
                        <p className="pb-3">
                        {data.Tanggal} {data.Jam} 
                        </p>
                        <p className="font-semibold text-lg">Magnitude</p>
                        <p className="pb-3">{data.Magnitude}</p>
                        <p className="font-semibold text-lg">Kedalaman</p>
                        <p className="pb-3">{data.Kedalaman}</p>
                        <p className="font-semibold text-lg">Potensi</p>
                        <p className="pb-3">{data.Potensi}</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen overflow-hidden mb-5 relative z-0">
                {(lat,long) && (
                    <MapContainer
                        center={[lat,long+5]}
                        zoom={7}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[lat,long]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                )}
            </div>
        </>
    );
};

export default GempaTerkini;
