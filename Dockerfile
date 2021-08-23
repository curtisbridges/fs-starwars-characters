FROM node:14 AS ui-build

#ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

# Copy the client source code
COPY client/ ./client/
# Build the client
RUN cd client && npm install && npm run build

# Now handle the server
FROM node:14 AS server-build
WORKDIR /root/

# Copy the client build to the server
COPY --from=ui-build /usr/src/app/client/build ./client/build
# Copy the server node package file
COPY package*.json .
# Install the server dependencies
RUN npm install
# Copy the server source
COPY server/ ./server/

# Runs on port 4000
EXPOSE 4000
CMD [ "node", "server/index.js" ]
