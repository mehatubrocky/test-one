import React from "react";
import Image from "next/image";
import Img from "../../assets/image.jpg";
import { BsCheck2Circle } from "react-icons/bs";

const BannerComponent = () => {
  const texts = ["Text 1", "Text 2", "Text 3"];
  return (
    <section className="justify-center m-20">
      <div className="container grid grid-cols-2">
        <div className="banner-animation-left flex flex-col items-start justify-start">
          <p className="text capitalize font-bold text-3xl">
            agaist evolving threads
          </p>
          <p className="mt-4 font-thin">
            Get a clear picture of your organization's security posture and how
            prepared you are agains evolving cyber threads befour malicous
            entities,and apply customized recommendations to improve your
            security programs.
          </p>
          <button className="bg-red-500 rounded-lg p-4 mt-10 text-white capitalize">
            Identify cyber risk today
          </button>
        </div>
        <div className="relative banner-animation-right flex items-center justify-center ml-32">
          <div className="bg-slate-200 rounded-full">
            <Image
              src={Img}
              className="h-[350px] w-[350px] p-10 rounded-full relative z-10"
              alt="Img"
              loading="lazy"
            />
            <div className="absolute inset-0 z-20 mt-5">
              <div className="flex flex-row">
                <div className="box-1">
                  <div className="flex flex-row gap-2 ml-2 text font-bold">
                    <BsCheck2Circle size={18} />
                    <p>SMB Solution</p>
                  </div>
                  <div className="line-1"></div>
                  <div className="white-dot-1">
                    <div className="blue-circle-1"></div>
                  </div>
                </div>
                <div className="box-4 mt-10">
                  <div className="flex flex-row gap-2 ml-2 text font-bold">
                    <BsCheck2Circle size={18} />
                    <p>Enterprise Security</p>
                  </div>
                  <div className="line-4"></div>
                  <div className="white-dot-4">
                    <div className="blue-circle-4"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="box-2 mt-12">
                  <div className="flex flex-row gap-2 ml-2 text text-orange-500 font-bold">
                    <BsCheck2Circle size={18} />
                    <p>Turkey Security Solution</p>
                  </div>
                  <div className="line-2"></div>
                  <div className="white-dot-2">
                    <div className="blue-circle-2"></div>
                  </div>
                </div>
                <div className="box-5 mt-20">
                  <div className="flex flex-row gap-2 ml-2 text font-bold">
                    <BsCheck2Circle size={18} />
                    <p>Managed Cloud Solution</p>
                  </div>
                  <div className="line-5"></div>
                  <div className="white-dot-5">
                    <div className="blue-circle-5"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="box-3 mt-10">
                  <div className="flex flex-row gap-2 ml-2 font-bold">
                    <BsCheck2Circle size={18} />
                    <p>Managed Security Solution</p>
                  </div>
                  <div className="line-3"></div>
                  <div className="white-dot-3">
                    <div className="blue-circle-3"></div>
                  </div>
                </div>
                <div className="box-6 mt-16">
                  <div className="flex flex-row gap-2 ml-2 font-bold">
                    <BsCheck2Circle size={18} />
                    <p>Bug Bounty Program</p>
                  </div>
                  <div className="line-6"></div>
                  <div className="white-dot-6">
                    <div className="blue-circle-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
