import MovieListComponent from '../pages/movies';
import Header from '../components/Header';


export default function Home() {
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/movies',
      permanent: false, 
    },
  };
}