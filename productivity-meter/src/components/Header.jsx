import { useEffect, useState } from "react";

const headerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};
export const Header = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const user = {
        name: "Masyhar",
      };
      setName(user.name);
    }, 1000);

    const actualDate = setInterval(() => {
      const now = new Date();
      const day = now.getDate() < 10 ? `0${now.getDate()}` : `${now.getDate()}`
      const month = now.getMonth()+1 < 10 ? `0${now.getMonth()+1}` : `${now.getMonth()+1}`
      const year = now.getFullYear();
      const hour = now.getHours();
      const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`
      const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : `${now.getSeconds()}`
      const formattedTime = `${day} - ${month} - ${year} ${hour} : ${minute} : ${seconds}`;
      setTime(formattedTime);
    }, 1000);

    return () => {
      clearInterval(actualDate);
    };
  }, []);
  return (
    <header style={headerStyles}>
      <div>
        <h3> Hi, {name}</h3>
      </div>
      <h1>Welcome to your productivity meter!</h1>
      <div>
        <h5>time : {time}</h5>
      </div>
    </header>
  );
};
