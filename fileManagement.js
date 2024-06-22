import * as FileSystem from 'expo-file-system';


const createAndWriteFile = async (flieName) => {

    const jsonFilePath = `${FileSystem.documentDirectory}${flieName}`;

    const data = { message: 'Hello, this is a JSON file!' };
    const content = JSON.stringify(data);

    try {
        await FileSystem.writeAsStringAsync(jsonFilePath, content);
        console.log('JSON file written successfully!');
    } catch (error) {
        console.error('Error writing JSON file:', error);
    }
};

const readFile = async (flieName) => {

    const jsonFilePath = `${FileSystem.documentDirectory}${flieName}`;

    try {
        const content = await FileSystem.readAsStringAsync(jsonFilePath);
        const data = JSON.parse(content);
        console.log('JSON file content:', data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
};

const updateFile = async (flieName) => {
    const jsonFilePath = `${FileSystem.documentDirectory}${flieName}`;

    const updatedData = { message: 'Updated content!' };
    const updatedContent = JSON.stringify(updatedData);

    try {
        await FileSystem.writeAsStringAsync(jsonFilePath, updatedContent);
        console.log('JSON file updated successfully!');
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