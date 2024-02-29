"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import MapPage from "@/components/map";
import Template from "@/components/contact/template";

const ContactPage = () => {
  return (
    <main className="overflow-hidden bg-zinc-200 min-h-screen ">
      <div className="banner3  w-screen h-28 md:h-40 flex flex-col  items-center justify-center ">
        <h1 className="text-white text-5xl font-bold shadow-lg">Contact Us</h1>
      </div>
      <div className="flex">
        <div className="w-[70vw] h-[84vh] bg-black hidden md:block">
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <MapPage className="h-[90vh] max-w-screen " />
            </APIProvider>
          )}
        </div>
        <div className="flex-1">
          <Template
            header="ENQUIRIES"
            mail="info@examplehostel.com"
            phone="+90 555 555 55 55"
          />
          <Template
            header="RESERVATIONS"
            mail="bookings@examplehostel.com"
            phone="+90 555 555 55 55"
          />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
