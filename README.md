# client-server

This is a simple react client, served via an express server, which also serves the /client endpoint, which delivers the game client, which can than be used in webclients etc. The code for a domain lock is not included, and **note** the VotrClient.swf is not a real swf file, and the demo won't serve a file until you replace it with a valid swf, and rename it under app.js, and replace the VotrClient.swf placeholder with a real swf.


The client itself is react, and has a demo page in place, which you could replace with content for your server, or an iframe for a web client.
## Getting Started

Requirements 

```
Node > 6
NPM >= LTS
```

Installing/Setting up

```
git clone https://github.com/KrakenMare/client-server
cd client-server
npm install
cd client 
npm run build
cd
cd client-server
npm run server
```

Happy hunting, the */src* is the react code, while app.js is the express server. VotrClient.swf is a placeholder swf to be replaced with yours. I tend to use a boilerplate similiar to this when starting out.
