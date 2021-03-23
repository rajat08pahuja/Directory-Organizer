let fs = require('fs');
let path = require('path');

function viewHelper(mode, path) {
    if(path == undefined){
        path = process.cwd();
    }
    if (mode == "tree") {
        console.log("tree view was implemented");
        viewTree(path , "");
    } else if (mode == "flat") {
        console.log("flat view was implemented");
        viewFlat(path);
    }
}

module.exports = {
    viewHelper
}


function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}

function readContent(src) {
    return fs.readdirSync(src);
}

function viewFlat(src) {
    let isFile = isFileOrNot(src);
    if (isFile == true) {
        console.log(src + "*");
    } else {
        console.log(src);
        let fDirNames = readContent(src);

        for (let i = 0; i < fDirNames.length; i++) {
            let child = fDirNames[i];
            let dirNamePath = path.join(src, child);
            viewFlat(dirNamePath);
        }
    }
}

function viewTree(src, indent) {
    let isFile = isFileOrNot(src);
    if (isFile == true) {
        console.log(indent + path.basename(src) + "*");
    } else {
        console.log(indent + path.basename(src));
        let fDirNames = readContent(src);

        for (let i = 0; i < fDirNames.length; i++) {
            let child = fDirNames[i];
            let dirNamePath = path.join(src, child);
            viewTree(dirNamePath , indent + "\t");
        }
    }
}
