# Use the official Node.js image as a base
FROM node:14

# Set the working directory
WORKDIR /liu_yulin_ui_garden_build_checks

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# envirenment setting 8018
ENV PORT=8018

# Command to run the application
CMD ["npm", "start"]

# Expose the port
EXPOSE 8018
