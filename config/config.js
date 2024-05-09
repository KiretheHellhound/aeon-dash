let config = {
    port: process.env.PORT || 5432,
    db: {
        uri: process.env.DATABASE_URL || 'postgres://udqe3kfp1jh822:p40af568c59660148be4187d7ba0826989410a5ced025013637b9736019ea3acf@ce1r1ldap2qd4b.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dd2g54jpq3dr6t',
        options: {
            logging: false
        }
    },
    session: {
        keys: process.env.SESSION_KEYS || ['dd2g54jpq3dr6t', 'udqe3kfp1jh822']
    }
};

module.exports = config;
