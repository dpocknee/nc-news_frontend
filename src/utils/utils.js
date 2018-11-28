import { compareDesc } from 'date-fns';

export const capitalizer = word => {
  return word[0].toUpperCase() + word.slice(1);
};

export const filterer = (articles, searchbox) => {
  return searchbox
    ? articles.filter(article => {
        const regex = new RegExp(searchbox, 'gi');
        return regex.test(article.body);
      })
    : articles;
};

export const sortedArticles = (articles, typeOfSort) => {
  const sortedArts = articles.sort((a, b) => {
    if (typeOfSort === 'created_at') {
      return compareDesc(a.created_at, b.created_at);
    } else {
      const votesA = parseInt(a.votes);
      const votesB = parseInt(b.votes);
      return votesA < votesB ? 1 : votesA > votesB ? -1 : 0;
    }
  });
  return sortedArts;
};
