#!/usr/bin/env bash

GIT_ID=$(git describe --all --long | cut -d "-" -f 3)
NOW=$(date)
echo export const version = \{ number: \"$GIT_ID\", now: \"$NOW\" \} > src/app/version.ts
