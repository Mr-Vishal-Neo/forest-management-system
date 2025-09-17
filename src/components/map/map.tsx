import {
  MapContainer,
  TileLayer,
  // Circle,
  useMap,
  // Tooltip,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapCss from "./map.module.scss";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import type { MapComponentType } from "../../types/types";

// const indiaBounds: [[number, number], [number, number]] = [
//   [6.5, 67], // South-West corner
//   [37.5, 97], // North-East corner
// ];

const maharashtraBounds: [[number, number], [number, number]] = [
  [15.5, 72.5], 
  [22.0, 82.0], 
];

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// ✅ Only accepts bounds now
function ChangeMapView({
  bounds,
}: {
  bounds: [[number, number], [number, number]];
}) {
  const map = useMap();
  map.fitBounds(bounds);
  return null;
}

// const cities = [
//   {
//     name: "Mumbai",
//     position: [19.076, 72.8777],
//     data: {
//       location: "Mumbai, India",
//       area: "0.603 mha",
//       treeLoss: "2023 (120 ha)",
//       biodiversity: "Low to moderate",
//     },
//   },
//   {
//     name: "Gujarat",
//     position: [22.2587, 71.1924],
//     data: {
//       location: "Gujarat, India",
//       area: "1.210 mha",
//       treeLoss: "2023 (250 ha)",
//       biodiversity: "Moderate",
//     },
//   },
//   {
//     name: "Madhya Pradesh",
//     position: [22.9734, 78.6569],
//     data: {
//       location: "Madhya Pradesh, India",
//       area: "1.843 mha",
//       treeLoss: "2023 (300 ha)",
//       biodiversity: "High",
//     },
//   },
//   {
//     name: "Kolkata",
//     position: [22.5726, 88.3639],
//     data: {
//       location: "Kolkata, India",
//       area: "0.320 mha",
//       treeLoss: "2023 (90 ha)",
//       biodiversity: "Low",
//     },
//   },
// ];

const MapComponent = () => {
  return (
    <div>
      <MapContainer
        bounds={maharashtraBounds}
        maxBounds={maharashtraBounds}
        maxBoundsViscosity={1.2}
        minZoom={8}
        maxZoom={10}
        className={mapCss["frs-map__wrap"]}
      >
        <ChangeMapView bounds={maharashtraBounds} />

        {/* 🟢 Use Carto Light basemap */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* {cities.map((city, index) => (
          <Circle
            key={index}
            center={city.position as [number, number]}
            radius={80000}
            pathOptions={{
              color: "#2e7d32",
              fillColor: "#66bb6a",
              fillOpacity: 0.5,
              weight: 1,
            }}
          >
            <Tooltip direction="top" sticky opacity={1}>
              <div>
                <strong>Location:</strong> {city.data.location} <br />
                <strong>Total Area:</strong> {city.data.area} <br />
                <strong>Tree Loss:</strong> {city.data.treeLoss} <br />
                <strong>Biodiversity:</strong> {city.data.biodiversity}
              </div>
            </Tooltip>
          </Circle>
        ))} */}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
