#!/bin/env bash
if [ $1 ]; then
    # echo $1
    npm version $1 && git push && \
    git checkout deploy && \
    git merge master && \
    git push
else
    npm version patch && git push && \
    git checkout deploy && \
    git merge master && \
    git push
fi
