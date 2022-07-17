import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image, Button, Icon } from 'semantic-ui-react'
import phonebook2 from '../../assets/images/phonebook2.svg'

const Header = () => {
  return (
    <div>
      <Menu secondary pointing>
        <Image src={phonebook2} style={{ paddingLeft: 5 }} width={50} />
        <Menu.Item as={Link} to='/' style={{ fontSize: 24 }}>
          PhoneBook
        </Menu.Item>
        <Menu.Item position='right'>
          <Button as={Link} to='/contacts/create' primary basic>
            <Icon name='add'></Icon>
            Create Contact
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button color='red' basic>
            <Icon name='log out'></Icon>
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Header
