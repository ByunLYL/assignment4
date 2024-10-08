# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application for production
RUN npm run build

# Install serve to serve the build files
RUN npm install -g serve

# Make port 8083 available to the world outside this container
EXPOSE 8083

# Define the command to run the application
CMD ["serve", "-s", "build", "-l", "8083"]
