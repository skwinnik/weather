export default function Head({ color }: { color: string }) {
  return (
    <>
      <title>Weather</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="theme-color" content={color}></meta>
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
