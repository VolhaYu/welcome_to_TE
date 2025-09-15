import { useState } from "react";

const UniversalBlock = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  return (
    <UniversalBlock onMouseEnter={mouseEnterCallbak}>
      <img src={imgSrc} alt={imgAlt} />
    </UniversalBlock>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <dUniversalBlock onMouseEnter={mouseEnterCallbak}>
      <p>{content}</p>
    </dUniversalBlock>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  return (
    <UniversalBlock onMouseEnter={mouseEnterCallbak}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </UniversalBlock>
  );
};
