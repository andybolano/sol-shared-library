#!/bin/bash
#chmod +x start.sh

if [ "$(docker ps -q -f name=dockerize-vue-sol-shared-library)" ]; then
    echo "Image already is executing"
else
    docker rm dockerize-vue-sol-shared-library
    docker run -p 8081:8081 --name dockerize-vue-sol-shared-library -d sol-shared-library
fi