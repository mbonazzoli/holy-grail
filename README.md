# holy-grail
full stack app using react, node, express, redis to demonstrate the holy-grail layout

## Requirements
The following need to be installed on your machine: 

* Docker
* Node
* Npm

This application uses a redis cache to store information regarding the various sections of the grid layout.
Redis can be spun up in docker by running the following command
```zsh
docker run -p 6379:6379 --name some-redis -d redis
```

Once running, clone the repository into a local directory and install node dependencies
```zsh
npm install
```

Once install, the application can then be started by running the following command
```zsh
node index.js
```

You will see the following message in the terminal to confirm the application is running
`Running on port: 3000`

You can now go to `localhost:3000` to interact with the holy-grail UI, have fun!
