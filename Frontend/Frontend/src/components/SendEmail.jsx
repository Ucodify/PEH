import React, { useState } from "react";

function SendEmail() {
  // const [email, setEmail] = useState("");
  // const sendEmail = async () => {
  //   try {
  //     const response = await fetch("/api/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       alert("Email sent successfully!");
  //     } else {
  //       alert(`Failed to send email: ${data.error}`);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while sending the email.");
  //   }
  //};
  return (
    <>
      <div className="relative">
        <label className="flex items-center gap-2 mt-5">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="black"
            className="h-4 w-4 opacity-100 "
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            className="rounded-full text-black ps-5 bg-black"
            placeholder="Email"
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <div className="align-items-start absolute left-0">
          <button
            className="btn bg-black border-none text-white bg-clip-padding backdrop-filter backdrop-blur-lg  hover:bg-red-900"
            //   onClick={to:}
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default SendEmail;
