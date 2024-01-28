# Use the official Node.js LTS image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json, pnpm-lock.yaml, and tsconfig.json to the working directory
COPY package.json pnpm-lock.yaml tsconfig.json ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Expose the port your app is running on
EXPOSE 5173

# Command to run the app
CMD ["pnpm", "run", "dev"]


# Running commands
# docker build -t frontend .
# docker run -p 5173:5173 frontend