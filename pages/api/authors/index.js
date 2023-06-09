/*
TODO: create an API endpoint for authors/index.js
that sends back all authors in the dataset

create an API endpoint for authors/[name].js that sends back info on a particular author by naem

you choose how you want the data to be structured
*/

import path from 'path'
import { promises as fs } from 'fs'
import { cwd } from 'process'

export default async function handler(req, res) {
    // get the path to the json directory
    const jsonDirectory = path.join(process.cwd(), 'json')
    // read in the contents from our json file
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8')
    const data = JSON.parse(fileContents)
    // send all of the file's contents as JSON to the client
    res.status(200).json(data)}
