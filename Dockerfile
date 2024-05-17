FROM ubuntu:22.04

# Avoid tzdata asking for geographic location
ENV DEBIAN_FRONTEND=noninteractive

# Install Nginx and other required packages
RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

# Copy content and configuration files
COPY app/index.html /usr/share/nginx/html/
COPY app/style.css /usr/share/nginx/html/
COPY app/script.js /usr/share/nginx/html/

# Copy and make the bash script executable
#COPY service/create-logs.sh /usr/local/bin/create-logs.sh
#RUN chmod +x /usr/local/bin/create-logs.sh

# Expose port 8080
EXPOSE 8080

# Start Nginx and the bash script in the background
#CMD /usr/local/bin/create-logs.sh > /var/log/riddle.log 2>&1 & exec nginx -g 'daemon off;'