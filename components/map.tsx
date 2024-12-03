"use client";

import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function MapPage({ className = "" }: { className?: string }) {
  const position = { lat: 40.99461252644812, lng: 29.02776657395166 };

  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/Yolo+Hostel/@40.9944497,29.0251359,17z/data=!3m1!4b1!4m9!3m8!1s0x14cab955e0436a69:0xcf7e1d4f90863a16!5m2!4m1!1i2!8m2!3d40.9944457!4d29.0277108!16s%2Fg%2F11h763wnyv?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  return (
    <section className={`${className} `}>
      <Map zoom={12} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
        <AdvancedMarker position={position} onClick={handleClick}>
          <Pin />
        </AdvancedMarker>
      </Map>
    </section>
  );
}
