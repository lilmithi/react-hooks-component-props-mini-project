import React from "react";

const About = ({
  image = "https://via.placeholder.com/215",
  alt = "blog logo",
  para = "About this blog",
}) => {
  return (
    <aside>
      <img src={image} alt={alt} />
      <p>{para}</p>
    </aside>
  );
};

export default About;
