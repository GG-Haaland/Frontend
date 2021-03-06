import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import PostCard from './PostCard'

const Posts = () => {

        useEffect(() => {
            getPosts()
        },[])

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const getPosts = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/posts/')
            setPosts(res.data)
            setLoading(true)
            console.log(res.data)
        } catch (err) {
            alert(err.message)
        }
    }


    return <Fragment>
        <Row>
            {loading && 
            posts.map((post) =>(
                <Col sm={12} med={6} lg={4} key={post.id}>
                    <PostCard post={post}/>
                </Col>
            ))}
        </Row>

    </Fragment> 
       

}

export default Posts
