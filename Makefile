run: static

scss: .FORCE
	scss scss/style.scss:static/main/css/style.css

static: .FORCE
	handlebars templates/main/*.html -f js/templates/main.js
	handlebars templates/treasury/*.html -f js/templates/treasury.js
	node js/bin/package_main.js > static/main/js/main.js
	node js/bin/package_treasury.js > static/treasury/js/main.js
	node js/bin/render.js

.FORCE:
