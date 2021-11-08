import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import HeaderTabs from "./HeaderTabs";

const SuperTab = () => {
  const [activeTab, setActiveTab] = useState("Sign In");
  return (
    <div className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-transparent rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Sign In" ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default SuperTab;
