import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class GroupOfArticles extends Component {
  state = {
    articles: [
      {
        votes: 0,
        created_at: '2016-08-18T12:07:52.389Z',
        _id: '5be8440b17324b27109088d3',
        title: 'Running a Node App',
        created_by: '5be8440b17324b27109088d2',
        body:
          'This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.',
        belongs_to: 'coding',
        __v: 0
      },
      {
        votes: 0,
        created_at: '2017-07-20T20:57:53.256Z',
        _id: '5be8440b17324b27109088d4',
        title:
          "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
        created_by: '5be8440b17324b27109088d2',
        body:
          'Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.',
        belongs_to: 'coding',
        __v: 0
      },
      {
        votes: 0,
        created_at: '2017-07-21T17:54:10.346Z',
        _id: '5be8440b17324b27109088d5',
        title: '22 Amazing open source React projects',
        created_by: '5be8440b17324b27109088cf',
        body:
          'This is a collection of open source apps built with React.JS library. In this observation, we compared nearly 800 projects to pick the top 22. (React Native: 11, React: 11). To evaluate the quality, Mybridge AI considered a variety of factors to determine how useful the projects are for programmers. To give you an idea on the quality, the average number of Github stars from the 22 projects was 1,681.',
        belongs_to: 'coding',
        __v: 0
      },
      {
        votes: 0,
        created_at: '2017-12-24T05:38:51.240Z',
        _id: '5be8440b17324b27109088d6',
        title: 'Making sense of Redux',
        created_by: '5be8440b17324b27109088d2',
        body:
          'When I first started learning React, I remember reading lots of articles about the different technologies associated with it. In particular, this one article stood out. It mentions how confusing the ecosystem is, and how developers often feel they have to know ALL of the ecosystem before using React. And as someone who’s used React daily for the past 8 months or so, I can definitely say that I’m still barely scratching the surface in terms of understanding how the entire ecosystem works! But my time spent using React has given me some insight into when and why it might be appropriate to use another technology — Redux (a variant of the Flux architecture).',
        belongs_to: 'coding',
        __v: 0
      },
      {
        votes: 1,
        created_at: '2016-10-24T04:13:02.648Z',
        _id: '5be8440b17324b27109088d7',
        title: 'Please stop worrying about Angular 3',
        created_by: '5be8440b17324b27109088d2',
        body:
          'Another Angular version planned already? Whaaaat? Didn’t Angular 2 just ship? Why Angular 3? What? Why? First off, there is no massive rewrite, and won’t be for Angular 3. Secondly, let me explain the future of Angular 2 and what Angular 3, Angular 4 will mean for you.',
        belongs_to: 'coding',
        __v: 0
      }
    ]
  };
  render() {
    return (
      <div>
        <header>
          <h1>Articles</h1>
        </header>
        {this.state.articles.map((article, index) => (
          <Article key={`article${index}`} articleInfo={article} />
        ))}
      </div>
    );
  }
}

GroupOfArticles.propTypes = {};

export default GroupOfArticles;
