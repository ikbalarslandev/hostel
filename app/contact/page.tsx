"use client";

import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { APIProvider } from "@vis.gl/react-google-maps";
import MapPage from "@/components/map";

export const Template = ({ header, mail, phone }: any) => {
  return (
    <div className="my-5">
      <h1 className="bg-yellow-400 py-1 px-3 mx-5 my-1 font-semibold text-pink text-2xl ">
        {header}
      </h1>
      <div className="flex gap-4 items-center justify-start">
        <CiMail className="h-8 w-8 mx-5 my-1 text-pink" />
        {mail}
      </div>
      <div className="flex gap-4 items-center justify-start">
        <CiPhone className="h-8 w-8 mx-5 my-1 text-pink" />
        {phone}
      </div>
    </div>
  );
};

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
