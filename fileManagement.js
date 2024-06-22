import * as FileSystem from 'expo-file-system';


const createAndWriteFile = async (flieName ,data) => {

    const jsonFilePath = `${FileSystem.documentDirectory}${flieName}`;

    const content = JSON.stringify(data);

    try {
        await FileSystem.writeAsStringAsync(jsonFilePath, content);
        //console.log('JSON file written successfully!');
    } catch (error) {
        console.error('Error writing JSON file:', error);
    }
};

const readFile = async (flieName) => {

    const jsonFilePath = `${FileSystem.documentDirectory}${flieName}`;

    try {
        const content = await FileSystem.readAsStringAsync(jsonFilePath);
        const data = JSON.parse(content);
        console.log(data)
        return data
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
};

const updateFile = async (flieName , data) => {
    const jsonFilePath = `${FileSystem.documentDirectory}${flieName}`;

    let preData = await readFile(flieName);
    for (let i of Object.keys(data)){
        preData[i] = data[i]
    }
    const updatedContent = JSON.stringify(preData);
    /*
    console.log('update');
    console.log(updatedContent)
    */

    try {
        await FileSystem.writeAsStringAsync(jsonFilePath, updatedContent);
        //console.log('JSON file updated successfully!');
    } catch (error) {
        console.error('Error updating JSON file:', error);
    }
};

const deleteFile = async (flieName) => {
    const jsonFilePath = `${FileSystem.documentDirectory}${flieName}`;

    try {
        await FileSystem.deleteAsync(jsonFilePath);
        console.log('JSON file deleted successfully!');
    } catch (error) {
        console.error('Error deleting JSON file:', error);
    }
};

export {createAndWriteFile , readFile , updateFile , deleteFile}