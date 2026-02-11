'use client';

import * as CUR from '@chakra-ui/react';
import users from '@/data/mockUsers.json';
import { useState } from 'react';

export default function Home() {
  const [authedUsers, setAuthedUsers] = useState(users);
  const [input, setInput] = useState({ userName: '', password: '' });
  const [authenticated, setAuthenticated] = useState(false);

  const handleUserLogin = (userName: string, password: string) => {
    const existingUser = authedUsers.some(
      (foundUser) => foundUser.userName === userName,
    );
    if (!existingUser) {
      return (
        setAuthenticated(false),
        alert('Access denied: invalid username')
      );
    }
    const matchingPassword = authedUsers.some(
      (foundUser) => foundUser.password === password,
    );
    if (!matchingPassword) {
      return (
        setAuthenticated(false),
        alert('Access denied: incorrect password')
      );
    }

    setAuthenticated(true);
    alert('Login successful!');
  };

  //create link to dashboard
  return (
    <CUR.AbsoluteCenter>
      <CUR.Card.Root h={'lg'} w={'lg'}>
        <CUR.Card.Body>
          Welcome
          <form action="submit">
            <CUR.Fieldset.Root>
              <CUR.Fieldset.Content>
                <CUR.Field.Root>
                  <CUR.Field.Label>User ID</CUR.Field.Label>
                  <CUR.Input
                    type="text"
                    bg={''}
                    value={input.userName}
                    onChange={(e) => {
                      setInput({ ...input, userName: e.target.value });
                    }}
                  />
                </CUR.Field.Root>
                <CUR.Field.Root>
                  <CUR.Field.Label>User Password</CUR.Field.Label>
                  <CUR.Input
                    type="password"
                    bg={''}
                    value={input.password}
                    onChange={(e) => {
                      setInput({ ...input, password: e.target.value });
                    }}
                  />
                </CUR.Field.Root>

                <CUR.Button
                  onClick={() => {
                    handleUserLogin(input.userName, input.password);
                  }}
                >
                  <CUR.Link href={'/dashboard'}>Login</CUR.Link>
                </CUR.Button>
              </CUR.Fieldset.Content>
            </CUR.Fieldset.Root>
          </form>
        </CUR.Card.Body>
      </CUR.Card.Root>
    </CUR.AbsoluteCenter>
  );
}
