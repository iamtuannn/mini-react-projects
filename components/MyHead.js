import React from "react";
import Head from "next/head";

export default function MyHead({ data }) {
  const { name, preview } = data;
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{name}</title>
      <meta name="author" content="Hoang A. Tuan" />
      <meta name="description" content={`${name} - Built By Hoang A. Tuan`} />

      <meta property="og:title" content={name} />
      <meta
        property="og:description"
        content={`${name} - Built By Hoang A. Tuan`}
      />
      <meta property="og:image" content={preview} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
    </Head>
  );
}
