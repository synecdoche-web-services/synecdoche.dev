hugo_version = 0.59.1
hugo_dir=.
build_deps = hugo node_modules
build_data = config.toml postcss.config.js archetypes/** assets/** content/** layouts/** static/**

public: $(build_deps) $(build_data)
	@echo "Building Site"
	${hugo_dir}/hugo

.PHONY: server
server: $(build_deps) $(build_data)
	${hugo_dir}/hugo server --disableFastRender

hugo:
	@echo "Downloading hugo v${hugo_version}"
	cd ${hugo_dir} && curl -Ls "https://github.com/gohugoio/hugo/releases/download/v${hugo_version}/hugo_extended_${hugo_version}_Linux-64bit.tar.gz" | tar -xz hugo

node_modules: package.json package-lock.json
	@echo "Installing dependencies"
	npm install &>/dev/null

.PHONY: clean
clean:
	rm -rf public resources hugo node_modules
