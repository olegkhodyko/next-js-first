import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from '../../styles/User.module.scss'

const GET_USERS_URL = `https://jsonplaceholder.typicode.com/users`;

export default function User({user}) {
  // const router = useRouter();
  // const {query} = useRouter();
  return (
    <MainContainer>
      <div className={styles.user}>
        <h2>{`This is user width ID# ${user.id}`}</h2>
        <div>Name: {user.name}</div>
        <div>Phone: {user.phone}</div>
        <div>E-mail: {user.email}</div>
      </div>
    </MainContainer>
  );
};

export async function getServerSideProps({params}) {
  const response = await fetch(`${GET_USERS_URL}/${params.id}`);
  const user = await response.json();

  return {
    props: {user},
  }
}