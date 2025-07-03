#!/usr/bin/env bash

# Set environment variable to Production
if [ "$OS" = "Windows_NT" ]; then
    set NODE_ENV=development
else
    export NODE_ENV=development
fi

# Start nodemon server
nodemon server.js