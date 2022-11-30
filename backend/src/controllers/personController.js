const dbContext = require("../../bin/dbContext")

exports.post = (req, res, next) => {
    res.status(201).send('Post works!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Put works! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Delete works! ${id}`);
};
exports.get = (req, res, next) => {
    dbContext.query("SELECT * FROM TipoConsulta")
    .catch(err => console.log(err))
    .then(data => res.status(200).send(data.recordset));
};;