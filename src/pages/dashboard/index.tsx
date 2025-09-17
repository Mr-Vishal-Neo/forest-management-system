import { useSelector } from "react-redux";
import { Icons } from "../../assets/icons/icons";
import MapComponent from "../../components/map/map";
import SearchBar from "../../components/searchbar/searchbar";
import dashboardCss from "./dashboard.module.scss";
import { useState } from "react";
import type { RootState } from "../../store/store";
// const defaultPosition = { lat: 19.7515, lng: 78.6569 };

const Dashboard = ({ sidebarOpen }: { sidebarOpen?: boolean }) => {
  const { activePanelKey } = useSelector((state: RootState) => state.layout);
  // const [position, setPosition] = useState<[number, number]>([
  //   defaultPosition.lat,
  //   defaultPosition.lng,
  // ]);
  // const [zoom, setZoom] = useState(4);
  const [hasSearched, setHasSearched] = useState(false);
  const [result, setResult] = useState([]);
  const isPanelOpen = !!activePanelKey;

  console.log('hasSearched', hasSearched)
  // const [hasSearched, setHasSearched] = useState(false);

  // const onPositionChange = (newPosition: [number, number]) => {
  //   setPosition(newPosition);
  //   setHasSearched(true); // Mark that a search has occurred
  // }

  // const onZoomChange = (newZoom: number) => {
  //   setZoom(newZoom);
  // };

  const onSearch = async (search: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          search
        )}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        // const lat = parseFloat(data[0].lat);
        // const lon = parseFloat(data[0].lon);
        // setPosition?.([lat, lon]);
        // setZoom?.(15);
        setHasSearched(true);
        setResult(data);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch data");
    }
  };

  return (
    <div
      className={`${dashboardCss["frs-dashboard__wrap"]}`}
    >
      {/* <SearchBar onPositionChange={onPositionChange} onZoomChange={onZoomChange} sidebarOpen={sidebarOpen} /> */}
      {/* <MapComponent position={position} zoom={zoom} hasSearched={hasSearched} /> */}
      <SearchBar
        isPanelOpen={isPanelOpen}
        sidebarOpen={sidebarOpen}
        onSearch={onSearch}
        placeHolder={"Search an area or location..."}
        customClsform={"form"}
        customClsfocus={"focused"}
        customClsinput={"input"}
        customClsbutton={"button"}
        icon={Icons?.citySearch}
      />
      <MapComponent 
      // position={position} zoom={zoom}
       />
    </div>
  );
};

export default Dashboard;
