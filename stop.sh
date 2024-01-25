#!/bin/bash
if [ "$(docker ps -q -f name=dockerize-vue-sol-shared-library)" ]; then
    docker stop dockerize-vue-sol-shared-library
    echo "Container stopped."
else
    echo "Container is not executing"
fi