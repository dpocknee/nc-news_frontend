import { compareDesc } from 'date-fns';
import { navigate } from '@reach/router';

export const capitalizer = word => word[0].toUpperCase() + word.slice(1);

export const filterer = (articles, searchbox) => (searchbox
  ? articles.filter((article) => {
    const regex = new RegExp(searchbox, 'gi');
    return regex.test(article.body) || regex.test(article.title);
  })
  : articles);

export const sortedArticles = (articles, typeOfSort) => {
  const sortedArts = articles.sort((a, b) => {
    if (typeOfSort === 'created_at') {
      return compareDesc(a.created_at, b.created_at);
    }
    const votesA = parseInt(a.votes);
    const votesB = parseInt(b.votes);
    return votesA < votesB ? 1 : votesA > votesB ? -1 : 0;
  });
  return sortedArts;
};

export const errorHandler = (err) => {
  console.log('errorHadler', err);
  const errorMsg = err.response.data.message;
  const errorStatus = err.response.status;
  navigate('/error', {
    replace: true,
    state: { errorMsg, errorStatus },
  });
};

/* eslint consistent-return: 0 */
export const imageChecker = (imageSrc, cb) => {
  const img = new Image();
  img.src = imageSrc;
  if (img.onload) return true;
};
