

const login = (req,res) => {
    const {name} = req.body

    if(name) {
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(404).send('please provide credentials')
}

module.exports = {login}