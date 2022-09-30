#!/bin/bash

set -e
echo "--- install dependencies ---"
yarn
echo "\n"
echo "--- clean target folder... ---"
rm -rf build
echo "\n"
echo "--- start to build... ---"
yarn run dll
yarn run build
echo "\n"
echo "--- build success!!! ---"

