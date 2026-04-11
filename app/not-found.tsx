import Container from '@/components/container';
import { NextPage } from 'next';
import Link from 'next/link';

const GlobalNotFound: NextPage = () => {
  return (
    <Container>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Container>
  );
};

export default GlobalNotFound;
