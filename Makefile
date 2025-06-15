SERVICE_NAME = styled-swagger-ui
GIT_HASH = $(shell git rev-parse --short HEAD)
GIT_TAG = $(shell git describe --tags --exact-match HEAD 2>/dev/null)
CONTAINER_IMAGE_TAG ?= $(if $(GIT_TAG),$(GIT_TAG),$(GIT_HASH))
CONTAINER_IMAGE = $(SERVICE_NAME):$(CONTAINER_IMAGE_TAG)
CONTAINER_IMAGE_LATEST = $(SERVICE_NAME):latest
REPO_FOLDER ?= $(shell pwd)

######################
# React Dev Commands
######################

install:
	cd $(REPO_FOLDER) && npm install

start-dev:
	cd $(REPO_FOLDER) && npm start

build-prod:
	cd $(REPO_FOLDER) && npm run build

test:
	cd $(REPO_FOLDER) && npm test

######################
# Container
######################

build-container:
	cd $(REPO_FOLDER) && \
	docker build -t $(CONTAINER_IMAGE) . && \
	docker tag $(CONTAINER_IMAGE) $(CONTAINER_IMAGE_LATEST)

start-container:
	docker compose -f docker-compose.yaml up -d

stop-container:
	docker compose -f docker-compose.yaml down
