import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MainContainer from '../components/MainContainer';

const GET_USERS_URL = `https://jsonplaceholder.typicode.com/users`;

const Users = ({users}) => {
  return (
    <MainContainer>
      <h1>Users list:</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id} >
              <Link href={`/users/${user.id}`} >
                <a>{user.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch(GET_USERS_URL);
  const users = await response.json();

  return {
    props: {users}, // will be passed to the page component as props
  }
}
  