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
                        <input onChange={props.handlePostChange} name="title" type="text" value={props.post.title} />
                    </div>
                    <div>
                        <label htmlFor="body">Description: </label>
                    </div>
                    <div>
                        <input onChange={props.handlePostChange} name="body" type="text" value={props.post.body} />
                    </div>

                    <div>
                        <button>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewPostForm
