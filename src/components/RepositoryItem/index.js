import './index.css'

// Write your code here
const RepositoryItem = props => {
  const {eachItem} = props
  const {name, starsCount, issuesCount, forksCount, avatarUrl} = eachItem
  return (
    <div className="card-container">
      <li className="repository-list">
        <div className="card-item-container">
          <img src={avatarUrl} alt={name} className="img-size" />
          <h1 className="name-heading">{name}</h1>
          <div className="stars-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
              alt="stars"
              className="star-img-size"
            />
            <p className="star-para">{starsCount} stars</p>
          </div>
          <div className="forks-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
              alt="forks"
              className="forks-img-size"
            />
            <p className="forks-para">{forksCount} forks</p>
          </div>
          <div className="issues-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
              alt="open issues"
              className="issues-img-size"
            />
            <p className="issues-para">{issuesCount} open issues</p>
          </div>
        </div>
      </li>
    </div>
  )
}

export default RepositoryItem
