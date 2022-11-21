import React from "react";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'

const GempaTerkini = () => {
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
                        <p className="pb-3">
                            gempa dirasakan di daerah Kab. Pangandaran Lorem
                            ipsum, dolor sit amet consectetur adipisicing elit.
                            Vel, assumenda!
                        </p>
                        <p className="font-semibold text-lg">Waktu</p>
                        <p className="pb-3">5:12 WIB. 20-Nov-2024</p>
                        <p className="font-semibold text-lg">Magnitude</p>
                        <p className="pb-3">5.12</p>
                        <p className="font-semibold text-lg">Kedalaman</p>
                        <p className="pb-3">12 Km</p>
                        <p className="font-semibold text-lg">Potensi Tsunami</p>
                        <p className="pb-3">Tidak Berpotensi Tsunami</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen overflow-hidden mb-5 relative z-0">
                <MapContainer
                    center={[-6.84, 112.05]}
                    zoom={7}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-6.84, 107.05]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
};

export default GempaTerkini;
