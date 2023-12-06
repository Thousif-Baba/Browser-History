import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onRemoveHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="time-accessed-container">
        <p className="time-accessed">{timeAccessed}</p>

        <div className="logo-url-container">
          <img className="logo-url" src={logoUrl} alt="domain logo" />

          <div className="title-domain-container">
            <p className="title">{title}</p>

            <p className="domain-ulr">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onRemoveHistory}
        data-testid="delete"
      >
        <img
          className="delete-logo"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
