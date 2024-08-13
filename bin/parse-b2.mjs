#!/usr/bin/env node

import { readFileSync, writeFileSync, stat } from 'fs';
import { basename, extname } from 'path';

if (process.argv.length < 3) {
  throw new Error("Missing input argument, expected a file list (json)")
}

const outputFileName = 'index.json';
const inputFileName = process.argv[2]
const inputFile = readFileSync(inputFileName)
let fileList
try {
  fileList = JSON.parse(inputFile)
} catch (e) {
  throw new Error('Could not parse json');
}

const result = []

fileList.sort((a, b) => {
  if (!a.fileInfo || !b.fileInfo)
    return 0;
  const date1 = parseInt(a.fileInfo.src_last_modified_millis)
  const date2 = parseInt(b.fileInfo.src_last_modified_millis)
  return date2 - date1;
});

fileList.forEach(item => {
  const ext = extname(item.fileName);
  if (ext !== '.mp3')
    return;
  const file = basename(item.fileName, '.mp3');
  const url = basename(item.fileName);
  // escape hyphens
  let name = file.replace(/-+/g, ' ');
  // capitalize first character
  name = name.charAt(0).toUpperCase() + name.slice(1);
  result.push({
    name: name,
    url: url,
    dateModified: parseInt(item.fileInfo.src_last_modified_millis)
  })
})

console.log(`Processed ${fileList.length} files.`)

stat(outputFileName, () => {
  writeFileSync(
    outputFileName,
    JSON.stringify(result, null, "\t")
  );
  console.log(`Created: "${outputFileName}"`)
});
