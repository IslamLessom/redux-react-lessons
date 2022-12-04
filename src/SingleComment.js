import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { commentDelete, commentUpdate } from './redux/action'

function SingleComment({ data }) {
    const [commentText, setCommentText] = useState('')
    
    const { text, id } = data
    const dispatch = useDispatch()

    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text])

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(commentDelete(id))
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(commentUpdate(commentText, id))
    }

    return (
        <form onSubmit={handleUpdate} className='comments-item'>
            <div onClick={handleDelete} className='comments-item-delete'>&times;</div>
            <input type='text' defaultValue={commentText} />
            <input type='submit' hidden />
        </form>
    )
}

export default SingleComment