"use client";

import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function MapPage({ className = "" }: { className?: string }) {
  const position = { lat: 41.0367, lng: 28.985 };

  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/Taksim+Square,+%C5%9Eehit+Muhtar,+34435+Beyo%C4%9Flu%2F%C4%B0stanbul/@41.0370013,28.974792,15z/data=!4m15!1m8!3m7!1s0x14cab7650656bd63:0x8ca058b28c20b6c3!2sTaksim+Square,+%C5%9Eehit+Muhtar,+34435+Beyo%C4%9Flu%2F%C4%B0stanbul!3b1!8m2!3d41.0370023!4d28.9850917!16zL20vMDJ5cW40!3m5!1s0x14cab7650656bd63:0x8ca058b28c20b6c3!8m2!3d41.0370023!4d28.9850917!16zL20vMDJ5cW40?entry=ttu",
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
