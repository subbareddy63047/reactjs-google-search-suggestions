// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {inputSearch: ''}

  selectedSuggestion = suggestion => {
    this.setState({inputSearch: suggestion})
  }

  searching = event => {
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {inputSearch} = this.state
    const {suggestionsList} = this.props

    const resultsList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="main-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="inner-container">
          <div className="input-container-element">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              value={inputSearch}
              className="input-element"
              type="search"
              placeholder="Search Google"
              onChange={this.searching}
            />
          </div>
          <ul className="suggestions-list">
            {resultsList.map(each => (
              <SuggestionItem
                eachListItem={each}
                key={each.id}
                suggestionFun={this.selectedSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
