install:
	npm ci

lint:
	npm run slint
	npm run hlint
	npm run eslint

build:
	npm run build

deploy:
	npm run deploy

dev:
	npm run dev