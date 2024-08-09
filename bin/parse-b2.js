#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log(process.argv)
if (process.argv.length < 3) {
    throw new Error("Missing argument input.json")
}

const inputFileName = process.argv[2]
const inputFile = fs.readFileSync(inputFileName)
let fileList
try {
    fileList = JSON.parse(inputFile)
} catch (e) {
    throw new Error('Could not parse json');
}

// TODO: Should actually be array
const result = {}

fileList.forEach(item => {
    const file = path.basename(item.fileName, '.mp3')
    // escape hyphens
    let name = file.replace(/-+/g, ' ');
    // capitalize first character
    name = name.charAt(0).toUpperCase() + name.substr(1);
    result[name] = {
        name: name,
        url: name,
        dateModified: parseInt(item.fileInfo.src_last_modified_millis)
    }
})

fs.writeFileSync(
    'index.json',
    JSON.stringify(result)
);

console.log('Generated file index')
