import { createAndWriteFile , readFile , updateFile , deleteFile } from "../fileManagement";

const foodListUpdate = async (data) => {
    await updateFile('food.json' , data)
}