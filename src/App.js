import React, {Component} from 'react';

import Search from './components/Search'
import Data from './components/Data'

export const appTitle = "Awesome Weather App";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            search: "Paris",
            cities: []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="display-2">{appTitle}</div>
                <Search
                    city={this.state.search}
                    onChange={
                        city => this.setState({search: city})
                    }
                    onSearch={
                        () => {
                            console.log(this.state.search);
                            this.setState({ cities: [...this.state.cities, this.state.search]});
                        }
                    }/>
                <Data cities={this.state.cities}/>
            </div>
        )
    }
}

export default App;