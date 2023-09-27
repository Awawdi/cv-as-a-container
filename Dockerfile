FROM ubuntu:22.04

# Avoid tzdata asking for geographic location
ENV DEBIAN_FRONTEND=noninteractive

# Install Nginx and other required packages
RUN apt-get update && \
    apt-get install -y nginx unzip vim python3 && \
    rm -rf /var/lib/apt/lists/*

# Copy content and configuration files
COPY app/index.html /usr/share/nginx/html/
COPY app/style.css /usr/share/nginx/html/
COPY app/script.js /usr/share/nginx/html/
COPY app/default.conf /etc/nginx/conf.d/default.conf
COPY app/riddle-1.zip /home/wanna-see-me-dance/riddle-1.zip
COPY app/riddle-2.zip /home/wanna-see-me-dance/riddle-2.zip

# Copy and make the bash script executable
COPY service/wanna-see-me-dance.sh /usr/local/bin/create-logs.sh
RUN chmod +x /usr/local/bin/create-logs.sh

# Expose port 8080
EXPOSE 8080

# Start Nginx and the bash script in the background
CMD /usr/local/bin/create-logs.sh > /var/log/wanna-see-me-dance.log 2>&1 & exec nginx -g 'daemon off;'
