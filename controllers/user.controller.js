

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
        const id = req.params.id

        res.json(id)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

exports.update = (req, res, next) => {
    try {
        const id = req.params.id

        res.json(id)
    } catch(error) {
        console.log(error)
        return res.status(500)
    }
}

exports.delete = (req, res, next) => {
    try {
        const id = req.params.id

        res.json(id)
    } catch(error) {
        console.log(error)
        return res.status(500)
    }
}