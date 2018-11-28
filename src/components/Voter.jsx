import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import { Link } from '@reach/router';
import '../css/Voter.css';
import { isEqual } from 'lodash';

class Voter extends Component {
  state = {
    voteMod: 0,
    optimisticVote: this.props.componentInfo.votes
  };
  render() {
    const size = this.props.type === 'articles' ? 'fa-2x' : 'fa-2x';
    return (
      <div className="votingAlignment">
        <div className="votingBlock">
          {this.state.voteMod >= 1 ? (
            <i
              className={`fas fa-arrow-alt-circle-up ${size} votingDisabledUp`}
            />
          ) : (
            <Link to="" onClick={event => this.voteHandler('up')}>
              <i className={`fas fa-arrow-alt-circle-up ${size}votingAble`} />
            </Link>
          )}
          {this.state.voteMod <= -1 ? (
            <i
              className={`fas fa-arrow-alt-circle-down ${size} votingDisabledDown`}
            />
          ) : (
            <Link to="" onClick={event => this.voteHandler('down')}>
              <i className={`fas fa-arrow-alt-circle-down ${size}votingAble`} />
            </Link>
          )}
        </div>
        <div className="voteText">
          Votes: {this.state.optimisticVote + this.state.voteMod}
        </div>
      </div>
    );
  }
  voteHandler = upOrDown => {
    this.setState(state => {
      const modifier = upOrDown === 'up' ? 1 : -1;
      return { voteMod: state.voteMod + modifier };
    });
    api
      .changeVotes(
        `/${this.props.type}/${this.props.componentInfo._id}`,
        upOrDown
      )
      .catch(console.log);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.optimisticVote !== this.props.componentInfo.votes) {
      if (prevState.voteMod !== 0 && !isEqual(prevProps, this.props)) {
        this.setState(state => {
          return {
            optimisticVote: state.voteMod + state.optimisticVote
          };
        });
      }
    }
  }
}

Voter.propTypes = {};

export default Voter;
