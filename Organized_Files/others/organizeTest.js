let fs = require('fs');
let path = require("path");
const { types } = require('F://PAB_rev//1_FS_22_02_2021//activity//utility//util.js');
let dir = './organized';
let utility = require("F://PAB_rev//1_FS_22_02_2021//activity//utility//util.js");

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    let arrayOfFolders = Object.keys(utility.types);
    for(let i = 0 ; i < arrayOfFolders.length ; i++){
        fs.mkdirSync(dir + "//" + arrayOfFolders[i]);
    }
}

function readContent(src) {
    return fs.readdirSync(src);
}

function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}

function copy(src){
    let contents = readContent(src);
    for(let i = 0 ; i < contents.length ; i++){
        let name = contents[i];
        if(isFileOrNot(src + "//" + name) == true){
            let ext = name.split(".")[1];
            for(let i = 0 ; i < utility.types.app ; i++){
                if(utility.types.app[i] == ext){
                    fs.copyFileSync(src + "//" + name , src + "//organized//app" +  name);
                }
            }
            for(let i = 0 ; i < utility.types.archives ; i++){
                if(utility.types.archives[i] == ext){
                    fs.copyFileSync(src + "//" + name , src + "//organized//archives" + name);
                }
            }
            for(let i = 0 ; i < utility.types.media ; i++){
                if(utility.types.media[i] == ext){
                    fs.copyFileSync(src + "//" + name , src + "//organized//media" + name);
                }
            }
            for(let i = 0 ; i < utility.types.documents ; i++){
                if(utility.types.documents[i] == ext){
                    fs.copyFileSync(src + "//" + name , src + "//organized//documents" + name);
                }
            }
        }
    }
}