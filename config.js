var config = {};

config.env = process.env.NODE_ENV || 'dev';
config.port = process.env.PORT || '1337';
config.host = process.env.HOST || '0.0.0.0';
config.base = 'http://' + config.host + ':' + config.port ;

module.exports = config;
