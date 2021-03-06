import React, { Component } from 'react';
import axios from 'axios';

class WatchList extends Component {
    constructor(props){
        super(props)
        this.state = {
            watchList: ''
        }
    }


    componentDidMount(){
        axios.get('http://localhost:4000/api/watchList').then(response => {
            console.log(response.data)
            this.setState({
                watchList: response.data
            })
        })
    }

        render(){

            var watchList = this.state.watchList ? this.state.watchList.map((movie, i) => {
                return (
                    <ul className='fromRight' key={i}>
                        <li>{movie.title}</li>
                        <button onClick={() => this.props.deleted(movie.title)}>Delete</button>
                    </ul>
                )

            }): 'watch list empty'

            return(
                <div className='watchList movie-displayer'>
                    <h2>My Watch List:</h2>
                    {watchList}
                </div>
            )
        }
}

export default WatchList