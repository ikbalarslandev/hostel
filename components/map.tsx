"use client";

import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function MapPage({ className = "" }: { className?: string }) {
  const position = { lat: 36.884809615672495, lng: 30.708707755120507 };

  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/Berlin+Hostel+%26+Street/@36.8809976,30.7036395,18.42z/data=!4m10!3m9!1s0x14c39006eedf3f27:0xcaa355039f162897!5m3!1s2024-05-04!4m1!1i2!8m2!3d36.8844456!4d30.7085944!16s%2Fg%2F11tfc5dq11?entry=ttu",
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
