import React, { useEffect, useState } from "react";
import htmlIcon from "../../assets/Html.png";
import cssIcon from "../../assets/Css.png";
import javascriptIcon from "../../assets/javascript.png";
import mongodbIcon from "../../assets/mongodb.png";
import expressIcon from "../../assets/express.png";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import pythonIcon from "../../assets/python.png";
import kerasIcon from "../../assets/keras.png";
import tensorflowIcon from "../../assets/tensorflow.png";
import flaskIcon from "../../assets/flask.png";

const SkillSlider = () => {
  var [count, setCount] = useState(0);

  useEffect(() => {
    var timeout = setTimeout(() => {
      count < 10 ? setCount(count + 1) : setCount(0);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [count]);

  if (count === 0) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={htmlIcon} alt="html" />
      </div>
    );
  } else if (count === 1) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={cssIcon} alt="css" />
      </div>
    );
  } else if (count === 2) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={javascriptIcon} alt="js" />
      </div>
    );
  } else if (count === 3) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={mongodbIcon} alt="mongodb" />
      </div>
    );
  } else if (count === 4) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={expressIcon} alt="expressjs" />
      </div>
    );
  } else if (count === 5) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={reactIcon} alt="reactjs" />
      </div>
    );
  } else if (count === 6) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={nodeIcon} alt="nodejs" />
      </div>
    );
  } else if (count === 7) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={pythonIcon} alt="python" />
      </div>
    );
  } else if (count === 8) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={kerasIcon} alt="keras" />
      </div>
    );
  } else if (count === 9) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={tensorflowIcon} alt="tensorflow" />
      </div>
    );
  } else if (count === 10) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40">
        <img src={flaskIcon} alt="flask" />
      </div>
    );
  }
};

export default SkillSlider;
