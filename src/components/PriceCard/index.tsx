import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";



export default function PriceCard({ room, handleClickOpen }) {
  console.log("🚀 ~ PriceCard ~ room:", room);
  const { type, price, noOfRooms, amenities } = room;
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
          alt="hotel room"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {type}
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1">Price</Typography>
              <Typography variant="h5" mb={-0.1}>
                ${price}
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1">Rooms Available</Typography>
              <Typography variant="h5" mb={-0.1}>
                {noOfRooms}
              </Typography>
            </ListItem>
            <ListItem>
              <Stack
                direction="row"
                spacing={1}
                sx={{ display: "flex", flexWrap: "wrap" }}
              >
                {amenities.map((amenity) => (
                  <Chip label={amenity} key={amenity} />
                ))}
              </Stack>
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen}>
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
