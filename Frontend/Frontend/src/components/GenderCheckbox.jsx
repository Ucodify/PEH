import React from "react";

//const GenderCheckbox = ({ onCheckboxChange, selectedGender })
const GenderCheckbox = (onCheckboxChange, selectedGender) => {
  return (
    <>
      <div className="mt-3">Gender</div>
      <div className="flex mt-2">
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer ${
              selectedGender === "male" ? "selected" : ""
            }`}
          >
            {/* <label className={`label gap-2 cursor-pointer`}> */}
            <span className="label-text text-purple-100 font-semibold">
              Male
            </span>
            <input
              type="checkbox"
              className="checkbox bg-clip bg-red-100 border-green-700 checkbox-success border-[2px]  rounded-full checkbox-xs "
              checked={selectedGender === "male"}
              onChange={() => onCheckboxChange("male")}
            />
          </label>
        </div>
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer  ${
              selectedGender === "female" ? "selected" : ""
            }`}
          >
            {/* <label className={`label gap-2 cursor-pointer`}> */}
            <span className="label-text text-pink-100 font-semibold">
              Female
            </span>
            <input
              type="checkbox"
              className="checkbox checkbox-success border-green-700 border-[2px] rounded-full bg-red-100 checkbox-xs "
              checked={selectedGender === "female"}
              onChange={() => onCheckboxChange("female")}
            />
          </label>
        </div>
      </div>
    </>
  );
};
export default GenderCheckbox;
