// ================ SIMPLE CRUD ON FILES ===============


const { error } = require('console');
const fs = require('fs');
const path = require('path');

// Directory path where you want to save the file
const directoryPath = path.join(__dirname, 'TextFiles');

// File path
const filePath = path.join(directoryPath, 'NewFile.txt');



// ==========________ CREATE FILE ________=============


//// Check if the directory exists, create it if it doesn't
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




// ============_________ READ FILE ________=============

// // Read content of the file
// // so now we are reading form a file if, wee don't utf8 in the method's parameter we get buffer that is not readable, 
// // buffer is basically a temporary 
// // both code are below u can try both!

// // Without ut8f
// fs.readFile(filePath, (error, item) => {
//     console.log("CONTENT READ FROM FILE IS: ======== ", item);
// })

// // With Utf8
// fs.readFile(filePath, 'utf-8', (error, item) => {
//     console.log("CONTENT READ FROM FILE IS: ======== ", item);
// })



// ============_________ UPDATE FILE ________=============


// fs.appendFile(filePath, " === THIS IS THE NEW TEXT THAT WAS ADDED ===", (error) => {
//     error ? console.log("ERROR ===== ", error) : console.log("==== File's Text Updated ====")
// })




// ============_________ RENAME FILE ________=============


// fs.rename(filePath, `${directoryPath}/SampleFile.txt`, (error) => {
//     error ? console.log("ERROR ===== ", error) : console.log("==== File's Name is Updated ====")
// })




// ============_________ DELETE FILE ________=============


// fs.unlinkSync(`${directoryPath}/SampleFile.txt`, (error) => {
//     error ? console.log("ERROR ===== ", error) : console.log("==== File Deleted Successfully ====")
// })