import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/details/:id`); // Redirect to the details page
  };
  return (
    <>
      <div>
        <div onClick={handleCardClick} className="my-8 cursor-pointer">
          <div
            className="card bg-gray-100 w-96 shadow-xl hover:scale-105 hover:duration-200
          bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 dark:bg-slate-900 dark:text-white dark:border"
          >
            <figure className="">
              <img src={item.image} alt="Lawyer" width={200} className="h-64" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">
                {item.name}
                <div className="badge badge-neutral text-xs">
                  {item.category}
                </div>
              </h2>
              <p>{item.title}</p>
              <div className="card-actions flex justify-between">
                <div className="badge badge-outline">Rs. {item.fee}</div>
                <div
                  className="badge badge-outline  cursor-pointer px-2 py-4 rounded-full border-[1px] hover:bg-green-900 hover:py-6 hover:px-4 hover:text-white duration-200"
                  href="#"
                >
                  Hire Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
