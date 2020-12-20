FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm run start

# docker build -t icm_group .
# docker run -p 3000:3000 icm_group
# docker ps
# docker kill <container>