import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import HotelReservation from "../ReservationComponent";
import { Box } from "@mui/material";

export default function BookingDialog({open, handleClose}) {

  return (
    <React.Fragment>
      <Dialog
        // fullScreen
        maxWidth="1100px"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent sx={{width: '1000px'}}>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              // width: "fit-content",
            }}
          >
            <HotelReservation />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
