import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
        this.handleTermchange = this.handleTermchange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    getSortByClass (sortByOption) {
        return this.state.sortBy === sortByOption ? 'active' : '';
    }

    handleSortByChange (sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
        this.handleSearch();
    }

    handleTermchange (event) {
        let newTerm = event.target.value;
        this.setState({
            term: newTerm
        });
    }

    handleLocationChange (event) {
        let newLoc = event.target.value;
        this.setState({
            location: newLoc
        });
    }

    handleSearch (event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        if(event) {
            event.preventDefault();
        }
    }

    handleKeyUp (event) {
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            this.handleSearch();
        }
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map( sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermchange} onKeyUp={this.handleKeyUp} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} onKeyUp={this.handleKeyUp} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <button onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        )
    }
}
export default SearchBar;