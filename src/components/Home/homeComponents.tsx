import React, { useEffect, useState } from "react";
import BannerComponent from "../Banner/bannerComponent";

const HomeComponents = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [bannerKey, setBannerKey] = useState(0);

  const display = () => {
    setBannerKey(prevKey => prevKey + 1);
    setIsDisplay(true);
  };

  useEffect(() => {
    display();
  }, []);

  return (
    <section className=" h-full mt-4">
      <div className="flex flex-col items-center justify-center">
        <p className="text uppercase text-title font-bold">
          Safeguard your business with all-in-one cybersecurity
        </p>
        <div className="w-[90%] h-16 bg-black rounded-lg mt-20">
          <div className=" grid grid-cols-4 gap-8 items-center justify-around text-center h-full py-2 px-2">
            <button
              className="text text-white bg-red-600 rounded-lg h-full"
              onClick={display}
            >
              Risk Assessment
            </button>
            <button
              className="text text-black font-semibold bg-white rounded-lg h-full"
              onClick={display}
            >
              Risk Assessment
            </button>
            <button
              className="text text-black font-semibold bg-white rounded-lg h-full"
              onClick={display}
            >
              Risk Assessment
            </button>
            <button
              className="text text-black font-semibold bg-white rounded-lg h-full"
              onClick={display}
            >
              Risk Assessment
            </button>
          </div>
        </div>
      </div>
      <div key={bannerKey}>{isDisplay && <BannerComponent />}</div>
    </section>
  );
};

export default HomeComponents;
