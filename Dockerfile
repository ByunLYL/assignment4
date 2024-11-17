# Use the official Node.js image to build the React app
FROM node:16 as build

# Set the working directory in the build container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application for production
RUN npm run build

# Use the official Nginx image to serve the production build
FROM nginx:1.21-alpine

# Set the working directory in the production container
WORKDIR /Liu_Yulin_final_site

# Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration, if necessary
# Uncomment the following lines if you have a custom Nginx configuration file
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5575
EXPOSE 5575

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
