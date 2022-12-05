import React, { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { getGempaTerkini } from "../API/API";

const GempaTerkini = () => {
    const [data, setData] = useState([]);

    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        getGempaTerkini().then((data) => setData(data.Infogempa.gempa));
    }, []);

    let lat = parseFloat(data.Coordinates?.split(",").shift());


    let long = parseFloat(data.Coordinates?.split(",").pop());

    return (
        <div className="overflow-hidden relative w-full">
            <button
                className="flex justify-center p-4 absolute h-[80vh] bottom-20 z-40 text-transparent hover:text-black ease-in-out transition-all duration-300 font-semibold"
                onClick={() => setShowMap(
                    (previousState) => !previousState
                )}
            >
                <p className={`my-auto ${!showMap ? 'hidden' : 'block'}`}>Show Info</p>
                <p className={`my-auto ${!showMap ? 'block' : 'hidden'}`}>Hide Info</p>
            </button>
            <div className={`w-full h-screen bg-gradient-to-l from-white via-white/70 to-transparent absolute flex items-center justify-end z-[1] ease-in-out transition-all duration-500 ${!showMap ? 'left-0 opacity-100' : 'left-[1440px] opacity-0'}`}>
                <div className="flex justify-center xl:basis-1/2 flex-col xl:p-28 p-14 text-right mr-4 text-black">
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
                {(lat, long) && (
                    <MapContainer
                        center={[lat, long + 5]}
                        zoom={7}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[lat, long]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                )}
            </div>
        </div>
    );
};

export default GempaTerkini;
