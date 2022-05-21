const { readFile, writeFile } = require('fs').promises
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./content/first.txt')
        const second = await readFile('./content/second.txt')

        await writeFile('./content/result-writefile-text.txt',
        `This is Awesome : ${first} ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }

}

start()

