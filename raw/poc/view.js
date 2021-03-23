let fs = require("fs");

function checkFileOrNot(src){
    return fs.lstatSync(src).isFile();
}

function readContent(src){
    return fs.readdirSync(src);
}

function viewFlat(src){
    let isFile = checkFileOrNot(src);
    if(isFile){
        console.log(src + "*");
    } else{
        console.log(src);
        let childrenPaths = readContent(src);

        for(let i = 0 ; i < childrenPaths.length ; i++){
            viewFlat(src + "/" + childrenPaths[i]);
        }
    }
}

viewFlat("d10");