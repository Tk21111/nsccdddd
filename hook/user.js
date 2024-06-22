import { createAndWriteFile , readFile , updateFile , deleteFile } from "../fileManagement";

const setUser = async () => {
    const high = 200;
    const weight = 20;
    const age = 30;
    const hard = 5;

    await createAndWriteFile('userConfig.json', {"ibm": weight/high*high, "age" : age , "hard" : hard})
}

const updateUser = async () => {
    const high = 200;
    const weight = 20;
    const age = 30;
    const hard = 5;

    await updateFile('userConfig.json' ,  {"ibm": weight/high*high, "age" : age , "hard" : hard} )
}

export {setUser};