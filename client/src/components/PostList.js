import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

class PostList extends Component {

    render () {
        const postList = this.props.posts.map((post) => {
            return (
                <div>
                    <img width="200" src={post.post_photo} alt="" />
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </div>
            )
        })
        
        return(
            <div>
                {postList}
            </div>
        )
    }
}

export default PostList