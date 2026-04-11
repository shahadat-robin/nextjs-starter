'use client'; // Error boundaries must be Client Components

import Container from '@/components/container';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <Container className="flex items-center justify-center flex-1">
      <div>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => unstable_retry()}>Try again</button>
      </div>
    </Container>
  );
}
