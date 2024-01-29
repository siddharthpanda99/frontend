import React, {useEffect, useState} from 'react'
import {Stack, Typography} from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {Tooltip} from '@mui/material';
import { useUserContext } from 'app/hooks/useUserContext'
import { baseUrl } from 'app/constants';
import { useQuery } from 'react-query';
import { Chip } from '@mui/material';

const BookingsList = () => {
  const { user } = useUserContext();
  const { email } = user;

  const [bookingData, setBookingData] = useState([]);

  // Fetcher function
  const getBookingsForUser = async () => {
    const res = await fetch(
      `${baseUrl}/bookings/user?email=${email}`
    );
    return res.json();
  };

  const columns: GridColDef[] = [
    { field: "booking_id", headerName: "ID", width: 90 },
    {
      field: "hotel_name",
      headerName: "Hotel Name",
      width: 150,
      // editable: true,
    },
    {
      field: "type",
      headerName: "Room Type",
      width: 150,
      renderCell: (params) => {
        return <div className="rowitem">{params.row.room_details.type}</div>;
      },
      // editable: true,
    },
    {
      field: "check_in_date",
      headerName: "Check In Date",
      width: 250,
      // editable: true,
    },
    {
      field: "check_out_date",
      headerName: "Check Out Date",
      width: 250,
      // editable: true,
    },
    {
      field: "total_amount",
      headerName: "Price",
      width: 150,
      // editable: true,
    },
    {
      field: "amenities",
      headerName: "Amenities",
      width: 550,
      renderCell: (params) => {
        // return <div className="rowitem">{params.row.room_details.amenities.map((a) => <Chip>{a}</Chip>)}</div>;
        return (
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {params.row.room_details.amenities.map((amenity) => (
              <Typography
              variant='body2'
                sx={{
                  fontSize: "1em",
                  height: "1.0",
                  border: "1px solid #fff",
                  borderRadius: 2
                }}
              >
                {amenity}
              </Typography>
            ))}
            {/* <Tooltip
              title="Amenities"
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              {params.row.room_details.amenities.map((amenity) => (
                <Chip
                  label={amenity}
                  key={amenity}
                  sx={{ fontSize: "1em", height: "1.0" }}
                />
              ))}
            </Tooltip> */}
          </Stack>
        );
      },
      // editable: true,
    },
  ];
  // Using the hook
  const { data, error, isLoading } = useQuery("bookingsByUserEmail", getBookingsForUser);

  useEffect(() => {
    setBookingData(data?.data);
  }, [data?.data]);

  return (
    <div style={{ marginTop: 10 }}>
      <h1>Bookings</h1>
      {/* {bookingData?.map((booking) => (
        <li>{JSON.stringify(booking)}</li>
      ))} */}
      <div style={{ height: "60vh", width: "100%", marginTop: 30 }}>
        {bookingData?.length && (
          <DataGrid
            rows={bookingData}
            columns={columns}
            getRowId={(row: any) => row.booking_id}
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
  );
}

export default BookingsList