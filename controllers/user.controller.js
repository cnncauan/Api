const users = [
    {id: 1, firstName: 'john', lastName: 'Doe', email: 'john.doe@email.com'},
    {id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@email.com'},
    {id: 3, firstName: 'steve', lastName: 'vai', email: 'steve.vai@email.com'},
]

exports.create = (req, res, next) => {
    try {
        res.json(req.body)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

exports.listAll = (req, res, next) => {
    try {
        res.json(users)
    } catch (error) {    
        console.log(error)
        return res.status(500)
    }
}

exports.listOne = (req, res, next) => {
    try {
        res.json(req.params)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

exports.update = (req, res, next) => {
    try {
        res.json(req.query)
    } catch(error) {
        console.log(error)
        return res.status(500)
    }
}

exports.delete = (req, res, next) => {
    try {
        res.json({msg: 'exclui um usuário do db'})
    } catch(error) {
        console.log(error)
        return res.status(500)
    }
}