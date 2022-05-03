import NextHead from 'next/head';

const Head = ({ description, title }) => {
  const formattedTitle = `${title ? `${title} - `: ''}Soare`;
  const formattedDescription = description ?? 'Soare';

  return (
    <NextHead>
      <title>{formattedTitle}</title>
      <meta property='og:title' content={formattedTitle} key='title' />
      <meta
        name='description'
        content={formattedDescription}
        key='description'
      />
    </NextHead>
  );
};

export default Head;
