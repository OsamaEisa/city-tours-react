import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from '../../Actions/PostAction'

class Post extends Component {
  
  handleDelete = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/tours');
  }
  
  /* 
  state = {
    post: null
  } */
/* 
  componentDidMount() {
    let id = this.props.match.params.post_id; 
    axios.get('https://reqres.in/api/users/' + id)
    .then(res => {
      this.setState({
        post: res.data.data
      })
    })
  } */
  render() {

    console.log(this.props);

    const post = this.props.post ? (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p>
        <button onClick={this.handleDelete} >Delete Post</button>
      </div>
    ) : (
      <div>Loading post....</div>
    )

    return (
      <div>
        { post }
      </div>
    ) 
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch( deletePost(id)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)