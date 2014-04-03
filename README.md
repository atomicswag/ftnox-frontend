# Install

### Handlebars

* npm install -g handlebars

### Sass

* sudo apt-get install ruby1.9.1-full
* sudo gem install sass

### Bootstrap

* bootstrap scss files taken from https://github.com/twbs/bootstrap-sass
* javascript taken from https://github.com/twbs/bootstrap

### Environment

Go into the `js` directory and run `npm install .`

Set /etc/hosts to include:
    127.0.0.1 local.ftnox.com

You must develop at http://local.ftnox.com:8889 in order for CORS to work with the main API server.

# Compiling

`make static` will compile the templates and javascript.
`make scss` will compile the scss files.

# Running the server

node server.js
