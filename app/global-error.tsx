'use client'; // Error boundaries must be Client Components

import Container from '@/components/container';

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="min-h-screen flex">
        <Container className="border flex items-center justify-center">
          <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => unstable_retry()}>Try again</button>
          </div>
        </Container>
      </body>
    </html>
  );
}
