import React from 'react'
import Header from '../../components/Header'
import {
  Button,
  Form,
  Grid,
  Header as SemanticHeader,
  Segment,
} from 'semantic-ui-react'

const RegisterUI = ({
  form: { form, onChange, registerFormValidator, onSubmit },
}) => {
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
                <input
                  placeholder='Username'
                  type='text'
                  name='username'
                  value={form.username || ''}
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>First Name</label>
                <input
                  placeholder='First Name'
                  type='text'
                  name='firstname'
                  value={form.firstname || ''}
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  placeholder='Last Name'
                  type='text'
                  name='lastname'
                  value={form.lastname || ''}
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  placeholder='Email'
                  type='email'
                  name='email'
                  value={form.email || ''}
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  placeholder='Password'
                  type='password'
                  name='password'
                  value={form.password || ''}
                  onChange={onChange}
                />
              </Form.Field>
              <Button
                disabled={registerFormValidator}
                fluid
                type='submit'
                primary
                onClick={onSubmit}
              >
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
