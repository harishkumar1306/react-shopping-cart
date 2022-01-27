import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from 'react-bootstrap';

import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand className='brand'>
          <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl
            style={{ width: 500 }}
            placeholder='Search a product'
            className='m-auto'
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              <FaShoppingCart color='white' fontSize='25px' />
              <Badge bg='none' style={{ marginLeft: 5 }}>
                {10}
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 270 }}>
              <Dropdown.Item>
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
