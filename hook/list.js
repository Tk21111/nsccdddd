import { createAndWriteFile , readFile , updateFile , deleteFile } from "../fileManagement";

const foodListUpdate = async (data) => {
    let prv = await readFile('food.json');

    if (data.cal >= 2000){
        prv.list_2000.push(data)
    } else if (data.cal >=1500){
        prv.list_1500.push(data)
    } else if (data.cal >=1000){
        prv.list_1000.push(data)
    } else if (data.cal >=500){
        prv.list_500.push(data)
    }

    

    await createAndWriteFile('food.json' , prv)
}