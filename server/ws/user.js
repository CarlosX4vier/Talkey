const credentials = require('../credentials.json')

 function cadastro(email, name, lastName, password) {
    con = mysql.createConnection({
        host: credentials.mysql.host,
        user: credentials.mysql.user,
        password: credentials.mysql.password
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        con.query(`INSERT INTO user VALUES (${email}, ${name}, ${lastName}, ${password})`);

    });

}

module.exports = {cadastro}