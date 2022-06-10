import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import Cardlist from "./components/card-list/Card-list";
import SearchBox from "./components/search-box/SearchBox";

export default class App extends Component {
    state = {
        search: "",
        monsters: [],
    };
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            this.setState({ monsters: response.data });
        });
    }
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ search: value });
    };
    render() {
        const { monsters, search } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(search.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="Find Monster"
                    handleChange={this.handleChange}
                />
                <Cardlist monsters={filteredMonsters} />
            </div>
        );
    }
}
