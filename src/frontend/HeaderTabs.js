import React from "react";

function HeaderTabs(props) {
  return (
    <div className={"flex flex-row justify-center"}>
      <HeaderButton
        text="Sign In"
        opacity="50"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Sign Up"
        opacity="5"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </div>
  );
}

const HeaderButton = (props) => {
  return (
    <div
      className={`bg-primary bg-opacity-${
        props.activeTab === props.text ? 40 : 5
      } py-1 px-6 rounded-full`}
    >
      <button
        className="text-lg"
        onClick={() => props.setActiveTab(props.text)}
      >
        {props.text}
      </button>
    </div>
  );
};

export default HeaderTabs;
