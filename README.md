My site.

# Player

Get the file list from backblaze and save it as `file_list.json`
Edit this script to select a different bucket at the time of this writing it is
recovery-site "html/ruins"

1. Run ./bin/get-backblaze-file-list.sh

Parse file list and and write `index.json`
`index.json` is the actual playlist file that the player uses

2. Run ./bin/parse-b2.mjs file_list.json

Create a directory for `index.json` to live in

3. mkdir src/playlists/<directory-name>

Move `index.json` to its corresponding place

4. mv `index.json` src/playlists/<directory-name>

5. Copy the player javascript code to the md file (see ruins-in-the-distance.md
   as a guide)
