import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import HeaderTabs from "./HeaderTabs";
import './SuperTab.css';

const SuperTab = (props) => {
  const [activeTab, setActiveTab] = useState("Sign In");
  console.log(props);
  let drawerClasses = ['side-drawer'];
  if (props.show){
      drawerClasses = 'side-drawer open';
  }
  return (
    <div className={drawerClasses}> 
    <div className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Sign In" && props.show ? <Login /> : <Signup />}
      </div>
    </div>
    </div>
  );
};

export default SuperTab;
