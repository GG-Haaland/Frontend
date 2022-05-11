import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import UserCard from './UserCard'

const Users = () => {

        useEffect(() => {
            getUsers()
        },[])

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const getUsers = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/users/')
            setUsers(res.data)
            setLoading(true)
            console.log(res.data)
        } catch (err) {
            alert(err.message)
        }
    }


    return <Fragment>
        <Row>
            {loading && 
            users.map((user) =>(
                <Col sm={12} med={6} lg={4} key={user.id}>
                    <UserCard user={user}/>
                </Col>
            ))}
        </Row>

    </Fragment> 
       

}

export default Users
