import { createAndWriteFile , readFile , updateFile , deleteFile } from "../fileManagement";

//data need to be obj type ex.{"username" : "input username"} and so on
const setUser = async (data) => {
    console.log(data)
    await createAndWriteFile('userConfig.json', data);
    await createAndWriteFile('food.json' , {"list_2000": [{"cal" : 2000 , "name": "sadij", "ingredent": "1.asdfsgd"}], "list_1000": [{"cal" : 1000 , "name": "sadij", "ingredent": "1.asdfsgd"}], "list_1500": [{"cal" : 1500 , "name": "sadij", "ingredent": "1.asdfsgd"}], "list_500": [{"name": "adsfdsdfg", "ingredent": "1.asfdgsfgd","cal" : 500}, {"name": "adsfg", "ingredent": "asdfdg" ,"cal": 500}, {"name": "aiykhjbmnfhn", "ingredent": "asdfdg", "cal" : 500}]});

}

const updateUser = async (data) => {

    await updateFile('userConfig.json' ,  data )
}

export {setUser , updateUser};