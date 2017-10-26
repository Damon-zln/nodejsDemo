var mysql = require('mysql');
var pool = mysql.createPool({
	host: '10.201.11.218',
	port: '3306',
	database: 'dazhan_ng',
	user: 'seals',
	password: 'seals'
});

function query(sql, callback){
	pool.getConnection(function(err, connection){
		connection.query(sql, function(err, rows){
			callback(err, rows);
			connection.release();
		});
	});
}

exports.query = query;