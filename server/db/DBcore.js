var mysql = require('mysql');
var TEST_DATABASE = 'yiwen';

var client = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'yiwen'
});
client.connect();
client.query("use " + TEST_DATABASE);

var userGetSql = 'SELECT * FROM qa';
client.query(userGetSql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log(result[0],result.length )
    var QaAddSql = 'INSERT INTO qa(question,answer,orders) VALUES(?,?,?)';
    var AqAddSql_Params = ['第一个问题',JSON.stringify(['第一个答案','第二个答案','第三个答案']),'3'];
    client.query(QaAddSql, AqAddSql_Params, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        console.log(result)
    });
});
