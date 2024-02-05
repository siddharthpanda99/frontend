import React from 'react'
import { Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const LoansDatagrid = ({loansData}) => {

    const columns: GridColDef[] = [
      { field: "id", headerName: "Loan ID", width: 90 },
      {
        field: "companyName",
        headerName: "Company Name",
        width: 150,
        // editable: true,
      },
    //   {
    //     field: "type",
    //     headerName: "Room Type",
    //     width: 150,
    //     renderCell: (params) => {
    //       return (
    //         <div style={{ margin: 30 }}>{params.row.room_details.type}</div>
    //       );
    //     },
    //     // editable: true,
    //   },
      {
        field: "initiationDate",
        headerName: "Initiation Date",
        width: 250,
        // editable: true,
      },
      {
        field: "processingDate",
        headerName: "Processing Date",
        width: 250,
        // editable: true,
      },
      {
        field: "provider",
        headerName: "Provider",
        width: 150,
        // editable: true,
      }
    ];

  return (
    <div style={{ marginTop: 10 }}>
      <h1>Bookings</h1>
      {/* {bookingData?.map((booking) => (
        <li>{JSON.stringify(booking)}</li>
      ))} */}
      <div style={{ height: "60vh", width: "100%", marginTop: 30 }}>
        {loansData?.length && (
          <DataGrid
            rows={loansData}
            columns={columns}
            getRowId={(row: any) => row.id}
            getRowHeight={() => "auto"}
            // initialState={{
            //   pagination: {
            //     paginationModel: {
            //       pageSize: 5,
            //     },
            //   },
            // }}
            // pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        )}
      </div>
    </div>
  )
}

export default LoansDatagrid