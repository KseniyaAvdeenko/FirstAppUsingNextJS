import {FC} from "react";

const Heading:FC<{tag?:string; heading: string}> = ({tag, heading}) => {
    const Tag = tag || 'h1'
    return (<Tag>{heading}</Tag>);
};

export default Heading;
