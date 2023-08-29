import React from "react";
import { motion } from "framer-motion";
import { RiCloseCircleFill } from "react-icons/ri";

type GeneralInquiryProps = {
  setFormType: any;
};

const GeneralInquiry = ({ setFormType }: GeneralInquiryProps) => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      layout
      layoutId="generalInquiry"
      initial={false}
      className="text-white bg-primary p-8 rounded-3xl relative"
    >
      <h1>General Inquiry</h1>
      <RiCloseCircleFill
        className="absolute top-0 right-0 m-4 cursor-pointer"
        onClick={() => setFormType("none")}
      />
      <p>
        If you have any questions about our services, please feel free to
        contact us. We are here to help you.
      </p>
      <form>
        <div className={"flex gap-8 my-4"}>
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className={"font-bold"}>
              First Name
            </label>
            <input
              onChange={handleChange}
              value={form.firstName}
              type="text"
              className="h-12 rounded-full px-4 text-gray-700"
              name={"firstName"}
              id="name"
              placeholder="Darth"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className={"font-bold"}>
              Last Name
            </label>
            <input
              onChange={handleChange}
              value={form.lastName}
              type="text"
              className="h-12 rounded-full px-4 text-gray-700"
              name="lastName"
              id="name"
              placeholder="Vader"
            />
          </div>
        </div>
        <div className={"flex gap-8"}>
          <div className=" flex flex-col w-full">
            <label htmlFor="email" className={"font-bold"}>
              Email
            </label>
            <input
              onChange={handleChange}
              value={form.email}
              type="email"
              className="h-12 rounded-full px-4 text-gray-700"
              id="email"
              name="email"
              placeholder="darkforce@vader.com"
            />
          </div>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="message" className={"font-bold"}>
            Message
          </label>
          <textarea
            onChange={handleChange}
            value={form.message}
            name="message"
            id="message"
            className="h-32 p-4 text-gray-700 rounded-2xl"
            placeholder="What can we help you with?"
          />
        </div>
        <button type="submit" className="mt-8 rounded-full">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default GeneralInquiry;
