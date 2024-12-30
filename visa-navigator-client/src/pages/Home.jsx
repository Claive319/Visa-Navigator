import { Outlet } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Banner from "../Components/Banner";

const Home = () => {
  const handleType = count =>{
    console.log(count)
  } 
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div>
      <h1 className=" font-extrabold  "
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "800",  textAlign: "center", fontSize: "68px"}}
      >
        Life is simple{" "}
        <span style={{ color: "red", fontWeight: "extra-bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>

      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
