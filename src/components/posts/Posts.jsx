import React, { Component } from 'react';
import Axios from 'axios';

import PostForm from './postForm';

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Posts',
            posts: []
        }

    }

    componentWillMount() {
        return Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((posts) => {
                this.setState({
                    posts: posts.data
                });
                console.log(this.state.posts);
            }).catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <h3> {this.state.title}: </h3>
                <hr/>
                <PostForm/>
                <hr/>
                <section>
                    {
                        this.state.posts.map(post =>
                            <div key={post.id}>
                                <p> <strong> {post.title} </strong> </p>
                                <p> {post.body} </p>
                            </div>
                        )
                    }
                </section>
            </div>
        )
    }
}

export default Posts;