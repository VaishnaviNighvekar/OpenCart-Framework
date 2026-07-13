import fs from 'fs';
// fs - is a built-in Node.js module that provides an 
// API for interacting with the file system. 
// It allows you to read, write, and manipulate files and directories.
import {parse} from 'csv-parse/sync';
// This function reads a CSV file and returns its content
//  as an array of objects.

export class DataProvider {
    //use static method to read data from CSV file
    static getTestDataFromJson(filePath: string): any[] {
        let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        //parse the JSON data from the file and return it as an array of objects
        return data;
    }

    static getTestDataFromCsv(filePath: string): any[] {
        // let data = fs.readFileSync(filePath, "utf-8");
        // //parse the CSV data from the file and return it as an array of objects
        // return parse(data, {
        //     columns: true,
        //     skip_empty_lines: true
        // });

        let data:any= parse(fs.readFileSync(filePath),{columns:true,skip_empty_lines:true})
            return data;
            }
        
    }
