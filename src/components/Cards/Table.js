import React, {useEffect, useState} from 'react';

const API_HOST = "http://localhost:3001/batch-table";
const INVENTORY_API_URL = `${API_HOST}`;

function Table() {
    console.log("1")
    const [data, setData] = useState([]);
    const fetchInventory = () => {
        fetch(`${INVENTORY_API_URL}`)
            .then(res => res.json())
            .then(json => setData(json));
    }
    
    useEffect(() => {console.log("2")
        fetchInventory();
    }, []);

    return (
        <div className="container">
            <div className="flex justify-between">
                <div className="text-2xl font-bold m-5 ml-2">Student Data</div>
                <div className="text-md font-bold m-5 ml-2"><i className="fas fa-plus-circle mr-2"></i>Add Branch</div>
            </div>            
            <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800" align="center" >
                <thead>
                <tr className="text-left border-b-2 border-gray-300">
                    <th className="px-4 py-3">Sr.No</th>
                    <th className="px-4 py-3">Branch</th>
                    <th className="px-4 py-3">Students</th>
                    <th className="px-4 py-3">CVR</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr className="bg-gray-100 border-b border-gray-200">
                                <td className="px-4 py-3">{item.id}</td>
                                <td className="px-4 py-3">{item.branch}</td>
                                <td className="px-4 py-3">{item.students}</td>
                                <td className="px-4 py-3">{item.cvr}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
