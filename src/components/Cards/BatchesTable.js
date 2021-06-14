import React from "react";
import {useEffect, useState} from 'react';

const API_HOST = "http://localhost:3001/batch-table";
const INVENTORY_API_URL = `${API_HOST}`;

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [data, setData] = useState([]);
    const fetchInventory = () => {
        fetch(`${INVENTORY_API_URL}`)
            .then(res => res.json())
            .then(json => setData(json));
    }
    
    useEffect(() => {
        fetchInventory();
    }, []);

    const Table = (a) => {
      return (
        <div>
          <div className="flex justify-between">
              <div className="text-2xl font-bold m-5 ml-2">Student Data</div>
              <div className="text-md font-bold m-5 ml-2"><i className="fas fa-plus-circle mr-2"></i>Add Branch</div>
          </div>            
          <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800" align="center" >
              <thead>
              <tr className="text-left border-b-2 border-gray-300">
                  <th className="px-4 py-3">Batch</th>
                  <th className="px-4 py-3">Branch</th>
                  <th className="px-4 py-3">Students</th>
                  <th className="px-4 py-3">CVR</th>
              </tr>
              </thead>
              <tbody>
                  {
                      data.map((item) => (
                          <tr className="bg-gray-100 border-b border-gray-200">
                              <td className="px-4 py-3">{item.id = a}</td>
                              <td className="px-4 py-3">{item.branch}</td>
                              <td className="px-4 py-3">{item.students}</td>
                              <td className="px-4 py-3">{item.cvr}</td>
                          </tr>
                  ))}
              </tbody>
          </table>
        </div>
      )
    }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm font-bold uppercase px-5 py-3 shadow-xl rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Batch-A
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm font-bold uppercase px-5 py-3 shadow-xl rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Batch-B
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm font-bold uppercase px-5 py-3 shadow-xl rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Batch-C
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">                
                  {Table("A")}                
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  {Table("B")}  
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  {Table("C")}  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="gray" />
    </>
  );
}
