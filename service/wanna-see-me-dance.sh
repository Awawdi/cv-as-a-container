#!/bin/bash

log_file="/var/log/wanna-see-me-dance.log"
characters="unicorn"

while true; do
    timestamp=$(date +"%Y-%m-%d %H:%M:%S")
    char=${characters:RANDOM%${#characters}:1}
    echo "$timestamp - This is a letter from password: $char"
    sleep 15
done
