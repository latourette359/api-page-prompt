# ShieldRule Setup Readme

The following is a rough developer onboarding guide for the shieldrule
codebase

## You'll need access too
1. github
2. aws
3. slack

## Server Setup

2. Download and install java 8

2. Download intellij CE

3. You'll need to get a local instance of postgres running. You can either
install it directly to your computer using brew or use a docker image. Once started, you should
log into your local postgres server and create a database with the name donkey. There should
be a postgres User with a blank password so the dev server settings can log in 
(look at src/main/resources/application.properties for dev server settings). 


4. now you should be ready to start the server. to do this run the following from the project root:
```
./gradlew bootRun
```
This will start the server running on localhost:8080 and populate data into your test database


## Frontend Setup

1. Install npm

2. Run the following from project root:
```
npm install
```

3. To start the frontend locally run the following from project root:
```
npm run-script start
```
This should serve the frontend at localhost:8081. When navigating to this url you
should see the Shieldrule frontend. In order to login you can use the test creds,
username: nick
password: password

## Elastic Search
should be able to run:
```
./setup.sh
```
from root and have a elastic search instance spun up.

links to how it was setup and where some important things are (logs and config)
- https://www.elastic.co/guide/en/elasticsearch/reference/current/brew.html
- https://logz.io/blog/brew-install-elasticsearch-mac/



## Local Docker Development

### Using Postgres and Elasticsearch

You can just run postgres and elasticsearch on docker as resources, and debug your project locally without docker. 
- Postgres will be running on `localhost:5432`
- Elasticsearch will be running on `localhost:9200`

```bash
# from project root
docker-compose up -d elasticsearch postgres 
```


### Before docker

```bash
scripts/build.sh  # build backend and frontend
```

### Building backend

From project_root:

```bash
# scripts/build.sh must be run first
scripts/run_docker_local.sh
```

## Production Docker

Production docker uses `docker-compose.yml` definitions but also `docker-compose.prod.yml` overrides.

Production docker also has base images which must be built first.

Look at `deploy_frontend.sh` and `deploy_backend.sh` in the `scripts` folder for the docker builds. Scripts have not been fully debugged.


Running docker-compose targets follows this format:

```bash
docker-compose -f docker-compose.prod.yml -f docker-compose.yml up -d target
```

A convenience script has been created:

```bash
scripts/run_docker_prod.sh
```


