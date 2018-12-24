import { compareDesc } from 'date-fns';
import { navigate } from '@reach/router';

export const capitalizer = word => word[0].toUpperCase() + word.slice(1);

export const filterer = (articles, searchbox) => (searchbox
  ? articles.filter(article => {
    const regex = new RegExp(searchbox, 'gi');
    return regex.test(article.body) || regex.test(article.title);
  })
  : articles);

export const sortedArticles = (articles, typeOfSort) => {
  const sortedArts = articles.sort((a, b) => {
    if (typeOfSort === 'created_at') {
      return compareDesc(a.created_at, b.created_at);
    }
    const votesA = parseInt(a.votes, 10);
    const votesB = parseInt(b.votes, 10);
    return votesA < votesB ? 1 : votesA > votesB ? -1 : 0;
  });
  return sortedArts;
};

export const errorHandler = err => {
  const errorMsg = err.response.data.message;
  const errorStatus = err.response.status;
  navigate('/error', {
    replace: true,
    state: { errorMsg, errorStatus },
  });
};
