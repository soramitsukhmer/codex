#!/usr/bin/env bash

tsc src/common-currency.ts -d --outDir currency
tsc src/country-codes.ts -d --outDir country
tsc src/index.ts -d --outDir dist
