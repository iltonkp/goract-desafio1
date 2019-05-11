import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './header/Header';
import Post from './post/Post';

import './style.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        nome: 'Ilton Karly Prazeres dos Santos',
        avatar:
          'https://avatars2.githubusercontent.com/u/22628987?s=400&u=83ba6e10e2139eb97bd3c1cdd2c5ef326e956ab5&v=4',
        hora: 'há 30 min',
        conteudo: 'ajshdjashdahsdahsdçakshdçakhsdahsdahsdjashdakjsdhlajsdhalksjdhalksjdasndknasdna',
      },

      {
        id: 2,
        nome: 'Jessica Vanessa Gomes de Melo',
        avatar: 'https://s3.portalt5.com.br/imagens/mayte-piragibe.jpg?mtime=20181024221256',
        hora: 'há 5 min',
        conteudo:
          'eqweqgwhegqwjhegqjwhegqjwhgeqjhgweqkjhgweqjhwgeqjhwgeqkjhwgeqkhwgeqkjwhgeqhwgeqkhwgeqhgweqhgweqk',
      },

      {
        id: 3,
        nome: 'Ayla Maria ',
        avatar:
          'https://statig0.akamaized.net/bancodeimagens/bg/su/2w/bgsu2wguq9z7xj113ybtgj4hk.jpg',
        hora: 'há 1 dia',
        conteudo:
          'vnvxcnvxbagdjagsdkajsgdajsgdajsgdaksjdgapsjdgasjgdasjdgpasjgdasjgdasjdgoajsgdajgdajsgdoajsgdoasjgd',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="main-content">
        <Header>RocketBook</Header>
        <div className="content">
          {posts && posts.map(post => <Post key={post.id} object={post} />)}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
