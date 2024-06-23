import { createAndWriteFile , readFile , updateFile , deleteFile } from "../fileManagement";

//data need to be obj type ex.{"username" : "input username"} and so on
const setUser = async (data) => {
    console.log(data)
    await createAndWriteFile('userConfig.json', data)
}

const updateUser = async (data) => {

    await updateFile('userConfig.json' ,  data )
}

export {setUser , updateUser};