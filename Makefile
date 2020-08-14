PROJECT="employee-title-generator-frontend"

ci:
	$(MAKE) build
	$(MAKE) test

.PHONY: build
build:
	docker build --no-cache -t ${PROJECT} .

start:
	docker run -d -p 8081:80 ${PROJECT}

start_development:
	yarn start

test:
	CI=true yarn test --coverage
