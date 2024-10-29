import NewsModel from '../db/Models/News.js';
import TransactionModel from '../db/Models/Transaction.js';
import newsData from '../data/news.json';


export default async function updateNewsChannel() {
  try {
    const totalNews = newsData.length | 1;
    const totaltransactions = await TransactionModel.countDocuments();
    const lastNews = await NewsModel.findOne().sort({ _id: -1 });
    const newsPhase = Math.floor(totaltransactions / 100) | 1;

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





