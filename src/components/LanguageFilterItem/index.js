import './index.css'

// Write your code here
const languageFilterItem = props => {
  const {eachLanguage, fetchLanguageRepositoryById, onToggle} = props
  const {id, language} = eachLanguage
  const styleApplied = onToggle ? 'btn-style-change' : 'btn-styling'

  const onClickLanguageBtn = () => {
    fetchLanguageRepositoryById(id)
  }

  return (
    <li className="language-btn-list">
      <button
        type="button"
        className={`${styleApplied} btn-height`}
        onClick={onClickLanguageBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default languageFilterItem
