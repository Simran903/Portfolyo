import React from "react";
import { FaCheck } from 'react-icons/fa';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ForEducation = () => {

  const education = [
    {
      title: "Bachelor of Computer Applications",
      subtitle: "Amity University Online, Noida",
      date: "2022 - 2025",
    },
    {
      title: "Mata Gujri Public School",
      subtitle: "New Delhi, India",
      date: "2020-2021",
    }
  ]

  let iconStyles = {
    background: "#84cc16",
  };

  return (
    <div className="text-black">
      <VerticalTimeline>
        {education.map((element, index) => (
          <VerticalTimelineElement
            key={index}
            date={element.date}
            dateClassName="date"
            iconStyle={iconStyles}
            icon={<FaCheck color="red" />}
          >
            <h3 className="vertical-timeline-element--title font-bold">
              {element.title}
            </h3>
            <h5 className="vertical-timeline-element-subtitle italic text-sm">
              {element.subtitle}
            </h5>
            {/* Description can be added if needed */}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ForEducation;
