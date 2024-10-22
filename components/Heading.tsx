import React, {FC} from "react";
interface HeadingProps {
  tag: keyof JSX.IntrinsicElements; // Ensure the tag is a valid HTML element
  heading: string;
}

const Heading:FC<HeadingProps> = ({tag, heading}) => {
    return React.createElement(tag, {}, heading);
};

export default Heading;
