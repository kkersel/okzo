import React from 'react'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

export const Map = () => {
    return (
        <MapContainer  style={{ height: "50vh", width: "100%", borderRadius: '0 0 20px 20px'}}
                       center={[55.811831, 37.734021]}
                       zoom={16}
                       scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[55.811831, 37.734021]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

// 55.811831, 37.734021

export default Map;
