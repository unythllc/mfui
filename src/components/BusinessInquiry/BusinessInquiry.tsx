import React from "react";
import { motion } from "framer-motion";
import { RiCloseCircleFill } from "react-icons/ri";

type BusinessInquiryProps = {
  setFormType: any;
};

const BusinessInquiry = ({ setFormType }: BusinessInquiryProps) => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
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
      layoutId="businessInquiry"
      initial={false}
      className="text-white bg-primary p-8 rounded-3xl relative"
    >
      <h2>Bring Idea To Life 💡</h2>
      <p className="text-xl">Business inquiries are always welcome.</p>

      <RiCloseCircleFill
        height={40}
        width={40}
        className="absolute top-0 right-0 m-4 cursor-pointer"
        onClick={() => setFormType("none")}
      />
      <p>
        If you are interested in working with us, please fill out the form
        below. We will get back to you as soon as possible.
      </p>
      <form>
        <div className={"flex gap-8 my-4"}>
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className={"font-bold"}>
              First Name
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.firstName}
              name="firstName"
              className="h-12 rounded-full px-4 text-gray-700"
              id="name"
              placeholder="Darth"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className={"font-bold"}>
              Last Name
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.lastName}
              name="lastName"
              className="h-12 rounded-full px-4 text-gray-700"
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
              name="email"
              type="email"
              className="h-12 rounded-full px-4 text-gray-700"
              id="email"
              placeholder="darkforce@vader.com"
            />
          </div>
          <div className=" flex flex-col w-full">
            <label htmlFor="phone" className={"font-bold"}>
              Phone
            </label>
            <input
              onChange={handleChange}
              value={form.phone}
              name="phone"
              type="text"
              className="h-12 rounded-full px-4 text-gray-700"
              id="phone"
              placeholder="No phone for Vader"
            />
          </div>
        </div>
        <div className={"flex gap-8"}>
          <div className=" flex flex-col w-full">
            <label htmlFor="email" className={"font-bold"}>
              Company
            </label>
            <input
              onChange={handleChange}
              value={form.company}
              name="company"
              type="email"
              className="h-12 rounded-full px-4 text-gray-700"
              id="email"
              placeholder=""
            />
          </div>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="message" className={"font-bold"}>
            Message
          </label>
          <textarea
            name="message"
            onChange={handleChange}
            value={form.message}
            className="rounded-2xl p-4 text-gray-700"
            id="message"
            rows={3}
          ></textarea>
        </div>
        <button type="submit" className="mt-8 rounded-full">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default BusinessInquiry;
