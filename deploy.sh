#!/bin/env bash
if [ $1 ]; then
    # echo $1
    git checkout deploy && \
    git merge master && \
    npm version $1 && git push
else
    git checkout deploy && \
    git merge master && \
    npm version patch && git push
fi
