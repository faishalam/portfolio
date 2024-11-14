"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "../CardPin";
import { CompareComponents } from "./CompareComponents";
import { Compare } from "../Compare";

export const projects = [
  {
    id: 1,
    title: "PT Kalimantan Prima Persada (KPP Mining)",
    des: "Build Web App to monitor and manage assets, approvals, and overdue reminders, streamlining asset management processes and improving data accuracy.",
    years: "April 2024 - Present",
    position: "Full Stack Engineer",
    firstImage: "/images/kpp-auth.png",
    secondImage: "/images/kpp-dashboard.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/vercel.svg",
      "/javascript.svg",
      "/aws-white.svg",
    ],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Chatting App - Individual Project",
    des: "A full stack real time chatting app using Ruby on Rails and Next JS",
    years: "November 2024",
    position: "Full Stack Engineer",
    firstImage: "/images/chat-auth.png",
    secondImage: "/images/chat-dashboard.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/vercel.svg",
      "/ruby.svg",
      "/aws-white.svg",
      "/rails.svg",
    ],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Weather App - Individual Project",
    des: "A full stack weather app and forecasting app using Next JS",
    years: "October 2024",
    position: "Full Stack Engineer",
    firstImage: "/images/weather-dark.png",
    secondImage: "/images/weather-white.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/vercel.svg",
      "/javascript.svg",
      "/aws-white.svg",
    ],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Fashion E-commerce - Individual Project",
    des: "A full stack fashion e-commerce app end to end user payments using midtrans",
    years: "March 2024 - April 2024",
    position: "Full Stack Engineer",
    firstImage: "/images/fashion-dashboard.png",
    secondImage: "/images/fashion-list.png",
    img: "/p4.svg",
    iconLists: ["/react.svg", "/tail.svg", "/javascript.svg"],
    link: "/ui.apple.com",
  },
];

export default function CardPinComponents() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="text-4xl md:text-4xl lg:text-5xl flex flex-col w-full justify-center items-center font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-10">
          <p>Recent Project</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-white"
                  // style={{ backgroundColor: "#1F1F1F" }}
                ></div>
                <div className="flex flex-1 rounded-lg w-full">
                  <Compare
                    firstImage={item.firstImage}
                    secondImage={item.secondImage}
                    className="h-[250px]"
                    slideMode="hover"
                    autoplay={true}
                  />
                </div>
              </div>

              <h1 className="font-bold text-md text-base line-clamp-1 text-white">
                {item.title}
              </h1>
              <div className="flex w-full max-w-full justify-between text-xs">
                <p className="text-white">{item.position}</p>
                <p className="text-white">{item.years}</p>
              </div>

              <p
                className="lg:text-lg font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black shadow-lg lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex text-xs text-purple-500">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
