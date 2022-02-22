#!/usr/bin/env node
const inquirer = require('inquirer')
const runCmd = require('./src/runCmd');
exports.printMsg = function() {
    console.log("This is a message from the demo package");
  }

inquirer.prompt([
    {
        "type": 'input',
        "name": 'name',
        "message": 'Enter the name of the project'
    },
]).then(project => {
    console.log(`Gnénération du projet ${project.name}`);
    runCmd('npm.cmd', ['init', '&&', 'i', 
    '@babel/core',
    '@babel/preset-env', 
    'babel-loader', 
    'clean-webpack-plugin', 
    'copy-webpack-plugin', 
    'css-loader', 
    'dat.gui', 
    'file-loader', 
    'html-loader', 
    'html-webpack-plugin', 
    'mini-css-extract-plugin', 
    'portfinder-sync', 
    'raw-loader', 
    'style-loader', 
    'three webpack', 
    'webpack-cli', 
    'webpack-dev-server', 
    'webpack-merge',
    'vercel'
 ])
}

);
