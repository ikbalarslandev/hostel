"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function MapPage({ className }: { className?: string }) {
  const position = { lat: 41.0367, lng: 28.985 };
  const [open, setOpen] = useState(false);

  return (
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <section className={`${className}`}>
          <Map
            zoom={12}
            center={position}
            mapId={process.env.NEXT_PUBLIC_MAP_ID}
          >
            <AdvancedMarker position={position} onClick={() => setOpen(true)}>
              <Pin />
            </AdvancedMarker>
            {open && (
              <InfoWindow
                position={position}
                onCloseClick={() => setOpen(false)}
              >
                <div>
                  <h1>Hey there!</h1>
                  <p>Here is Taksim Square !</p>
                </div>
              </InfoWindow>
            )}
          </Map>
        </section>
      </APIProvider>
    )
  );
}
