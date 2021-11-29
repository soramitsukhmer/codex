#!/usr/bin/env bash

rm -rf currency || true
tsc src/currency/index.ts -d --outDir currency

rm -rf country || true
tsc src/country/index.ts -d --outDir country

rm -rf dist || true
tsc src/index.ts -d --outDir dist
