import React, { Component } from 'react';
import {Header} from "./components/header";
import {SearchBar} from "./components/search-bar";
import {List} from "./components/list";

const APP_ID = '6d8762c4'; 
const APP_KEY = 'ded0f48f5bf62332e488f4731ad84dfb';
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=25`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchTerm:"cake",
      recipes:[],
      error:"",
      loading:false
    }   
  }

  componentDidMount() {this.recipeSearch();}

  updateSearchTerm = e => this.setState({searchTerm:e.target.value});

  recipeSearch = e => {
    this.setState({error:""});
    this.setState({loading:true});

    fetch(`${BASE_ENDPOINT}&q=${this.state.searchTerm}`)
    .then(response => {
      if(!response.ok) {
        this.setState({loading:false});
        this.setState({error:"input"})
      } else {          
        this.setState({loading:false});
        return response.json();
      }
    })
    .then(data => {
      this.setState( {recipes:data.hits.map(hit => hit.recipe)} );
      if (this.state.recipes.length === 0) {this.setState({error:"input"})}
      console.log(this.state.recipes);
    })
    .catch(error => {
      this.setState({error:"network"});
      this.setState({loading:false});
    });
  }

  render() {
    return (
      <div className="App">
        <Header>Recipe Search</Header>
        <SearchBar
          inputValue={this.state.searchTerm}
          onInputChange={this.updateSearchTerm}
          initializeSearch={this.recipeSearch}
        />
        <List 
          recipes={this.state.recipes} 
          error={this.state.error}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
