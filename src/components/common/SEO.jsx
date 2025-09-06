import React from "react";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../../utils/constants";

const SEO = ({
	title,
	description,
	keywords,
	ogImage,
	ogType = "website",
	ogUrl,
	twitterCard = "summary_large_image",
	canonical,
	noIndex = false,
	structured = null,
}) => {
	const siteTitle = title ? `${title} | ${APP_NAME}` : APP_NAME;
	const defaultDescription =
		"Premium kids fashion store - Shop high-quality clothing for kids and teens. Free shipping over ৳999, easy returns, and 24/7 support.";
	const siteDescription = description || defaultDescription;
	const defaultKeywords =
		"kids fashion, children clothing, premium kids wear, teens fashion, online shopping";
	const siteKeywords = keywords || defaultKeywords;
	const defaultOgImage = "/og-image.jpg"; // You can add a default OG image to public folder
	const siteOgImage = ogImage || defaultOgImage;

	return (
		<Helmet>
			{/* Basic Meta Tags */}
			<title>{siteTitle}</title>
			<meta name="description" content={siteDescription} />
			<meta name="keywords" content={siteKeywords} />
			<meta name="author" content={APP_NAME} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{/* Robots Meta */}
			{noIndex && <meta name="robots" content="noindex, nofollow" />}

			{/* Canonical URL */}
			{canonical && <link rel="canonical" href={canonical} />}

			{/* Open Graph Meta Tags */}
			<meta property="og:title" content={siteTitle} />
			<meta property="og:description" content={siteDescription} />
			<meta property="og:type" content={ogType} />
			<meta property="og:image" content={siteOgImage} />
			<meta property="og:site_name" content={APP_NAME} />
			{ogUrl && <meta property="og:url" content={ogUrl} />}

			{/* Twitter Card Meta Tags */}
			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:title" content={siteTitle} />
			<meta name="twitter:description" content={siteDescription} />
			<meta name="twitter:image" content={siteOgImage} />

			{/* Theme Color */}
			<meta name="theme-color" content="#A1C398" />
			<meta name="msapplication-TileColor" content="#A1C398" />

			{/* Favicons */}
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>

			{/* Structured Data */}
			{structured && (
				<script type="application/ld+json">{JSON.stringify(structured)}</script>
			)}
		</Helmet>
	);
};

export default SEO;
