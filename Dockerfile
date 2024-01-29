# Use the official Node.js LTS image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json, pnpm-lock.yaml, and tsconfig.json to the working directory
COPY package.json pnpm-lock.yaml tsconfig.json ./

# Install pnpm
RUN npm install -g pnpm typescript vite

# Install dependencies
RUN pnpm install

# Copy the entire project to the working directory
COPY . .

# Build the React Vite app
# RUN pnpm run build

# Expose the port your app is running on
EXPOSE 5173

# Command to run the app
CMD ["pnpm", "run", "dev"]
