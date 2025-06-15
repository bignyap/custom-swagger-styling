# Step 1: Build the React app
FROM node:alpine3.20 AS build

WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve the app with nginx
FROM nginx:stable-alpine

# Copy the built files to nginx's html folder
COPY --from=build /app/build /usr/share/nginx/html

# Optional: Replace default nginx config with a custom one
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
