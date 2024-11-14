import React from "react";
import myResume from "../../assets/Resume.pdf";

const PDFViewer = () => {
  return (
    <div className="w-full h-[100vh]">
      <iframe src={myResume} width={"100%"} height={"100%"} />
    </div>
  );
};

export default PDFViewer;
