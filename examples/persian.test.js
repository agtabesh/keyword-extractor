const { PersianTokenizer, KeywordExtractor } = require('../src')

const documents = [
  'کارت‌های حافظه CFexpress در سه اندازه مختلف عرضه می‌شوند',
  'فیسبوک به‌خاطر تغییر استراتژی، مدیران ارشد خود را از دست می‌دهد',
  'به کارگیری برخورددهنده‌ها برای حل مسئله انرژی تاریک',
  'خودروهای نیمه خودران سری Kei میتسوبیشی و نیسان معرفی شدند',
  'شرکت پالمر لاکی برنده قرارداد فناوری هوش مصنوعی پهپاد پنتاگون شد'
]

const tokenizer = new PersianTokenizer()
const keywordExtractor = new KeywordExtractor()
keywordExtractor.setTokenizer(tokenizer)

documents.forEach((text, i) => {
  keywordExtractor.addDocument(i, text)
})

const randomDocument = documents[Math.floor(Math.random() * documents.length)]
const keywords = keywordExtractor.extractKeywords(randomDocument, {
  sortByScore: true,
  limit: 10
})

console.log(keywords)
