import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import { Link } from '@reach/router';
import '../css/Voter.css';
import * as utils from '../utils/utils';

class Voter extends Component {
  state = {
    voteMod: 0,
    optimisticVote: this.props.componentInfo.votes
  };
  render() {
    const size = this.props.type === 'articles' ? 'fa-2x' : 'fa-lg';
    return (
      <div className="votingAlignment">
        <div className="votingBlock">
          {this.state.voteMod >= 1 ? (
            <i
              className={`fas fa-arrow-alt-circle-up ${size}  votingDisabledUp`}
            />
          ) : (
            <Link to="" onClick={event => this.voteHandler('up')}>
              <i
                className={`fas fa-arrow-alt-circle-up ${size} votingAble votingHoverUp`}
              />
            </Link>
          )}
          {this.state.voteMod <= -1 ? (
            <i
              className={`fas fa-arrow-alt-circle-down ${size} votingDisabledDown`}
            />
          ) : (
            <Link to="" onClick={event => this.voteHandler('down')}>
              <i
                className={`fas fa-arrow-alt-circle-down ${size} votingAble votingHoverDown`}
              />
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
      .catch(err => utils.errorHandler(err));
  };
  componentDidMount() {
    const votes = this.props.componentInfo.votes;
    this.setState({ optimisticVote: votes });
  }
  componentDidUpdate(prevProps, prevState) {
    const currentVoteNum = this.props.componentInfo.votes;
    const oldVoteNum = prevProps.componentInfo.votes;
    if (currentVoteNum !== oldVoteNum) {
      //there has been a change in props
      this.setState({ optimisticVote: currentVoteNum, voteMod: 0 });
    }
  }
}

Voter.propTypes = {
  componentInfo: PropTypes.object,
  type: PropTypes.string
};

export default Voter;
