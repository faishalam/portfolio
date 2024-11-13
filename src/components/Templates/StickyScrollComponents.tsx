"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "../StickyScroll";
import CardPinComponents from "./CardPinComponents";
import { CardWorkExperience } from "./CardWorkExperience";
import { PinContainer } from "../CardPin";
import { Compare } from "../Compare";

const content = [
  {
    title: "PT Igyolini Indonesia (NMW Clinic)",
    position: "Software Engineer - Frontend",
    years: "May 2024 - October 2024",
    description:
      "As a Frontend Engineer at NMW, I led the successful migration of a core medical application, Medlib, from PHP to React JS, achieving significant performance improvements and a modernized user interface. Medlib is a comprehensive medical records application designed for both patients and doctors, featuring essential tools such as appointment scheduling, prescription tracking, and medication recommendations.",
    points: (
      <div className="max-w-full w-full flex flex-col gap-3">
        {[
          {
            label: "Technology",
            value:
              "Directed the transition from PHP to React JS, enhancing application scalability, maintainability and clean code.",
          },
          {
            label: "UI Development",
            value:
              "Built modular, responsive UI components with React.js, ensuring a seamless and consistent user experience.",
          },
          {
            label: "Collaboration",
            value:
              "Worked closely with backend developers and UI/UX designers to integrate APIs and meet design specifications.",
          },
          {
            label: "Optimization",
            value:
              "Implemented performance enhancements, reducing load times and improving overall responsiveness.",
          },
          {
            label: "Quality Assurance",
            value:
              "Conducted rigorous testing to ensure stability and reliability throughout the development process.",
          },
        ].map((field, index) => (
          <div key={index} className="flex w-full max-w-fulll px-5">
            <div className="w-full flex justify-between max-w-[140px] md:max-w-[150px]">
              <span className="font-extrabold text-md">{field.label}</span>
              <span className="font-extrabold text-md mr-2">:</span>
            </div>
            <div className="text-md max-w-full w-full">
              <p className="max-w-full w-full">{field.value}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },

  {
    title: "PT Kalimantan Prima Persada (KPP Mining)",
    position: "Software Engineer - Full Stack Engineer - Project Based",
    years: "April 2024 - November 2024",
    description:
      "As a Full Stack Developer to build a web-based application utilized across all departments and sites of PT. Kalimantan Prima Persada (KPP Mining). This application is designed to facilitate asset monitoring, approvals, and overdue reminders, streamlining asset management processes and improving data accuracy.",
    points: (
      <div className="max-w-full w-full flex flex-col gap-3">
        {[
          {
            label: "Technology",
            value:
              "Next JS, TypeScript, React Query, Context API, Tailwind CSS, Express, Sequelize, PostgreSQL, Nodemailer, AWS Cloud etc.",
          },
          {
            label: "UI Development",
            value:
              "Atomic Design, responsive UI components with NextJS & Tailwind, ensuring a seamless, consistent user experience and clean code",
          },
          {
            label: "Collaboration",
            value:
              "Worked closely with user KPP to design and build the flow application.",
          },
          {
            label: "Optimization",
            value:
              "Implemented performance enhancements, reducing load times and improving overall responsiveness.",
          },
          {
            label: "Quality Assurance",
            value:
              "Conducted rigorous testing to ensure stability and reliability throughout the development process.",
          },
        ].map((field, index) => (
          <div key={index} className="flex w-full max-w-fulll px-5">
            <div className="w-full flex justify-between max-w-[140px] md:max-w-[150px]">
              <span className="font-extrabold text-md">{field.label}</span>
              <span className="font-extrabold text-md mr-2">:</span>
            </div>
            <div className="text-md max-w-full w-full">
              <p className="max-w-full w-full">{field.value}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
              <div className="flex flex-1 rounded-lg w-full">
                <Compare
                  firstImage="https://assets.aceternity.com/code-problem.png"
                  secondImage="https://assets.aceternity.com/code-solution.png"
                  firstImageClassName="object-cover object-left-top"
                  secondImageClassname="object-cover object-left-top"
                  className="h-[250px] w-[200px] md:h-[300px] md:w-[370px]"
                  slideMode="hover"
                  autoplay={true}
                />
              </div>
              {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            </div>
          </PinContainer>
        </div>
      </div>
    ),
  },
];
export function StickyScrollComponents() {
  return (
    <div className="w-full max-w-full h-full flex justify-center items-center">
      <StickyScroll content={content} />
    </div>
  );
}