#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
echo "$BASEDIR"

echo frisby@2.0.5 downloading
npm install frisby@2.0.5
echo frisby@2.0.5 downloaded

echo jest downloading
npm install jest
echo jest downloaded

echo run tests
cd $BASEDIR\\node_modules\\.bin
.\\jest
echo test finished

read