# chinese-learner
A desktop web application for learning Chinese and its character stroke order.

# Usage
By default, when you execute `npm start`, the application runs on
`http://localhost:1275`. You can change the port and all other Express
settings in the `index.js` file.

The current characters are cached in `client/cache/`. At the moment, the client
applications needs the server to fetch the stroke order for characters it
doesn't know. If you want the page to be static, set the `USE_CACHE_ONLY`
flag to `true` in `client/js/main.js`.

If you are interested in how the stroke order is internally represented, enter
something like `http://localhost:1275/strokeorder/我` into your web browser.
A JSON structure will appear which encodes the vector image for each stroke.

The stroke order sequence is courtesy of
[EON Media Limited](http://www.eon.com.hk/estroke/). When you visit a page like
[Chinese Hideout](http://chinesehideout.com/tools/strokeorder.php?c=我) which
uses EON's API, the canvas shown is very static and all in all the page doesn't
look nice. I wanted to change that, so I reverse-engineered the API so that
this project uses SVGs on the client side instead of canvases. Together with
CSS3, this makes animating the stroke order so easy that only stuff like
`transition: clip-path 0.2s;` and `clip-path: inset(...)` is needed for
the individual SVG paths. 

# Live version

Visit [sigalor.github.io/chinese-learner](https://sigalor.github.io/chinese-learner/)
to try out this application.
