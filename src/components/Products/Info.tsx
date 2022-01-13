import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import cl from "./Products.module.scss";

interface InfoProps {
  title: string;
  description: string;
  isCart?: boolean;
}

const Info: FC<InfoProps> = ({ title, description, isCart }) => {
  const navigate = useNavigate();
  return (
    <div className={cl.info}>
      <div className={cl.infoText}>
        <h1 className={cl.infoTitle}>{title}</h1>
        <span className={cl.infoDescriptions}>{description}</span>
      </div>
      {isCart && <button onClick={() => navigate("/")}> Вернуться назад</button>}
    </div>
  );
};

export default Info;
