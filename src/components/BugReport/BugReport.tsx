import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiCloseCircleFill } from "react-icons/ri";

type BugReportProps = {
  setFormType: any;
};

const BugReport = ({ setFormType }: BugReportProps) => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    bugType: "",
    bugDescription: "",
    productID: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        layoutId="bugReport"
        initial={false}
        className="text-white bg-primary p-8 rounded-3xl relative"
      >
        <h1>Report a Bug 🐛</h1>
        <RiCloseCircleFill
          className="absolute top-0 right-0 m-4 cursor-pointer"
          onClick={() => setFormType("none")}
        />
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
            <div className=" flex flex-col w-full">
              <label htmlFor="bugType" className={"font-bold"}>
                Bug Type
              </label>
              <input
                onChange={handleChange}
                value={form.bugType}
                type="text"
                className="h-12 rounded-full px-4 text-gray-700"
                id="bugType"
                name="bugType"
                placeholder="Responsiveness"
              />
            </div>
          </div>
          <div className={"flex gap-8"}>
            <div className=" flex flex-col w-full">
              <label htmlFor="bugDescription" className={"font-bold"}>
                Bug Description
              </label>
              <input
                onChange={handleChange}
                value={form.bugDescription}
                type="text"
                className="h-12 rounded-full px-4 text-gray-700"
                id="bugDescription"
                name="bugDescription"
                placeholder="Darth Vader helmet is white, should be black"
              />
            </div>
            <div className=" flex flex-col w-full">
              <label htmlFor="productID" className={"font-bold"}>
                Product ID
              </label>
              <input
                onChange={handleChange}
                value={form.productID}
                type="text"
                className="h-12 rounded-full px-4 text-gray-700"
                id="productID"
                name="productID"
                placeholder="14J93BDK3L"
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
              rows={3}
              className="text-gray-700 rounded-2xl p-4"
              placeholder="What can we help you with?"
            />
          </div>
          <button type="submit" className="mt-8 rounded-full">
            Submit
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default BugReport;
