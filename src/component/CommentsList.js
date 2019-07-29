import React, { Component } from 'react';
import axios from 'axios';

import Comment from './Comment';

const ENDPOINT = 'http://localhost:8000/api/movies';

export default class CommentsList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      comment: {
        text: ''
      },
      comments: [],
      pagination: {}
    }
  }

  async componentDidMount () {
    const { data } = await axios.get(`${ENDPOINT}/${this.props.movieId}/comment`);

    this.setState({
      comments: data.data,
      pagination: data
    })
  }

  handleSubmitComment = async event => {
    event.preventDefault();

    const { data } = await axios.post(
      `${ENDPOINT}/${this.props.movieId}/comment`,
      this.state.comment
    );

    if(!this.isLastPage())
      this.state.comments.pop()

    this.setState({
      comment: { text: '' },
      comments: [
        data,
        ...this.state.comments
      ]
    });
  }

  handleLoadMore = async () => {
    const { data } = await axios.get(this.state.pagination.next_page_url);

    this.setState({
      pagination: data,
      comments: [
        ...this.state.comments,
        ...data.data
      ]
    })
  }

  isLastPage = () => this.state.pagination.next_page_url ? false : true;

  renderComments = () => this.state.comments.map(comment => <Comment key={ comment.id } comment={ comment } />)
  
  render () {
    return (
      <div>
        <div className="container p-4">
          <form onSubmit={ this.handleSubmitComment }>
            <div>
              <label>Leave a comment:</label>
            </div>
            <textarea
              className="form-control"
              onChange={ event => this.setState({ comment: { text: event.target.value } })}
              value={ this.state.comment.text }
            ></textarea>
            <div className="d-flex justify-content-end p-2">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        <div className="container p-4">
          <h3 className="mb-3 font-weight-bold">Comments:</h3>
          { this.renderComments() }
          <button
            className="btn btn-info"
            onClick={ this.handleLoadMore }
            hidden={ this.isLastPage() }
          >
            Load more
          </button>
        </div>
      </div>
    )
  }
}