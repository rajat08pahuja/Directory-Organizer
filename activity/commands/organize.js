let fs = require('fs');
let path = require('path');
// let types = {
//     media: ["mp4", "mkv"],
//     archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
//     documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
//     app: ['exe', 'dmg', 'pkg', "deb"]
// }
let types = require("../utility/util");
// let types = require("F:\\PAB_rev\\1_FS_22_02_2021\\activity\\utility\\util.js");
function organizeHelper(path) {
    if(path == undefined){
        path= process.cwd();
    }
    organizeFiles(path);
    console.log("organize command was implemented");
}

module.exports = {
    organizeHelper
}

function checkExtension(src) {
    let ext = src.split('.').pop();
    for (let type in types) {
        for (let i = 0; i < types[type].length; i++) {
            if (ext == types[type][i]) {
                return type;
            }
        }
    }

    return "others";
}

function sendFile(src, dest, folderName) {
    let folderToMake = path.join(dest, folderName);
    if (fs.existsSync(folderToMake) == false) {
        fs.mkdirSync(folderToMake);
    }

    let pathofdestFile = path.join(folderToMake, path.basename(src));
    fs.copyFileSync(src, pathofdestFile);
}

function readContent(src) {
    return fs.readdirSync(src);
}

function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}

function organizeFiles(src) {
    let folderToMake = path.join(src, "Organized_Files");
    if (fs.existsSync(folderToMake) == false) {
        fs.mkdirSync(folderToMake);
    }
    organize(src, folderToMake);
}

function organize(src, dest) {
    let isFile = isFileOrNot(src);
    if (isFile == true) {
        let folderName = checkExtension(src);

        sendFile(src, dest, folderName);
    } else {
        let fDirnames = readContent(src);
        for (let i = 0; i < fDirnames.length; i++) {
            let child = fDirnames[i];
            organize(path.join(src, child), dest);
        }
    }
}