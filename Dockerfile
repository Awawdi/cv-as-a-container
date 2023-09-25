FROM ubuntu:22.04

# Avoid tzdata asking for geographic location
ENV DEBIAN_FRONTEND=noninteractive

# Install Nginx
RUN apt-get update && \
    apt-get install -y nginx unzip && \
    rm -rf /var/lib/apt/lists/*

# Copy content and configuration files
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf
COPY riddle-1.zip /home/wanna-see-me-dance/riddle-1.zip

# Expose port 8080
EXPOSE 8080

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
