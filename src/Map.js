import React from 'react'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import classes from './styles.module.scss'

export const Map = () => {
    return (
        <MapContainer
                      center={[55.811831, 37.734021]}
                      zoom={16}
                      scrollWheelZoom={false}
                      className={classes.Map}

        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[55.811831, 37.734021]}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

// 55.811831, 37.734021

export default Map;
