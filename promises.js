const { readFile } = require('fs')

//using async from files
const getText = async (path) => {
    return new Promise ((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) =>{
            if (err){
                reject(err)
            }else {
                resolve(data) 
            }
        });
    });
};


(async() => {
    try{
        const data = await getText('./content/first.txt')
        console.log(data)
    }catch(err) {
        console.log(err)
    }
})();

// readIt()