import { createAndWriteFile , readFile , updateFile , deleteFile } from "../fileManagement";

const foodListUpdate = async (data) => {
    let prv = await readFile('food.json');
    console.log(prv)
    if (data.cal >= 2000){
        prv.list_2000.push(data)
    } else if (data.cal >=1500){
        prv.list_1500.push(data)
    } else if (data.cal >=1000){
        prv.list_1000.push(data)
    } else if (data.cal >=0){
        prv.list_500.push(data)
    }
    console.log('hallo')
    console.log(prv)
    await createAndWriteFile('food.json' , prv)
}

//input : list 
const foodListFilter = async(data) => {
    let prv = await readFile('food.json');

    console.log(prv)
    const key = Object.keys(prv);
    if (typeof data ===  'list'){
        for (let f of data){
            for (let i of key){
                let objPrv = prv[i];
         
                prv[i] = objPrv.filter(val => f !== val.ingredent);
             }
        }
    } else {
        for (let i of key){
            let objPrv = prv[i];
                prv[i] = objPrv.filter(val => data !== val.ingredent);
         }
        
    }
    try {
        console.log(prv)
        await createAndWriteFile('food.json', prv)
    } catch {
        console.log('fail')
    }
    

};

const updateLike  = async(name) => {
    let prv = await readFile('food.json');
   
    for (let i of Object.keys(prv)){
        //i = list_500
        for (let l of prv[i]){
            if(l.name === name){
                l.like = true;
                console.log('change like');
                await createAndWriteFile('food.json' , prv);
            };
        };
    };
};
const updateUnLike  = async(name) => {
    let prv = await readFile('food.json');
   
    for (let i of Object.keys(prv)){
        //i = list_500
        for (let l of prv[i]){
            if(l.name === name){
                l.like = false;
                console.log('change like');
                await createAndWriteFile('food.json' , prv);
            };
        };
    };
};



export {foodListUpdate , foodListFilter , updateLike , updateUnLike };