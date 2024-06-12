# Use official Node.js image as the base image
FROM node:20.12-alpine3.18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to workdir
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to workdir
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Set environment variables
ENV NODE_ENV=production

# Start the React app
CMD ["npm", "run", "dev"]
