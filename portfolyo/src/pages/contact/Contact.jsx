import React from "react";
import UseUserData from "../../components/customHook/UseUserData";
import { ImPhone, ImLocation2, ImMail3 } from "react-icons/im";
import line from "../../assets/line.png";
import Button from "../../components/button/Button";

const Contact = () => {
  const { userData, error } = UseUserData();

  if (error || !userData) {
    return <div>Error: {error ? error.message : "No user data found"}</div>;
  }

  const contactItems = [
    { icon: <ImLocation2 className="text-black text-6xl md:text-4xl" />, text: userData.user.about.address },
    { icon: <ImPhone className="text-black text-6xl md:text-4xl" />, text: userData.user.about.phoneNumber },
    { icon: <ImMail3 className="text-black text-6xl md:text-4xl" />, text: userData.user.about.contactEmail }
  ];

  return (
    <div id="contact" className="flex flex-col lg:flex-row max-sm:items-center lg:justify-around my-20 py-10">
      <div className="">
        <div className="flex flex-col gap-4 justify-center items-center mb-14">
          <h1 className="text-6xl font-bold bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text">Contact me :)</h1>
          <span className="italic text-3xl md:text-lg">Let's Connect</span>
        </div>
        <div className="max-sm:flex max-sm:flex-col space-y-16">
          {contactItems.map((item, index) => (
            <ContactItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
      <div className="max-sm:mt-20 px-8 w-11/12 lg:w-2/5">
        <ContactForm />
      </div>
    </div>
  );
};

const ContactItem = ({ icon, text }) => (
  <div className="flex justify-start items-center gap-5">
    <div className="flex items-center justify-center w-32 h-32 md:w-20 md:h-20 bg-lime-500 rounded-full">{icon}</div>
    <div>
      <span className="font-bold tracking-wider text-[2rem] md:text-2xl bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text italic">{text}</span>
      <img src={line} alt="line" width='100%' />
    </div>
  </div>
);

const ContactForm = () => (
  <div className="rounded-lg space-y-5 border-2 p-6 border-lime-300 shadow-glow">
    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-tr from-lime-400 to-white text-transparent inline-block bg-clip-text">Send me a message</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-md font-semibold mb-1">Name</label>
        <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-md font-semibold mb-1">Email</label>
        <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-md font-semibold mb-1">Message</label>
        <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md p-2"></textarea>
      </div>
      <Button btnText='Send Message' />
    </form>
  </div>
);

export default Contact;
