import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../../../essetcs/img/advertorial/advertorial-1.jpg'
import img2 from '../../../essetcs/img/advertorial/advertorial-2.jpeg'
import img3 from '../../../essetcs/img/advertorial/advertorial-3.jpg'

const SpacalCard = () => {
    const spacalaty = [
        {id:1, img:img2, title:'Landscape',subTitle:'Curabitur blandit tempus porttitor. Duis mollis inceptos mollisest commodo luctus erat.' },
        {id:2, img:img1, title:'Advertorial',subTitle:'Maecenas faucibus mollis interdum. Morbi risus porta ac consectetur, vestibulum at eros.' },
        {id:3, img:img3, title:'Conceptual',subTitle:'Donec elit non porta gravida eget metus. Etiam porta sem malesuada magna mollis euismod.' },
    ]
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {spacalaty.map(spacal => 
                <Col key={spacal.id}>
                    <Card  style={{backgroundColor:'whitesmoke'}} className='p-3'>
                        <Card.Img variant="top" style={{height:'300px'}} src={spacal.img} />
                        <Card.Body>
                            <Card.Title style={{color:"gray",fontWeight:"bold"}}>{spacal.title}</Card.Title>
                            <Card.Text>
                                {spacal.subTitle}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    );
}

export default SpacalCard;