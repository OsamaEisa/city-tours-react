
const initState = {
  posts: [
    {id: '1', title: 'this is title 1', body: 'this is the post 1 body'},
    {id: '2', title: 'this is title 2', body: 'this is the post 2 body'},
    {id: '3', title: 'this is title 3', body: 'this is the post 3 body'}
  ],

  tours: [
    {
      id: 1,
      city: "new york",
      img: "./imgs/newyork.jpeg",
      name: "new york bridge tour",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
    },
    {
      id: 2,
      city: "paris",
      img: "./imgs/paris.jpeg",
      name: "paris lights tour",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
    },
    {
      id: 3,
      city: "london",
      img: "./imgs/london.jpeg",
      name: "london royal palace tour",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
    },
    {
      id: 4,
      city: "tokyo",
      img: "./imgs/tokyo.jpeg",
      name: "tokyo sushi tour",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,repellendus!"
    }
  ]
}

const rootReducer = (state = initState, action) => {

  if(action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => post.id !== action.id)
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer