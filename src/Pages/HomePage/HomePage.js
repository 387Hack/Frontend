import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
//import App from ''
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <img
        className="center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRT81yYbSSdvk-8orr_JHfVz-Acw55ym50A&usqp=CAU"
        alt="Home"
      />
      <h1 className="center">Get started with the games</h1>
    </div>
  );
}
