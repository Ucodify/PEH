import React from "react";

function Faq() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-20 flex flex-col md:flex-row dark:bg-slate-900 dark:text-white">
        <div className="order-2 md:order-1 ">
          <h1 className="font-bold md:text-4xl me-24">
            Frequently Asked Questions
          </h1>
          <div className="mt-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 ">
            <div className="collapse collapse-plus bg-base-200 dark:bg-slate-900 dark:text-white  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-bold ">
                How can Property Expertise Hub help me?
              </div>
              <div className="collapse-content">
                <p>
                  We connect you with specialized property lawyers who can
                  assist with a variety of real estate issues, including
                  transactions, disputes, land use, and development.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 dark:bg-slate-900 dark:text-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-bold">
                How do I get started on Property Expertise Hub?
              </div>
              <div className="collapse-content">
                <p>
                  Simply create an account, browse our network of property
                  lawyers, and choose a lawyer that fits your needs. You can
                  then contact them directly to discuss your case.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 dark:bg-slate-900 dark:text-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-bold">
                Are there any costs associated with using Property Expertise
                Hub?
              </div>
              <div className="collapse-content">
                <p>
                  Creating an account and browsing our network is free. The
                  costs for legal services depend on the agreement between you
                  and the lawyer you choose.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end md:ms-10 mt-10 order-1 md:order-2">
          <img src="/faq.jpg" width={950} className=" " />
        </div>
      </div>
    </>
  );
}

export default Faq;
