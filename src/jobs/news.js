const NewsModel = require('../db/Models/News.js');
const TransactionModel = require('../db/Models/Transaction.js');
const newsData = require('../data/news.json');


module.exports = async function updateNewsChannel() {
  try {
    const totalNews = newsData.length | 1;
    const totaltransactions = await TransactionModel.countDocuments();
    const lastNews = await NewsModel.findOne().sort({ _id: -1 });
    const newsPhase = Math.floor(totaltransactions / 50) | 1;

    if (newsPhase > totalNews) {
      return;
    };

    if (lastNews?.title === newsData[newsPhase - 1].title) {
      return;
    }

    if (newsPhase < newsData.length) {
      await NewsModel.create(newsData[newsPhase]);
    }

    return;
  } catch (error) {
    console.error("Error fetching or saving transactions:", error);
  }
}





