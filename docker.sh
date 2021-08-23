#!/bin/sh
docker build -t skillsoft-image .
docker run -d -p  4000:4000 --name skillsoft-starwars skillsoft-image
