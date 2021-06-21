const _session = require('express-session');

/**
 * config.js 파일은 서버에 대한 정보를 모아둔 설정 파일입니다.
 * 
 * @constant HOST Hostname
 * @constant PORT Port 번호
 * @constant SESSION Session 정보
 */

const HOST = "localhost";

const PORT = 3000;

const SESSION = _session({
    secret: 'Secret Key',
    resave: false,
    saveUninitialized: true
 });

module.exports = { HOST, PORT, SESSION };