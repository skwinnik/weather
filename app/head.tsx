export default function Head({ color }: { color?: string }) {
  return (
    <>
      <title>Weather</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      {color && <meta name="theme-color" content={color} />}
      <meta
        name="google-site-verification"
        content={process.env.GOOGLE_VERIFICATION_KEY}
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
