# Use an official Node.js runtime as a parent image
FROM docker.arvancloud.ir/node:21-alpine3.18


# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Add the rest of the code
COPY . .

# Build the project (specify the project name if needed)
RUN npx nx build docs --skip-nx-cache



# Expose the port the app runs on
EXPOSE 4200

# Run the application
CMD ["npx", "nx", "serve", "docs"]
