import React from "react";
import { ImLocation2, ImMail3 } from "react-icons/im";
import line from "../../assets/line.png";

const Contact = () => {
  

  const contactItems = [
    { icon: <ImLocation2 className="text-black text-6xl md:text-4xl" />, text: "New Delhi, India" },
    { icon: <ImMail3 className="text-black text-6xl md:text-4xl" />, text: "itssimran903@gmail.com" }
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


export default Contact;
