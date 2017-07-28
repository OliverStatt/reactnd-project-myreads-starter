import React from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends React.Component {

 state = {
  query: "",
  books: []
 }

 handleChange = (event) => {
  this.setState({query: event.target.value})
  this.search(this.state.query)
 }

 search = (query) => {
  BooksAPI.search(query, 20).then((result) => {
   if( result && (result.length > 0) ) {
    this.setState({books: result})
            
   }
  })
 } 

 render() {
  return (
   <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" 
                 value={this.state.query} 
                 onChange={this.handleChange} 
                 placeholder="Search by title or author"/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
               <BooksGrid books={this.state.books} onChangeSelection={this.props.onChangeSelection}/>
            </div>
          </div>
  )
 }
}


export default SearchBooks