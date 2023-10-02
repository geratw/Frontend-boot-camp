import React from "react";
import "../styles/StudentInfo.css";

const StudentInfo = () => {
  return (
    <div id="student-info" class="section student-info">
      <h1 class="style-text">Student Information</h1>
      <img src="logo.jpg" alt="Photo" />
      <div class="discription-my">
        <p>Full Name: Orekhovsky Maxim Eduardovich</p>
        <p>Training experience: 1 years in shcool21</p>
        <p>Age: 23 years</p>
      </div>
    </div>
  );
};

export default StudentInfo;
