import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import * as utils from '../utils/utils';
import '../css/Voter.css';

class Voter extends Component {
  state = {
    voteMod: 0,
    optimisticVote: 0,
  };

  componentDidMount() {
    const { componentInfo } = this.props;
    this.setState({ optimisticVote: componentInfo.votes });
  }

  componentDidUpdate(prevProps) {
    const { componentInfo } = this.props;
    const currentVoteNum = componentInfo.votes;
    const oldVoteNum = prevProps.componentInfo.votes;
    if (currentVoteNum !== oldVoteNum) {
      this.setState({ optimisticVote: currentVoteNum, voteMod: 0 });
    }
  }

  voteHandler = upOrDown => {
    const { type, componentInfo } = this.props;
    this.setState(state => {
      const modifier = upOrDown === 'up' ? 1 : -1;
      return { voteMod: state.voteMod + modifier };
    });
    api
      .changeVotes(`/${type}/${componentInfo._id}`, upOrDown)
      .catch(err => utils.errorHandler(err));
  };

  render() {
    const { type } = this.props;
    const { voteMod, optimisticVote } = this.state;
    const size = type === 'articles' ? 'fa-2x' : 'fa-lg';
    return (
      <div className="votingAlignment">
        <div className="votingBlock">
          {voteMod >= 1 ? (
            <div className="votingButton">
              <i className={`fas fa-arrow-alt-circle-up ${size}  votingDisabledUp`} />
            </div>
          ) : (
            <div
              role="button"
              tabIndex={0}
              className="votingButton votingAble votingHoverUp"
              onClick={() => this.voteHandler('up')}
              onKeyDown={() => this.voteHandler('up')}
            >
              <i className={`fas fa-arrow-alt-circle-up ${size} votingAble votingHoverUp`} />
            </div>
          )}
          {voteMod <= -1 ? (
            <div className="votingButton">
              <i className={`fas fa-arrow-alt-circle-down ${size} votingDisabledDown`} />
            </div>
          ) : (
            <div
              role="button"
              tabIndex={0}
              className="votingButton votingAble votingHoverDown"
              onClick={() => this.voteHandler('down')}
              onKeyDown={() => this.voteHandler('down')}
            >
              <i className={`fas fa-arrow-alt-circle-down ${size} votingAble votingHoverDown`} />
            </div>
          )}
        </div>
        <div className="voteText">
          Votes:
          {optimisticVote + voteMod}
        </div>
      </div>
    );
  }
}

Voter.propTypes = {
  componentInfo: PropTypes.shape({ votes: PropTypes.number.isRequired }).isRequired,
  type: PropTypes.string.isRequired,
};

export default Voter;
