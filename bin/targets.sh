#!/bin/bash

SRCDIR=src
OUTPUTDIR=build

# set page title
TITLE=dmk

# pandoc args
ARGS='--standalone'
# ARGS+=' --include-in-header='"$SRCDIR"'/css/normalize.min.css'
ARGS+=' --include-in-header='"$SRCDIR"'/css/style.css'
ARGS+=' --include-in-header='"$SRCDIR"'/includes/favicon.html'
ARGS+=' --metadata pagetitle='"$TITLE"

# find markdown sources
SOURCES=$(find "$SRCDIR"/md -type f -iname "*.md")

for file in $SOURCES; do
  echo "Building target:" "$file"
  filename=$(basename "$file" .md)
  if [ "$filename" != "index" ]; then
      mkdir -p "$OUTPUTDIR"/"$filename"
      pandoc "$file" -o "$OUTPUTDIR"/"$filename"/index.html $ARGS
  else
      pandoc "$file" -o "$OUTPUTDIR"/"$filename".html $ARGS
  fi
  if [ -d "$OUTPUTDIR"/"$filename" ]; then
    if [ -d "$SRCDIR"/playlists/"$filename" ]; then
        cp "$SRCDIR"/playlists/"$filename"/*.json "$OUTPUTDIR"/"$filename"
    fi
  fi
done

# copy javascript files
cp -f "$SRCDIR"/includes/*.js "$OUTPUTDIR"
cp -f player/dmk-player.js "$OUTPUTDIR"
cp -f player/dmk-player.css "$OUTPUTDIR"
