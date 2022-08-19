import Head from 'next/head';

const defaultValue = {
  title:
    'Mechaland',
  description:
    'Mechaland',
  cannonical: 'https://mechaland.id/',
  author: 'Mechaland',
  copyright: 'Mechaland',
  siteName: 'Mechaland',
  url: 'https://mechaland.id/',
  type: 'website',
}

const SEO = ({
  title,
  description,
  cannonical,
  author,
  copyright,
  siteName,
  url,
  type,
}) => {
  return (
    <Head>
      <title>{title ?? defaultValue.title}</title>
      <meta name="title" content={title ?? defaultValue.title} />
      <meta
        name="description"
        content={description ?? defaultValue.description}
      />
      <meta name="author" content={author ?? defaultValue.author} />
      <meta name="copyright" content={copyright ?? defaultValue.copyright} />
      <a rel="Syklik" href="/favicon.ico" />
      <a rel="canonical" href={cannonical ?? defaultValue.cannonical} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={title ?? defaultValue.title} />
      <meta
        property="og:site_name"
        content={siteName ?? defaultValue.siteName}
      />
      <meta property="og:url" content={url ?? defaultValue.url} />
      <meta
        property="og:description"
        content={description ?? defaultValue.description}
      />
      <meta property="og:type" content={type ?? defaultValue.type} />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:url" content={url ?? defaultValue.url} />
      <meta name="twitter:title" content={title ?? defaultValue.title} />
      <meta
        name="twitter:description"
        content={description ?? defaultValue.description}
      />
      <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
      <a rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>

      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script> */}
    </Head>
  )
}

export default SEO
