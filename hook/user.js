import { createAndWriteFile , readFile , updateFile , deleteFile } from "../fileManagement";

//data need to be obj type ex.{"username" : "input username"} and so on
const setUser = async (data) => {
    console.log(data)
    await createAndWriteFile('data.json', {})
    await createAndWriteFile('userConfigg.json', data);
    await createAndWriteFile('food.json' , {"list_2000": [{"cal" : 2000 , "name": "sadij", "ingredent": "1.asdfsgd" , "healthy" : true}], "list_1000": [{"cal" : 1000 , "name": "sadij", "ingredent": "1.asdfsgd","healthy" : true}], "list_1500": [{"cal" : 1500 , "name": "sadij", "ingredent": "1.asdfsgd","healthy" : true}], "list_500": [{"name": "adsfdsdfg", "ingredent": "1.asfdgsfgd","cal" : 500,"healthy" : true}, {"name": "adsfg", "ingredent": "asdfdg" ,"cal": 500,"healthy" : true}, {"name": "aiykhjbmnfhn", "ingredent": "asdfdg", "cal" : 500,"healthy" : true}]});

}

const updateUser = async (data) => {

    await updateFile('userConfigg.json' ,  data )
}

export {setUser , updateUser};