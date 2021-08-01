import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Стираница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo
        ratione qui laudantium nostrum facere aliquid sint consequatur doloribus
        dicta?
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};
