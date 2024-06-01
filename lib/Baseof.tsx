

import Head from "next/head";
import { useEffect, useRef } from "react";

const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
  name,
  folder,
  imgUrl,
}: any) => {
  const meta_image = "your_static_meta_image_url";
  const meta_author = "your_static_meta_author";
  const meta_description = "your_static_meta_description";
  const base_url = "your_static_base_url";

  const main = useRef<HTMLElement | null>(null);

  return (
    <>
      <Head>
        {/* title */}
        <title>{"meta_title ? meta_title : title ? title : site.title"}</title>

        <meta name="website" content="" />

        {/* canonical url */}
        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

        {/* noindex robots */}
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        {/* meta-description */}
        <meta
          name="description"
          content={description ? description : meta_description}
        />

        {/* author from json */}
        <meta name="author" content={meta_author} />

        {/* og-title */}
        <meta
          property="og:title"
          content={"meta_title ? meta_title : title ? title : site.title"}
        />

        {/* og-description */}
        <meta
          property="og:description"
          content={description ? description : meta_description}
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:url"
          content={`${base_url}${router.asPath.replace("/", "")}`}
        /> */}

        {/* twitter-title */}
        <meta
          name="twitter:title"
          content={"meta_title ? meta_title : title ? title : site.title"}
        />

        {/* twitter-description */}
        <meta
          name="twitter:description"
          content={description ? description : meta_description}
        />

        {/* og-image */}
        {/* {pathname !== "/" ? (
          <meta name="og:image" content={`../public/next.svg`} />
        ) : (
          <meta name="og:image" content={""} />
        )} */}
        {/* <meta name='og:image' content={`${base_url}_next/image?url=%2Fimages%2Fcar1%2F3.jpg&w=1200&q=75`} /> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* twitter-image */}
        <meta
          name="twitter:image"
          content={`${base_url}${image ? image : meta_image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* WhatsApp meta tags */}
        <meta
          name="description"
          content={`${base_url}${image ? image : meta_image}`}
        />
      </Head>
      {/* main site */}
      <main style={{ overflowX: "hidden" }} ref={main}>
        {children}
      </main>
    </>
  );
};

export default Base;
