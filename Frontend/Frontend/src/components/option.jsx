import React from "react";

//const GenderCheckbox = ({ onCheckboxChange, selectedGender })
const Option = (onCheckboxChange, selectedOption) => {
  return (
    <>
      <div className="mt-3">You are</div>
      <div className="flex mt-2">
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer ${
              selectedOption === "client" ? "selected" : ""
            }`}
          >
            {/* <label className={`label gap-2 cursor-pointer`}> */}
            <span className="label-text text-purple-100 font-semibold">
              Client
            </span>
            <input
              type="checkbox"
              className="checkbox bg-clip bg-red-100 border-green-700 checkbox-success border-[2px]  rounded-full checkbox-xs "
              checked={selectedGender === "client"}
              onChange={() => onCheckboxChange("client")}
            />
          </label>
        </div>
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer  ${
              selectedGender === "lawyer" ? "selected" : ""
            }`}
          >
            {/* <label className={`label gap-2 cursor-pointer`}> */}
            <span className="label-text text-pink-100 font-semibold">
              Lawyer
            </span>
            <input
              type="checkbox"
              className="checkbox checkbox-success border-green-700 border-[2px] rounded-full bg-red-100 checkbox-xs "
              checked={selectedGender === "lawyer"}
              onChange={() => onCheckboxChange("lawyer")}
            />
          </label>
        </div>
      </div>
    </>
  );
};
export default Option;
