import React from 'react'
import UseUserData from "../../components/customHook/UseUserData";


const SocialHandles = () => {
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
          {userData.user.social_handles.map((social, index) => (
            <li
              key={index}
              className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] duration-300 bg-lime-500"
            >
              <a className="flex justify-between items-center w-full text-black m-3" href="#">
                {social.platform}
                <img src={social.image.url} alt="social" width="25%" />
              </a>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default SocialHandles