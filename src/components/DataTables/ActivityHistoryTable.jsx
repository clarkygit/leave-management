import React, { useEffect, useState } from "react";
import axios from "axios";
import MuiTable from "./MuiTable";
import { leaveHistory } from "../Data/DataPool";

export default function ActivityHistoryTable(){
    const columns = [
        { field: 'id',
          headerName: 'Leave ID',
          width: 130,
          resizable: false,
        },
        {
            field: 'leaveType',
            headerName: 'Leave Type',
            width: 150,
            editable: false,
            resizable: false,
        },
        {
            field: 'leaveStartDate',
            headerName: 'From',
            width: 160,
            editable: false,
            resizable: false,
            //type: 'date'
        },
        {
            field: 'leaveEndDate',
            headerName: 'To',
            width: 160,
            editable: false,
            resizable: false,
            //type: 'date'
        },
        {
            field: 'days',
            headerName: 'Days Count',
            resizeable: false,
            width: 126,
            editable: false,
            sortable: false,
            resizable: false,
        },
        {
            field: 'comment',
            headerName: 'Comments',
            width: 350,
            editable: false,
            resizable: false,
            sortable:false,
        },
        {
            field: 'status',
            headerName: 'Leave Status',
            width: 200,
            editable: false,
            resizable: false,
        },
        {
            field: 'action',
            headerName: 'Actions',
            width: 110,
            editable: false,
            resizable: false,
            sortable:false,
            disableColumnMenu:true,
            renderCell: (params) => {
                return <div className="mt-5 ml-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>
                        </div>
            }
        },
        ];

    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/leaves")
        .then((res) => {
            const formattedRows = res.data.map((leave) => ({
                id: leave._id,
                leaveType: leave.leaveType,
                leaveStartDate: leave.leaveStartDate,
                leaveEndDate: leave.leaveEndDate,
                comment: leave.comment || "—",
                status: leave.status,
            }));
            setRows(formattedRows);
            console.log(res.data)
        })
        .catch((err) => console.error("Error fetching leaves:", err));
    }, []);

    return(
        <>
            {/* <MuiTable columns={columns} rows={leaveHistory} /> */}
            <MuiTable columns={columns} rows={rows} />
        </>
    )
}