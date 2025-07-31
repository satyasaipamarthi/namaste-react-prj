import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us Page.</h1>
      {/* <User name={"satysai (function !!!)"} location={"Kunduru"} /> */}
      <UserClass name={"Satya (Class !!!)"} location={"HYD"} />
    </div>
  );
};

export default About;
