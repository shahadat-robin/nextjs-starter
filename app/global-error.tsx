'use client';

import Container from '@/components/container';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen flex">
        <Container className="border flex items-center justify-center">
          <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
          </div>
        </Container>
      </body>
    </html>
  );
}
