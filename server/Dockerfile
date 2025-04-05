# Use Node.js Alpine base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install json-server globally
RUN npm install -g json-server

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose port
EXPOSE 3000

# Start json-server globally
CMD ["json-server", "--watch", "db.json", "--host", "0.0.0.0", "--port", "3000"]
