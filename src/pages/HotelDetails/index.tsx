import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import {useQuery} from 'react-query';
import ImageListItem from "@mui/material/ImageListItem";
import { useParams } from "react-router-dom";
import { itemData } from "app/constants/items";
import { baseUrl } from "app/constants";
import HotelInfo from "app/components/TabsComponent";
import BookingDialog from '../../components/BookingDialog/index';
import { useHotelContext } from "app/hooks/useHotelContext";
import { Room } from "app/types/Room";

export default function HotelDetails() {
  const [open, setOpen] = useState(false);
  const {setHotel} = useHotelContext();

  const { id } = useParams();
  // console.log("🚀 ~ HotelDetails ~ queryParameters:", id);

  const handleClickOpen = (room: Room) => {
    setHotel((prevHotel) => ({
      ...prevHotel,
      selectedRoom: room.id,
      price: room.price, // set new values for other properties
    }));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  // Fetcher function
  const getFacts = async () => {
    const res = await fetch(`${baseUrl}/hotels/${id}`);
    return res.json();
  };
  // Using the hook
  const { data, error, isLoading } = useQuery("hotelByIdDetails", getFacts);


  useEffect(() => {
    setHotel(data?.data);
  }, [data?.data]);
  
  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
if(data?.data){
  // console.log("🚀 ~ HotelDetails ~ data:", data?.data)
  const { name, location } = data?.data;

  return (
    <Box sx={{ width: "100%", overflowY: "scroll" }}>
      <h1>{name}</h1>
      <h4>{location}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </div>
      <HotelInfo details={data} handleClickOpen={handleClickOpen}/>
      <BookingDialog open={open} handleClose={handleClose} />
    </Box>
  )}
}
