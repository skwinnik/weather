export default function Head() {
  const primaryColor = "#0284c7";
  return (
    <>
      <title>Weather</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="theme-color" content={primaryColor}></meta>
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
