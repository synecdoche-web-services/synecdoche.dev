#!/bin/bash

set -e -o pipefail

function downloadHugo() {
	curl -L "https://github.com/gohugoio/hugo/releases/download/v$1/hugo_extended_$1_Linux-64bit.tar.gz" | tar xz hugo
}

if [ -z "$1" ]; then
	echo "USAGE: gethugo.sh HUGO_VERSION_NUMBER"
else
	downloadHugo "$1"
fi
