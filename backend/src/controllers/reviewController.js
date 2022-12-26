const dbContext = require("../../bin/dbContext")

exports.post = (req, res, next) => {
    let query = `--sql
       INSERT Review
       VALUES (NEWID(), '$content', GETDATE(), 'd126859a-f33f-46c1-9cb9-3d55fe61d66b')
    `

    let body = '';

    req.on('data', data => { 
        body += data;
        // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
        if (body.length > 1e6)
            request.connection.destroy();
    });

    req.on('end', () => {
        body = JSON.parse(body);

        query = query.replace('$content', body.Content)//TODO: scape apostrophe

        dbContext.query(query)
            .catch(err => console.log(err))
            .then(data => res.status(201).send('Post works!'));
    });

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
    dbContext.query("SELECT * FROM Review ORDER BY CreatedAt DESC")
        .catch(err => console.log(err))
        .then(data => res.status(200).send(data.recordset));
};