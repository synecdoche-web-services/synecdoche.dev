HUGO_VERSION = `cat hugo_version`
build_deps = hugo node_modules
build_data = config.toml postcss.config.js archetypes/** assets/** content/** layouts/** static/**

public: $(build_deps) $(build_data)
	@echo "Building Site"
	ls -l hugo
	pwd
	./hugo

.PHONY: server
server: $(build_deps) $(build_data)
	./hugo server --disableFastRender

hugo:
	@echo "Downloading hugo v${HUGO_VERSION}"
	curl -Ls "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz" | tar -xz hugo && echo "Success"
	ls -l hugo

node_modules: package.json package-lock.json
	@echo "Installing dependencies"
	npm install &>/dev/null

.PHONY: clean
clean:
	rm -rf public resources hugo node_modules
