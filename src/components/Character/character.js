import React from "react";
import './character.css';
import styled from 'styled-components';

const Button = styled.button`
  color: #347FC4;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #347FC4;
  border-radius: 3px;
`;

export default class Character extends React.Component {
  state = {
    loading: true,
    character: [],
    expanded: null
  };

  async componentDidMount() {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ character: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div><div class="loader"></div></div>;
    }

    if (!this.state.character.length) {
      return <div>No characters found.</div>;
    }

    return (
      <div class="container">
      <center><h1 class="headerText">Rick&Morty Character List</h1></center>
      {this.state.character.map((character, i) => (
        <div class="row">
          <div class="col-12">
            <ul class="list-group">
              <a href="#" onClick={() => this.setState({ expanded: i })} class="list-group-item list-group-item-action">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <h5 class="mb-1">{character.name}</h5>
                  <div class="image-parent">
                    <img style={{width: "120px"}} src={character.image} alt="Character Image"></img>
                  </div>
              </li>
              </a>
            </ul>
            </div>
            {this.state.expanded === i && (
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <ul class="list-group">
                      <li class="list-group-item d-flex justify-content-between align-items-center">
                        Name: {character.name}<br></br>
                        Status: {character.status}<br></br>
                        Species: {character.species}<br></br>
                        Type: {character.type}<br></br>
                        Gender: {character.gender}<br></br>
                        Origin: {character.origin.name}
                        <Button onClick={() => this.setState({ expanded: null })}>Close</Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
      </div>
      ))}
      </div>
    );
  }
}
