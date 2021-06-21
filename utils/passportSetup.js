const passport = require("passport");
const bcrypt = require("bcrypt");
const { Strategy: LocalStrategy } = require("passport-local");
const { Admin } = require('../model');

module.exports = () => {

    passport.serializeUser((user, done) => {
        return done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await Admin.findOne({where: { id }});
            return done(null, user);
        } catch (e) {
            console.error(e);
            return done(e);
        }
    });

    passport.use(new LocalStrategy(
        {
            usernameField: 'uid',
            passwordField: 'pwd'
        },
        async (uid, pwd, done) => {
            try {
                const admin = await Admin.findOne({where: { uid }});
                if (!admin) {
                    return done(null, false, { reason: '존재하지 않는 관리자입니다.' });
                }
                const result = await bcrypt.compare(pwd, admin.pwd);
                if (result) {
                    return done(null, admin);
                } else {
                    return done(null, false, { reason: '비밀번호가 틀립니다.' });
                }
            } catch (e) {
                console.log(e);
                return done(e);
            }
        }
    ));
};