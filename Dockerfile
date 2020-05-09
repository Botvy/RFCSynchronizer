# Use node as base image in the version 12.16.2
FROM node:12.16.2

# Switch to the application directory
WORKDIR /app

# Copy the package.json and yarn.lock for installing the dependencies
COPY package.json .
COPY yarn.lock .

# Install all the dependencies
RUN yarn install

# Copy the src directory and the TypeScript configuration file
COPY ./src ./src
COPY tsconfig.json .

# Transpile the TypeScript source files
RUN yarn build

# Set the entrypoint
CMD ["yarn", "start"]
