import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import './Map.scss'
import 'leaflet/dist/leaflet.css'

export const Map = () => {

  const center =[51.774794949643535, 19.45659121081486]


  return (
    <div className="w-screen h-[40vh]">
    <MapContainer className='leaflet-container' 
                   id="map"
     center={center}
     zoom={35}
    >
     <TileLayer 
       attribution="&copy <a href='https://www.openstreetmap.org/copyright'>OpenstreetMap</a>"
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
    </MapContainer>
    </div>
  )
}
