const configs = {
    PORT: process.env.PORT || 9901,
    ENV: process.env.NODE_ENV || 'development',
    MONGOURL: process.env.MONGOURL || 'mongodb://localhost:27017/ayoken_local',
};

module.exports = configs;