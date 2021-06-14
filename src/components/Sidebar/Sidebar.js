import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-4">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/dashboard"
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-lg uppercase font-bold p-4 px-0"
          ><img alt="Institute Logo" className="rounded inline-block" width="40" src="https://cdn5.vectorstock.com/i/thumb-large/63/64/golden-institute-building-symbol-logo-design-vector-21246364.jpg"/>
            Vibrant Academy
          </Link>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-2 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <hr className="my-4 md:min-w-full" />
            
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-2 no-underline">
              Admin Pages
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/batches"
                >
                  <i
                    className={
                      "fas fa-user-graduate mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Batches
                </Link>
              </li>
            </ul>
            
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-2 pb-2 no-underline">
              Curriculum Vitae
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500">                
                <i className = "fas fa-tools mr-2 text-sm" style={{opacity: 0.3}}></i>
                  CV Builder
              </li>

              <li className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500">                
                <i className = "fas fa-search mr-2 text-sm" style={{opacity: 0.3}}></i>
                  CV Reviewer
              </li>
            </ul>

            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-2 pb-2 no-underline">
              Others
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500">                
                <i className = "fas fa-building mr-2 text-sm" style={{opacity: 0.3}}></i>
                  Companies
              </li>

              <li className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500">                
                <i className = "fas fa-user-tie mr-2 text-sm" style={{opacity: 0.3}}></i>
                  Jobs
              </li>

              <li className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500">                
                <i className = "fas fa-user mr-2 text-sm" style={{opacity: 0.3}}></i>
                  Alumini
              </li>

              <li className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500">                
                <i className = "fab fa-ups mr-2 text-sm" style={{opacity: 0.3}}></i>
                  KMS
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
