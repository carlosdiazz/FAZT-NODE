const {Strategy, ExtractJwt} = require('passport-jwt');
const {JWT_SECRET} = require('../../../config/config');


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}

const jwtStrategy = new Strategy(options, async (payload, done) => {
    return done(null, payload);
});

module.exports = jwtStrategy