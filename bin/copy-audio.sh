#!/bin/bash

OUTPUTDIR=build
AUDIODIR="$OUTPUTDIR"/audio

mkdir -p "$AUDIODIR" && cp -n audio/*.mp3 "$AUDIODIR" &2> /dev/null

bin/generate-file-list.js
