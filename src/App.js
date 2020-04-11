import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      searchTerm: '',
      printType: 'all',
      bookType: 'full',
      store: []  
    }
  }

  search = (booksearch) => {
    const apikey='AIzaSyDKlBlISwSmK8f6fA59l46aEpuZV-h85fQ';
    const searchTerm= this.state.searchTerm
    const filter=  this.state.bookType;
    const printType= this.state.printType;
    console.log(this.state)
    const url=`https://www.googleapis.com/books/v1/volumes?key=${apikey}&filter=${filter}&printType=${printType}&q=${searchTerm}`
    fetch(url)
    .then(res=>res.json())
    .then(json=>{
      console.log(json.items)
      this.setState({
        store: json.items
      })

    })
  }

  render() {
    console.log(this.state.store)
    /*
    let result;
    if (this.state.store.length) {
      result= this.state.store.map(item=>{
        return(
          <div>
            <h2>{item.volumeInfo.title}</h2>
          </div>
        )
      })

    }*/
    
    return (
      <div className="App">
        <header className='App-header'>
          <h1>Google Book Search</h1>
        </header>
        <form>
          <fieldset>
            <label htmlFor="booksearch">Search</label>
            <input type='text' name='booksearch' id='booksearch' placeholde='key words' />
            <button type='submit' onClick={(e)=>{
              e.preventDefault();
              const booksearch= document.querySelector('input').value
              this.setState({
                  searchTerm: booksearch
              })
              this.search();

            }}>Search</button>
          </fieldset>
          
          <fieldset>
            <label htmlFor="print_type">Print Type: </label>
            <select nanme='print_type' id='print_type' onChange={()=>{
              const printType= document.querySelector('#print_type').value;
              this.setState({
                printType: printType
              })
            }}>
              <option value='all'>All</option>
              <option value='books'>Books</option>
              <option value='magazines'>Magazines</option>
            </select>
    
            <label htmlFor="book_type">Book Type: </label>
            <select nanme='book_type' id='book_type' onChange={()=>{
              const bookType= document.querySelector('#book_type').value;
              this.setState({
                bookType: bookType
              })
            }}>
              <option value='full'>No Filter</option>
              <option value='free-ebooks'>Free-ebooks</option>
              <option value='partial'>Partial</option>
              <option value='paid-ebooks'>Paid Ebooks</option>
              <option value='ebooks'>Ebooks</option>
            </select>
          </fieldset>
        </form>
         
      </div>
    );
  }
  
}
/*
{this.state.store.length && (
  <div>
    {result}
  </div>
)}*/

export default App;
