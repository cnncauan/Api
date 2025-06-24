exports.create = (req, res, next) => {
    res.json({msg: 'cria um novo usuário'})
}

exports.listAll = (req, res, next) => {
    res.json({msg: 'lista todos os usuários'})
}

exports.listOne = (req, res, next) => {
    res.json({msg: 'exibi dados de um usuário específico'})
}

exports.update = (req, res, next) => {
    res.json({msg: 'edita os dados de um usuário'})
}

exports.delete = (req, res, next) => {
    res.json({msg: 'exclui um usuário do db'})
}