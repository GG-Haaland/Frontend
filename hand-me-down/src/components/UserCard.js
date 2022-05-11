import React from "react"
import { Button, Card} from 'react-bootstrap'

const UserCard = ({ user }) => {

  return (
    <div>
        <Card className='my-3 p-3 rounded h-90'>
          <Card.Img style={{objectFit:"contain"}} variant='top' src={user.photo_url}/>
          <Card.Body>
            <Card.Title>
              {`${user.username}`}
              
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              Name:
            </Card.Subtitle>
            <Card.Text>
              <div>
              {`${user.first_name}` + ' ' + `${user.last_name}`} 
              </div>
            </Card.Text>
            <Card.Subtitle className='mb-2 text-muted'>
              Email:
            </Card.Subtitle>
            <Card.Text>
              <div>
              {`${user.email}`} 
              </div>
            </Card.Text>
          </Card.Body>

         
        </Card>
    </div>
  )
}

export default UserCard