import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';

class GroupOfComments extends Component {
  state = {
    comments: [
      {
        _id: '5be8440b17324b2710908917',
        votes: 4,
        body:
          'Explicabo perspiciatis voluptatem sunt tenetur maxime aut. Optio totam modi. Perspiciatis et quia.',
        belongs_to: '5be8440b17324b27109088d3',
        created_by: '5be8440b17324b27109088d0',
        created_at: '2016-05-13T06:34:27.403Z',
        __v: 0
      },
      {
        _id: '5be8440b17324b2710908922',
        votes: 4,
        body:
          'Error est qui id corrupti et quod enim accusantium minus. Deleniti quae ea magni officiis et qui suscipit non.',
        belongs_to: '5be8440b17324b27109088d3',
        created_by: '5be8440b17324b27109088ce',
        created_at: '2017-11-20T08:58:48.322Z',
        __v: 0
      },
      {
        _id: '5be8440b17324b271090892a',
        votes: 10,
        body:
          'Consectetur deleniti sed. Omnis et dolore omnis aspernatur. Et porro accusantium. Tempora ullam voluptatum et rerum.',
        belongs_to: '5be8440b17324b27109088d3',
        created_by: '5be8440b17324b27109088d2',
        created_at: '2017-07-31T08:14:13.076Z',
        __v: 0
      },
      {
        _id: '5be8440b17324b271090894b',
        votes: 0,
        body:
          'Assumenda sit est blanditiis asperiores est minima. Placeat sequi tenetur autem consequatur soluta molestiae. Incidunt neque labore et dolorem et vel possimus nemo quidem.',
        belongs_to: '5be8440b17324b27109088d3',
        created_by: '5be8440b17324b27109088cf',
        created_at: '2016-06-18T08:52:08.680Z',
        __v: 0
      },
      {
        _id: '5be8440b17324b271090894c',
        votes: 14,
        body:
          'Et explicabo dignissimos officia dolore rerum aliquam corrupti. Culpa corporis earum et earum officia a est atque at. Quidem quo recusandae delectus autem possimus blanditiis optio. Sed culpa culpa. Exercitationem nemo aspernatur alias ut qui.',
        belongs_to: '5be8440b17324b27109088d3',
        created_by: '5be8440b17324b27109088cd',
        created_at: '2016-09-11T02:59:15.171Z',
        __v: 0
      },
      {
        _id: '5be8440b17324b271090894f',
        votes: 2,
        body:
          'Esse et expedita harum non. Voluptatibus commodi voluptatem. Minima velit suscipit numquam ea. Id vitae debitis aut incidunt odio quo quam possimus ipsum.',
        belongs_to: '5be8440b17324b27109088d3',
        created_by: '5be8440b17324b27109088d0',
        created_at: '2016-09-05T20:08:14.229Z',
        __v: 0
      },
      {
        _id: '5be8440b17324b2710908a14',
        votes: 19,
        body:
          'Ut accusamus enim vel voluptate quae temporibus labore neque a. Reprehenderit iste est eos velit fugit vel quod velit.',
        belongs_to: '5be8440b17324b27109088d3',
        created_by: '5be8440b17324b27109088d0',
        created_at: '2017-07-05T12:15:40.563Z',
        __v: 0
      }
    ]
  };
  render() {
    // this.props.commentId should be an object containing the object parameters to match in the list of comments.
    return (
      <section>
        {this.state.comments.map((comment, index) => (
          <Comment key={`comment${index}`} commentInfo={comment} />
        ))}
      </section>
    );
  }
}

GroupOfComments.propTypes = {};

export default GroupOfComments;
