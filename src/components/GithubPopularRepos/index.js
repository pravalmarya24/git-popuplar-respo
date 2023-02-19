import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]
// Write your code here
class GithubPopularRepos extends Component {
  state = {languageList: [], isActive: false, activeButtonId: 'ALL'}

  componentDidMount() {
    this.fetchRepositoryList()
  }

  fetchRepositoryList = async () => {
    this.setState({isActive: true})
    const {activeButtonId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeButtonId}`
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    if (response.ok === true) {
      const updatedData = fetchedData.popular_repos.map(each => ({
        id: each.id,
        name: each.name,
        starsCount: each.stars_count,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        avatarUrl: each.avatar_url,
      }))

      this.setState({languageList: updatedData, isActive: false})
    }
  }

  fetchLanguageRepositoryById = id => {
    this.setState({activeButtonId: id}, this.fetchRepositoryList)
    console.log(id)
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {languageList, isActive, activeButtonId} = this.state
    return (
      <div className="github-popular-respo-container" data-testid="loader">
        <h1 className="popular-heading">Popular</h1>
        <ul className="unordered-list">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              eachLanguage={each}
              key={each.id}
              fetchLanguageRepositoryById={this.fetchLanguageRepositoryById}
              onToggle={each.id === activeButtonId}
            />
          ))}
        </ul>
        {isActive ? (
          this.renderLoader()
        ) : (
          <ul className="language-unordered-list">
            {languageList.map(items => (
              <RepositoryItem eachItem={items} key={items.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
