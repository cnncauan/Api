const users = [
    {id: 1, firstName: 'john', lastName: 'Doe', email: 'john.doe@email.com'},
    {id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@email.com'},
    {id: 3, firstName: 'steve', lastName: 'vai', email: 'steve.vai@email.com'},
]

exports.create = (req, res, next) => {
    res.json(req.body)
}

exports.listAll = (req, res, next) => {
    res.json(users)
}

exports.listOne = (req, res, next) => {
    res.json(req.params)
}

exports.update = (req, res, next) => {
    res.json(req.query)
}

exports.delete = (req, res, next) => {
    res.json({msg: 'exclui um usuário do db'})
}