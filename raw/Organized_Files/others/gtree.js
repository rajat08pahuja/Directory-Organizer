let root = {
    name: "d10",
    children: [{
        name: "d20",
        children: [{
            name: "d50",
            children: []
        }, {
            name: "d60",
            children: []
        }]
    }, {
        name: "d30",
        children: [{
            name: "d70",
            children: []
        }]
    }, {
        name: "d40",
        children: []
    }]
}

function displayGtree(node){
    let menMyChildren = "";
    menMyChildren += node.name + " => ";

    for(let i = 0 ; i < node.children.length ; i++){
        let child = node.children[i];
        menMyChildren += child.name + ", ";
    }

    console.log(menMyChildren);

    for(let i = 0 ; i < node.children.length ; i++){
        displayGtree(node.children[i]);
    }
}

displayGtree(root);