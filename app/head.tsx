export default function Head() {
  const primaryColor = "#0284c7";
  return (
    <>
      <title>Weather</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="theme-color" content={primaryColor}></meta>
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
