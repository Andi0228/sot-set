import profileReducer, { addPostActionCreator,} from "./profile-reducer";


it('new post should be added', () => {
  // start data
  let action = addPostActionCreator("blabla")
  let state = {
    posts: [
      { id: 1, messAge: "Hi тебя зовут гугулрл", likeCounst: 52 },
      { id: 2, messAge: "It's my first post", likeCounst: 32 },
      { id: 3, messAge: "Это суслик", likeCounst: 22 },
      { id: 4, messAge: "Глупый Эдгар", likeCounst: 32312 } 
  ]
  }
  // action
  let newState = profileReducer(state,action);

  //expectation
 expect( newState.posts.length).toBe(5)
});


 