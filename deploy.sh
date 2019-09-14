#!/bin/bash
cp -R dist/ ../centell.github.io/
cd ~/Documents/Workspace/Centell/Web/github.io/centell.github.io
git add .
git commit -m 'auto deploy'
git push