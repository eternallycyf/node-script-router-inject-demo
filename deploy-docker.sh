#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf ./src/pages/.DS_Store

cd ..

scp -r node-script-router-inject-demo root@118.31.34.158:/home/blog/

cd -