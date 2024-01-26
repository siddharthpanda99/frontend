import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function PriceCard({room}) {
  console.log("🚀 ~ PriceCard ~ room:", room)
  const { type, price, noOfRooms } = room;
  return (
    <Card sx={{ maxWidth: 320 }}>
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
              <Typography variant="body">Price</Typography>
              <Typography variant="body2" mb={-0.1}>
                ${price}
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body">Rooms Available</Typography>
              <Typography variant="body2" mb={-0.1}>
                {noOfRooms}
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
