import React from "react";

function Services() {
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row py-60 pt-12 text-center items-center justify-center"
        style={{
          backgroundImage: "url(/bg.jpg)",
          width: "100%",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          position: "relative",
          top: "30px",
          overflow: "hidden",
          backgroundSize: "cover",
          mozbackgroundSize: "cover",
          WebkitBackgroundSize: "cover",
          zIndex: "10",
        }}
      >
        <h1 className="text-4xl font-bold mt-40 text-white ">Services</h1>
      </div>
      <div className="card bg-base-100 shadow-xl hover:scale-96 duration-200 dark:bg-slate-900 dark:text-white dark:border pb-20">
        <h1 className="m-20 mb-10 text-center italic font-poppins text-4xl ">
          Empowering your property journey in Pakistan
        </h1>
        <p className="ms-20 ">
          Transforming property challenges into easy solutions, we secure your
          rights, protect your investments, and guide your journey with
          unmatched expertise
        </p>
      </div>

      <br />
      <br />
      <h1 className="text-center font-bold italic text-2xl text-center items-center justify-center">
        {"  "}Domains
      </h1>
      <br />
      <div className="card bg-base-100 shadow-xl hover:scale-96 duration-200 dark:bg-slate-900 dark:text-white dark:border pb-20">
        <div class="grid grid-cols-3 gap-4 w-82 border-4 m-4 p-4">
          <div className="border-4 m-4 p-4 card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <img src="a.webp"></img>
            <h1 className="italic  m-8 text-center">Real Property Law</h1>
            <p>
              Domains:
              <br />
              - Land ownership and title disputes.
              <br />
              - Landlord-tenant relationships.
              <br />
              - Easements and rights-of-way.
              <br />
              - Zoning and land-use planning.
              <br />- Property development and construction laws.
            </p>
          </div>
          <div className="border-4 m-4 p-4 card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <img src="i.jpg" className="h-64"></img>
            <h1 className="italic m-8 text-center">Personal Property Law</h1>
            Domains: <br />
            - Transfer of ownership for personal items.
            <br />
            -Bailment agreements and responsibilities.
            <br />
            - Legal claims over lost or abandoned property.
            <br />- Disputes over possession of goods.
          </div>
          <div className="border-4 m-4 p-4 card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <img src="l.jpg" className="w-96 h-64"></img>
            <h1 className="italic m-8 text-center">
              Intellectual Property Law
            </h1>
            - Domains:
            <br />
            - Copyrights for artistic and literary works. <br />
            - Patents for inventions and innovations. <br />
            - Trademarks for brand identity protection.
            <br />- Trade secret protection and confidentiality agreements.
          </div>
          <div className="border-4 m-4 p-4 card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <img src="h.jpg" className="w-96 h-64"></img>
            <h1 className="italic m-8">Trust and Estate Law</h1>
            Domains: <br />
            - Creation and execution of wills.
            <br />
            - Establishment and management of trusts.
            <br />
            - Probate processes and estate settlement.
            <br />- Inheritance disputes and tax implications.
          </div>
          <div className="border-4 m-4 p-4 card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <img src="z.webp" className="w-96 h-64"></img>
            <h1 className="italic m-8">Land Use and Environmental Law</h1>
            Domains: <br />
            - Zoning regulations and land-use planning. <br />
            - Environmental impact assessments.
            <br />- Conservation and protection of natural resources.
          </div>
          <div className="border-4 m-4 p-4 card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <img src="e.jpg" className="w-96 h-64"></img>
            <h1 className="italic m-8 text-center">
              Mortgage and Financing Law
            </h1>
            Domains:
            <br />
            - Mortgage agreements and financing terms.
            <br /> - Foreclosure processes and borrower rights.
            <br /> - Property liens and priority of claims.
            <br />- Real estate loan negotiations and disputes.
          </div>
          <div className="border-4 m-4 p-4 card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <img src="d.jpg" className="w-96 h-64"></img>{" "}
            <h1 className="italic m-8 text-center">Conveyancing Law</h1>
            Domains:
            <br /> - Drafting and reviewing property deeds.
            <br /> - Title searches and verification. <br />- Handling escrow
            and property settlements. <br />- Registration and record-keeping of
            ownership changes.
          </div>
          <div className="border-4 m-4 p-4 card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <img src="f.jpg" className="w-96 h-64"></img>
            <h1 className="italic m-8 text-center">
              Adverse Possession Legal principle
            </h1>{" "}
            <br /> Domains:
            <br /> - Legal requirements for possession claims. <br />- Impact on
            titleholders and property records. <br />- Resolution of adverse
            possession disputes.
          </div>
          <div className="border-4 m-4 p-4 card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <img src="g.jpg" className="w-96 h-64"></img>
            <h1 className="italic m-8 text-center">
              Community Property Law
            </h1>{" "}
            Domains:
            <br />
            - Division of marital property upon divorce or death. <br />
            -Classification of shared v/s separate property.
            <br /> - Legal rights of spouses in joint property management.
            <br />
          </div>
        </div>
        {/* <p className=" border-4 m-4 p-4 text-center">
        <h1 className="underline"> Importance of These Domains </h1>
        <br />
        Each branch of property law focuses on distinct domains that ensure
        ownership rights, transactions, and land use are regulated effectively.
        By addressing diverse issues from intellectual creations to real estate
        disputes, property law supports fairness and stability in individual and
        commercial property dealings.
      </p> */}
        {/* <div className="text-center items-center justify-center card bg-base-100 w-1/2 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <h1 className="mx-auto px-5 my-10 text-2xl">What we do?</h1>
          <ol className="mx-10">
            <li>Putting Your Needs First</li>
            <li>
              Providing Effective Legal Solutions for Your Property
              Transactions.
            </li>
          </ol>
        </div> */}
      </div>
    </>
  );
}

export default Services;
