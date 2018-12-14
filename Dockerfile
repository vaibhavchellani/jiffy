# base image
FROM node:11.4.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . ./
RUN npm install --silent

EXPOSE 8080
# start app
CMD ["npm", "run", "watch"]