import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import * as api from '../api';
import * as utils from '../utils/utils';
import '../css/Voter.css';

class Voter extends Component {
  state = {
    voteMod: 0,
    optimisticVote: this.props.componentInfo.votes,
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
      // there has been a change in props
      /* eslint react/no-did-update-set-state: 0 */
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
            <i className={`fas fa-arrow-alt-circle-up ${size}  votingDisabledUp`} />
          ) : (
            <button type="button" onClick={event => this.voteHandler('up')}>
              <i className={`fas fa-arrow-alt-circle-up ${size} votingAble votingHoverUp`} />
            </button>
          )}
          {voteMod <= -1 ? (
            <i className={`fas fa-arrow-alt-circle-down ${size} votingDisabledDown`} />
          ) : (
            <button type="button" onClick={event => this.voteHandler('down')}>
              <i className={`fas fa-arrow-alt-circle-down ${size} votingAble votingHoverDown`} />
            </button>
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
