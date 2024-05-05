import React from 'react'
import UseUserData from "../../components/customHook/UseUserData";
import github from '../../assets/social/github.png'
import linkedin from '../../assets/social/linkedin.png'
import gmail from '../../assets/social/gmail.png'

const SocialHandles = () => {
  const socials = [
    {
      platform: "GitHub",
      image: github,
      href: "https://github.com/Simran903"
    },
    {
      platform: "LinkedIn",
      image: linkedin,
      href: "https://www.linkedin.com/in/simran09/"
    },
    {
      platform: "Gmail",
      image: gmail,
      href: "mailto:<itssimran903@gmail.com>"
    }
  ]
    const { userData, error } = UseUserData();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return false;
  }
  return (
    <div className="fixed flex flex-col top-[35%] left-0">
        <ul className="flex flex-col">
          {socials.map((social, index) => (
            <li
              key={index}
              className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] duration-300 bg-lime-500"
            >
              <a className="flex justify-between items-center w-full text-black m-3" href={social.href}>
                {social.platform}
                <img src={social.image} alt="social" width="25%" />
              </a>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default SocialHandles