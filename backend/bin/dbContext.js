const database = 'AgendaPaciente';
const server = 'localhost';

module.exports = {
    query: (query) => {
        return new Promise((resolve, reject) => {
            (new (require("mssql/msnodesqlv8")).ConnectionPool({
                database: database,
                server: server,
                driver: "msnodesqlv8",
                options: {
                    trustedConnection: true
                }
            })).connect().then(sql => {
                sql.query(query).then(resp => {
                    resolve(resp)
                }).catch(err => {
                    reject(err)
                });
            }).catch(err => {
                reject(err)
            });
        })
    }
};