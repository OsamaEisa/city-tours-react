import React, { Component } from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import './Tours.scss'
import { connect } from 'react-redux'


class Tours extends Component {
  
  state = {
    posts: []
  }
/* 
  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
    .then(res => {
      console.log(res.data.data)
    this.setState({
      posts: res.data.data
    })
  })
} */
  render() {

    console.log(this.props);

    const {posts} = this.props;
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <div key={post.id} className='posts'>
            <Link to={'/' + post.id}><h1>{post.title}</h1></Link>
            <p>{post.body}</p>
          </div>
        )
      })
    ) : (
      <div className="no-users">No Posts...</div>
    )
    return (
      <div>
        {postsList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Tours)