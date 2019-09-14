#!/bin/bash
cp -R dist/ ../publish/
cd ../publish
git add .
git commit -m 'auto deploy'
git push
