import React from 'react'
import Header from '../../components/Header'
import {
  Button,
  Form,
  Grid,
  Header as SemanticHeader,
  Segment,
} from 'semantic-ui-react'

const RegisterUI = () => {
  return (
    <div>
      <Header />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Signup Here</SemanticHeader>
          <Segment>
            <Form>
              <Form.Field>
                <label>Username</label>
                <input placeholder='Username' type='text' name='username' />
              </Form.Field>
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' type='text' name='firstname' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' type='text' name='lastname' />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' type='email' name='email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type='password' name='password' />
              </Form.Field>
              <Button fluid type='submit' primary>
                Submit
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default RegisterUI
