"use client";

import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function MapPage({ className = "" }: { className?: string }) {
  const position = { lat: 41.0367, lng: 28.985 };

  return (
    <section className={`${className} `}>
      <Map zoom={12} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
        <AdvancedMarker position={position}>
          <Pin />
        </AdvancedMarker>
      </Map>
    </section>
  );
}
