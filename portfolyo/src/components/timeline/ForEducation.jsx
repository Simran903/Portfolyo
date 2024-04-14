import React from "react";
import { FaCheck } from 'react-icons/fa';
import UseUserData from "../../components/customHook/UseUserData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ForEducation = () => {
  let iconStyles = {
    background: "#84cc16",
  };

  const { userData, error } = UseUserData();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return false;
  }

  // Function to format date as YYYY-MM-DD
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="text-black">
      <VerticalTimeline>
        {userData.user.timeline.map((element) => {
          // Check if the element is for education
          if (element.forEducation) {
            return (
              <VerticalTimelineElement
                key={element._id}
                date={formatDate(element.startDate) + ' - ' + formatDate(element.endDate)}
                dateClassName="date" // Add a class name for the date
                iconStyle={iconStyles}
                icon={<FaCheck color="red" />}
              >
                <h3 className="vertical-timeline-element--title font-bold">
                  {element.company_name}
                </h3>
                <h5 className="vertical-timeline-element-subtitle italic text-sm">
                  {element.jobTitle}
                </h5>
                <p id="decription">{element.summary}</p>
              </VerticalTimelineElement>
            );
          } else {
            return null; // Don't render anything if not for education
          }
        })}
      </VerticalTimeline>
    </div>
  );
};

export default ForEducation;
