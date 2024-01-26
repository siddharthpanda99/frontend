import React, { FunctionComponent } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import PriceCard from '../PriceCard';
import { Room } from 'app/types/Room';

interface HotelInfoProps {
  details: { data?: { rooms?: number; location?: string } };
  handleClickOpen: () => void; // Replace () => void with the actual type of handleClickOpen if it's different
}

const HotelInfo: FunctionComponent<HotelInfoProps> = ({
  details,
  handleClickOpen,
}) => {
  const { rooms, location } = details?.data || {
    rooms: [] as Room[],
    location: "",
  };
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Overview" value="1" />
          <Tab label="Rooms" value="2" />
          <Tab label="Location" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1">
        The car parking and the Wi-Fi are always free, so you can stay in touch
        and come and go as you please. Conveniently situated in the Gachibowli
        part of Hyderabad, this property puts you close to attractions and
        interesting dining options. Don't leave before paying a visit to the
        famous Golconda Fort. Rated with 4.5 stars, this high-quality property
        provides guests with access to fitness center, spa and outdoor pool
        on-site.
      </TabPanel>
      <TabPanel
        value="2"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {rooms && rooms.map((room: Room) => (
            <PriceCard room={room} handleClickOpen={() => handleClickOpen(room)} key={room?.id}/>
          ))}
      </TabPanel>
      <TabPanel value="3">{location}</TabPanel>
    </TabContext>
  );
};

export default HotelInfo