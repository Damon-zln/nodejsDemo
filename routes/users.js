var express = require('express');
var router = express.Router();

var db = require('../config/db');

/* 列表显示 */
router.get('/', function(req, res, next) {
	db.query('select * from user', function(err, rows){
		if(err){
			res.render('users', { datas: []});
		} else {
			res.render('users', { datas: rows});
		}
	});
});

/* 添加用户 */
router.get('/add', function(req, res, next) {
	res.render('add');
});
router.post('/add', function(req, res, next) {
	var name = req.body.name;
	var age = req.body.age;
	var department = req.body.department;
	var phone = req.body.phone;
	db.query("insert into user(name,age,department,phone) values('"+name+"','"+age+"','"+department+"','"+phone+"')", function(err, rows) {
		if(err){
			res.send('新增失败'+err);
		} else {
			res.redirect('/users');
		}
	});
});

/* 修改信息 */
router.get('/toUpdate/:id', function(req, res, next) {
	var id = req.params.id;
	db.query('select * from user where id = '+id, function(err, rows) {
		if(err){
			res.send('修改页面跳转失败');
		} else {
			res.render('update', {datas: rows});
		}
	});
});

router.post('/update', function(req, res, next) {
	var id = req.body.id;
	var age = req.body.age;
	var department = req.body.department;
	var phone = req.body.phone;
	db.query("update user set age = '"+age+"',department = '"+department+"',phone = '"+phone+"' where id = "+id, function(err, rows) {
		if(err){
			res.send('修改失败'+err);
		} else {
			res.redirect('/users');
		}
	});
});

/* 删除 */
router.get('/del/:id', function(req, res, next) {
	var id = req.params.id;
	db.query('delete from user where id = '+id, function(err, rows) {
		if(err){
			res.send('删除失败'+err);
		} else {
			res.redirect('/users');
		}
	});
});

/* 查询 */
router.post('/search', function(req, res, next) {
	var string = req.body.search_string;
	var sql = "select * from user where name like '%"+string+"%' or age like '%"+string+"%' or department like '%"+string+"%' or phone like '%"+string+"%'";
	db.query(sql, function(err, rows) {
		if(err){
			res.send('查询失败'+err);
		} else {
			res.render('users', {datas: rows, search_string: string});
		}
	});
});

module.exports = router;
