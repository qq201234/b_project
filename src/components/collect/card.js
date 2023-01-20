import Card from 'react-bootstrap/Card';
import logo from './19.jpg';
import Button from 'react-bootstrap/Button';
import Star from './star';

function KitchenSinkExample() {
  return (
    <>
    <div className="cards">
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>ASUS-ROG-Strix-Scope-19</Card.Title>
            </Card.Body>
            <Card.Body className="d-flex justify-content-around">
                <div className="d-flex align-items-center">
                    <Button variant="warning" className='btn1'>加入購物車</Button>
                </div>
                <div>
                    <Star />
                    <h6>$999</h6>
                </div>
            </Card.Body>
            </Card>
        </div>
        <div className="pt-1 d-flex gap-1 btn-group">
            <Button variant="danger" className='btn2'>刪除</Button>
            <Button variant="primary" className='btn3'>前往商品頁</Button>
        </div>
    </div>
    </>
  );
};

export default KitchenSinkExample;