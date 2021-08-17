import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import OnClick from './OnClick'


export default class ClassBook extends Component {
    state = {
        loading: true,
        book: [],
        options: ["currentlyReading", "wantToRead", "read","none"],
        option: ''
    }
    
    handleChange(e){
        console.log(e.target.value)
    }
    
    componentDidMount(){
        
        BooksAPI.get(this.props.book.id).then(
            (res) => {
                this.setState({
                    book: res,
                    loading: false
                });
                this.setState({
                    options: this.state.options.filter((option)=>(option===this.state.book.shelf)),
                })
                this.setState({
                    option: this.state.options[0]
                })
            })
            
        }
        
        render() {
            

        return (
            <div>
                {this.state.loading ? <div>loading...</div>
                
                : (
                    <li>
                    {this.handleValue()}
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.state.book.imageLinks.smallThumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select onChange={handleChange()} value={this.state.option} >
                                        <option value="move" disabled>Move to...</option>

                                        <option value="currentlyReading" >Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{this.state.book.title}</div>
                            <div className="book-authors">{this.state.book.authors}</div>
                        </div>
                    </li>
                )
                } 
            </div>
        )
    }
}
        {/* <OnClick value={"currentlyReading"} book={this.state.book}/>
                                        <OnClick value={"wantToRead"}/>
                                        <OnClick value={"read"}/> */}