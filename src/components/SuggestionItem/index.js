// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachListItem, suggestionFun} = props
  const {suggestion} = eachListItem
  const arrowClicked = () => {
    suggestionFun(suggestion)
  }
  return (
    <li className="each-item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="button" onClick={arrowClicked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
