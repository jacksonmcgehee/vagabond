import React from 'react'
import styled from 'styled-components'

function NewPostForm(props) {
    return (
        <div>

            <div>
                <form onSubmit={props.createNewPost}>
                    <div>
                        <label htmlFor="title">Title: </label>
                    </div>
                    <div>
                        <input onChange={props.handlePostChange} name="title" value={props.post.title} placeholder="test" />
                    </div>
                    <div>
                        <label htmlFor="body">Description: </label>
                    </div>
                    <div>
                        <input onChange={props.handlePostChange} name="body" value={props.post.body} placeholder="test"/>
                    </div>

                    <div>
                        <input type="submit" value="Submit" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewPostForm
