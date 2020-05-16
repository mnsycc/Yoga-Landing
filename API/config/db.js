// конфигурация базы данных
module.exports = {
  db: {
    uri: 'mongodb://localhost:27017/Yoga',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
