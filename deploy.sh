#!/bin/env bash
if [ $1 ]; then
    # echo $1
    npm version $1 && \
    git checkout deploy && \
    git merge master && \
    git push
else
    npm version patch && \
    git checkout deploy && \
    git merge master && \
    git push
fi
