#!/usr/bin/env bash

GIT_ID=$(git describe --all --long | cut -d "-" -f 3)
echo export const version = \{ number: \"$GIT_ID\" \} > src/app/version.ts
