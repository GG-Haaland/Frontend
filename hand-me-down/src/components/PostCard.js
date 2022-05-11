import React from "react"
import { Button, Card} from 'react-bootstrap'

const PostCard = ({ post }) => {

  return (
    <div>
        <Card className='my-3 p-3 rounded h-90'>
          <Card.Img style={{objectFit:"contain"}} variant='top' src={post.item_url}/>
          <Card.Body>
            <Card.Title>
              {`${post.name}`}
              
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              Price:
            </Card.Subtitle>
            <Card.Text>
              <div>
              ${`${post.price}`} 
              </div>
            </Card.Text>
            <Card.Subtitle className='mb-2 text-muted'>
              Description:
            </Card.Subtitle>
            <Card.Text>
              <div>
              {`${post.description}`} 
              </div>
            </Card.Text>
            <Card.Subtitle className='mb-2 text-muted'>
              Sold by:
            </Card.Subtitle>
            <Card.Text>
              <div>
              {`${post.user}`} 
              </div>
            </Card.Text>
          </Card.Body>

         
        </Card>
    </div>
  )
}

export default PostCard