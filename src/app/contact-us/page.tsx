"use client";
import React, { useState } from "react";
import InquirySelection from "@/components/InquirySelection";
import BusinessInquiry from "@/components/BusinessInquiry";
import BugReport from "@/components/BugReport";
import GeneralInquiry from "@/components/GeneralInquiry";
import { motion } from "framer-motion";
import ButtonBorderHover from "@/components/animations/ButtonBorderHover";

const getComponent = (type: string, setFormType: any) => {
  switch (type) {
    case "business":
      return () => <BusinessInquiry setFormType={setFormType} />;
    case "bug":
      return () => <BugReport setFormType={setFormType} />;
    case "general":
      return () => <GeneralInquiry setFormType={setFormType} />;
    default:
      return () => <InquirySelection setFormType={setFormType} />;
  }
};

const ContactUs = () => {
  const [formType, setFormType] = useState("");

  const [state, setState] = useState({
    inquiry: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
    company: "",
  });

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div className={"w-7/12 mx-auto mt-48"}>
      <div className={"text-white text-center px-12 my-8"}>
        <h4 className={"text-dark-red"}> Submit an inquiry </h4>
        <p className={"text-left"}>
          Please feel free to reach out to use if you have any questions,
          problems, suggestions, etc. Use the drop down below to select your
          type of inquiry and tell us all about it. We will get back to you as
          soon as we can!
        </p>
      </div>
      <div className={"bg-dark-gray rounded-3xl p-10 flex flex-col gap-y-4"}>
        <div className={"flex justify-between gap-6 w-full"}>
          <div className={"flex flex-col w-full"}>
            <label className={"text-white text-2xl mb-2 font-semibold"}>
              First Name
            </label>
            <input
              name={"firstName"}
              onChange={handleChange}
              value={state.firstName}
              placeholder={"First Name"}
              className={
                "bg-dark-background h-11 rounded-full text-white text-lg focus:outline-none w-full px-4"
              }
              type="text"
            />
          </div>
          <div className={"flex flex-col w-full"}>
            <label className={"text-white text-2xl mb-2 font-semibold"}>
              Last Name
            </label>
            <input
              name={"lastName"}
              onChange={handleChange}
              value={state.lastName}
              placeholder={"Last Name"}
              className={
                "bg-dark-background h-11 rounded-full text-white focus:outline-none text-lg px-4"
              }
              type="text"
            />
          </div>
        </div>
        <div className={"flex justify-between gap-6 w-full"}>
          <div className={"flex flex-col w-full"}>
            <label className={"text-white text-2xl mb-2 font-semibold"}>
              Email
            </label>
            <input
              name={"email"}
              onChange={handleChange}
              value={state.email}
              placeholder={"Email"}
              className={
                "bg-dark-background h-11 rounded-full text-white focus:outline-none text-lg w-full px-4"
              }
              type="text"
            />
          </div>
          <div className={"flex flex-col w-full"}>
            <label className={"text-white text-2xl mb-2 font-semibold"}>
              Phone
            </label>
            <input
              name={"phone"}
              onChange={handleChange}
              value={state.phone}
              placeholder={"Phone"}
              className={
                "bg-dark-background h-11 rounded-full focus:outline-none text-white text-lg px-4"
              }
              type="text"
            />
          </div>
        </div>
        <div className={"flex justify-between gap-6 w-full"}>
          <div className={"flex flex-col w-full"}>
            <label className={"text-white text-2xl mb-2 font-semibold"}>
              Company
            </label>
            <input
              name={"company"}
              onChange={handleChange}
              value={state.company}
              placeholder={"Company"}
              className={
                "bg-dark-background h-11 rounded-full focus:outline-none text-white text-lg w-full px-4"
              }
              type="text"
            />
          </div>
          <div className={"flex flex-col w-full"}>
            <label className={"text-white text-2xl mb-2 font-semibold"}>
              Reason
            </label>
            <input
              name={"inquiry"}
              onChange={handleChange}
              value={state.inquiry}
              placeholder={"Reason"}
              className={
                "bg-dark-background h-11 rounded-full text-white text-lg px-4 focus:outline-none"
              }
              type="text"
            />
          </div>
        </div>
        <div className={"flex flex-col w-full"}>
          <label className={"text-white text-2xl mb-2 font-semibold"}>
            Message
          </label>
          <textarea
            name={"message"}
            onChange={handleChange}
            value={state.message}
            placeholder={"Message"}
            className={
              "bg-dark-background h-64 rounded-3xl text-white text-lg px-4 py-2 focus:outline-none"
            }
          />
        </div>

        <ButtonBorderHover
          // borderColor="#fff"
          className={
            "text-center text-white text-2xl bg-dark-red font-medium w-5/12 mx-auto rounded-full"
          }
        >
          Submit
        </ButtonBorderHover>
      </div>
    </motion.div>
  );
};

export default ContactUs;
