import React from 'react';
import Octicon, { Thumbsup, Thumbsdown } from '@primer/octicons-react';
import { connect } from 'react-redux';

import { newVote, removeVote, updateVote } from '../store/actions/MovieActions';

const VoteButtons = ({ movie, newVote, removeVote, updateVote }) => {

  const like = {
    type: 'like',
    votableId: movie.id
  }

  const dislike = {
    type: 'dislike',
    votableId: movie.id
  }

  const handleLike = () => {
    if (movie.user_has_liked) {
      removeVote(like)
    } else if (movie.user_has_disliked) {
      updateVote(like)
    } else {
      newVote(like)
    }
  }

  const handleDislike = () => {
    if (movie.user_has_disliked) {
      removeVote(dislike)
    } else if (movie.user_has_liked) {
      updateVote(dislike)
    } else {
      newVote(dislike)
    }
  }

  return (
    <span>
      <button
        className="btn btn-light"
        onClick={ handleLike }
      >
        <span>{ movie.likes_count } <Octicon icon={ Thumbsup } /></span>
      </button>
      <button
        className="btn btn-light"
        onClick={ handleDislike }
      >
        <span>{ movie.dislikes_count } <Octicon icon={ Thumbsdown } /></span>
      </button>
    </span>
  )
}

const mapDispatchToProps = {
  newVote,
  removeVote,
  updateVote
}

export default connect(null, mapDispatchToProps)(VoteButtons);