import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const ondelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-container">
      <div className="content">
        <p className="time">{timeAccessed}</p>
        <img className="domain-logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        onClick={ondelete}
        className="delete-button"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
