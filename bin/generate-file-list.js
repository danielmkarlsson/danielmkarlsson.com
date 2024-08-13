#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const inputDir = path.resolve(__dirname, '../', 'audio');
// const inputDir = path.resolve(__dirname, '../', 'build', 'audio');
const outputDir = path.resolve(__dirname, '../', 'build', 'audio');

function getDuration(file) {
  const sox = spawn('soxi', ['-D', file]);
  
  return new Promise((resolve, reject) => {
    let timeStr = '';

    sox.stdout.on('data', str => {
      timeStr += str;
    });

    sox.stderr.on('data', err => {
      reject(err);
    });

    sox.on('close', code => {
      if (code === 0) {
        timeStr = timeStr.replace('\n', '');
        resolve(timeStr);
      } else {
        reject(`sox exited with error code: ${code}`);
      }
    })
  });
}

function getTimestamp(file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, stats) => {
      if (err) reject(err);
      resolve(stats);
    });
  });
}

function extractMetadata(file) {
  const duration = getDuration(file);
  const stats = getTimestamp(file);
  return Promise.all([duration, stats]);
}

function readAudioFiles() {
  return new Promise((resolve, reject) => {
    fs.readdir(inputDir, (err, files) => {
      if (err) {
        reject(err);
      }

      const data = {};

      const filePromises = files.map(file => {
        // const url = path.join('audio', file);
        const url = file;
        const ext = path.extname(file);

        if (ext !== '.mp3') return;

        // escape hyphens
        let name = file.replace(/-+/g, ' ');
        name = name.replace(/.mp3$/, '');
        // capitalize first character
        name = name.charAt(0).toUpperCase() + name.substr(1);

        return extractMetadata(path.join(inputDir, file))
          .then(result => {
            const [duration, stats] = result;
            data[file] = {
              name,
              url,
              duration,
              dateModified: stats.mtime,
              birthTime: stats.birthtime,
            };
          });
      });

      Promise.all(filePromises)
        .then(() => resolve(data));
    })
  });
}

readAudioFiles().then(data => {
  fs.writeFileSync(
    path.resolve(outputDir, 'index.json'),
    JSON.stringify(data)
  );

  console.log('Generated file index')
});
