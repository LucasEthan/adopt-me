const SearchParams = () => {
  const location = "Seattle, WA"
  return  (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location"/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default SearchParams