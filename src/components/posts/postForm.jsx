import React, { Component } from 'react';

export default class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({title: event.target.title, body:event.target.body});
        console.log(this.state.title)
      }

    handlePostSubmit(e) {
        console.log('form submitted', this.state.title )
        e.preventDefault();
    }

    render() {
        return (

            <section>
                <div>Submit Posts</div>
                <form onSubmit={this.handlePostSubmit}>
                    <label htmlFor=""> Title </label>
                    <br />
                    <input type="text" value={this.state.title} onChange={this.handleChange}/>
                    <br />
                    <label htmlFor=""> Body </label>
                    <br />
                    {/* <textarea value={this.state.body}> </textarea> */}
                    <input type="text" value={this.state.body} onChange={this.handleChange}/>
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </section>
        )
    }


}