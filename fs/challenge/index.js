import fs from "fs";

console.log(fs.readdirSync(process.cwd()));

console.log(fs.statSync('book.txt'));

console.log(fs.readdirSync('folder-a/folder-a1'))

const folders_in_current_dir = fs.readdirSync(process.cwd());

function build_tree(current_dir, path, arr){

    const current = current_dir[0];

    if(!current) return arr;

    const current_path = `${path}${current}`;

    const CURRENT_IS_DIR = is_dir(current_path);

    const size = fs.statSync(current_path).size;

    const file_object = {
        name: current,
        folder_path: current_path,
        size,
        type: CURRENT_IS_DIR ? "folder" : "file"
    }

    if( CURRENT_IS_DIR ) file_object.files = build_tree(fs.readdirSync(current_path), `${current_path}/`, []);

    arr.push( file_object );

    return build_tree(current_dir.slice(1), path, arr);

}

function is_dir( path ){

    try{

        fs.readdirSync(path);

        return true;

    }catch(e){

        false;

    }

}

console.log(JSON.stringify(build_tree(folders_in_current_dir, '', []), null, 2))