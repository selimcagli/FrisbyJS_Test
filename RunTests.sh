#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
echo "$BASEDIR"

echo run tests
cd $BASEDIR\\node_modules\\.bin
.\\jest
echo test finished

read