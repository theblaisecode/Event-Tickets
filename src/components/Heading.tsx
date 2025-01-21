import React from "react";

type HeadingText = {
  text: React.ReactNode;
  subtext: React.ReactNode;
};

function Heading(props: HeadingText): JSX.Element {
  return (
    <>
      <h1 className="title">{props.text}</h1>
      <span className="subTitle">{props.subtext}</span>
    </>
  );
}

export default Heading;
