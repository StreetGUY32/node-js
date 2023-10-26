// ================ SIMPLE CRUD ON FILES ===============


const fs = require('fs');
const path = require('path');

// Directory path where you want to save the file
const directoryPath = path.join(__dirname, 'TextFiles');

// File path
const filePath = path.join(directoryPath, 'NewFile.txt');

try {
    // Check if the directory exists, create it if it doesn't
    if (!fs.existsSync(directoryPath)) {
        /*
            fs.mkdirSync(directoryPath, { recursive: true }) creates the directory if it doesn't exist. 
            The recursive: true option ensures that parent directories are created as needed.
            Then, you write the content to the file as before.
        */
        fs.mkdirSync(directoryPath, { recursive: true });
    }

    // Write content to the file
    fs.writeFileSync(filePath, 'This is a Sample Text that is being added into a textFile!!!');

    console.log('File created successfully.');
}
catch (error) {
    console.error('Error:', error.message);
}
