
# React + TypeScript + Vite

# Project Name

## Overview

Brief description of your project.

## Features

### 1. Login Screen and Homepage

- Enter username and password on the login screen.
- Redirect to the homepage after successful login.
- Display a list of hotels on the homepage fetched from the backend hotel API.

### 2. Hotel List on Homepage

- Sort hotels by price and rating.
- Search hotels by name and location.

### 3. Hotel Details Page

- Clicking on a hotel card navigates to the hotel details page.
- Dummy images, description tab, and rooms tab for each hotel.
- Each room card is populated with information fetched from the `fetchRoomById` API.

### 4. Room Booking

- Clicking on a room card opens a popup to choose check-in and check-out dates.
- Submitting the form books the room.
- Checks room availability and throws an error if the room is not available.

### 5. View Bookings

- Access a list of your hotel bookings in the bookings tab.



## Technologies Used

    - Typescript
    - Tailwind
    - react-material-ui


## Setup

Install Nodejs and pnpm in your system

## Usage

To run locally, clone this repo, navigate to it's root and type the following
pnpm i
pnpm run dev

## Running on Docker
- docker build -t frontend .
- docker run -p 5173:5173 frontend

## Contributing

Provide guidelines for contributing to your project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Acknowledgments

Give credit to any resources or inspirations you used in your project.




