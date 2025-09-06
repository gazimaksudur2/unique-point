// SEO utility functions for generating structured data and meta tags

export const generateProductStructuredData = (product) => {
	return {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.name,
		description:
			product.description || `Premium ${product.category} clothing for kids`,
		brand: {
			"@type": "Brand",
			name: product.brand,
		},
		category: product.category,
		image: product.images || [],
		offers: {
			"@type": "Offer",
			price: product.price,
			priceCurrency: "INR",
			availability: product.inStock
				? "https://schema.org/InStock"
				: "https://schema.org/OutOfStock",
			seller: {
				"@type": "Organization",
				name: "Unique Point",
			},
		},
		aggregateRating: product.rating
			? {
					"@type": "AggregateRating",
					ratingValue: product.rating,
					ratingCount: product.reviewCount || 1,
			  }
			: undefined,
	};
};

export const generateCategoryStructuredData = (categoryName, products) => {
	return {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: `${categoryName} Fashion Collection`,
		description: `Premium ${categoryName.toLowerCase()} clothing collection featuring casual wear, formal wear, activewear and accessories`,
		url: `https://unique-point.com/${categoryName.toLowerCase()}`,
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: products.length,
			itemListElement: products.slice(0, 10).map((product, index) => ({
				"@type": "Product",
				position: index + 1,
				name: product.name,
				description:
					product.description ||
					`Premium ${categoryName.toLowerCase()} clothing`,
				brand: {
					"@type": "Brand",
					name: product.brand,
				},
				offers: {
					"@type": "Offer",
					price: product.price,
					priceCurrency: "INR",
					availability: "https://schema.org/InStock",
				},
			})),
		},
	};
};

export const generateOrganizationStructuredData = () => {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Unique Point",
		description:
			"Premium kids fashion store offering high-quality clothing for kids and teens",
		url: "https://unique-point.com",
		logo: "https://unique-point.com/logo.png",
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "+91-XXXXXXXXXX",
			contactType: "customer service",
			availableLanguage: ["English", "Hindi"],
		},
		address: {
			"@type": "PostalAddress",
			addressCountry: "IN",
		},
		sameAs: [
			"https://facebook.com/uniquepoint",
			"https://instagram.com/uniquepoint",
			"https://twitter.com/uniquepoint",
		],
	};
};

export const generateBreadcrumbStructuredData = (breadcrumbs) => {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: breadcrumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			item: crumb.url,
		})),
	};
};

// Common SEO titles and descriptions
export const SEO_CONTENT = {
	HOME: {
		title: "Premium Kids Fashion Store - Quality Clothing for All Ages",
		description:
			"Shop premium kids fashion at Unique Point. High-quality clothing for kids and teens, ages 0-16. Free shipping over ৳999, easy returns, and 24/7 support. New arrivals daily!",
		keywords:
			"kids fashion, children clothing, premium kids wear, teens fashion, online shopping, free shipping, toddler clothes, baby clothes",
	},
	BOYS: {
		title: "Boys Fashion Collection - Premium Kids Clothing",
		description:
			"Shop premium boys clothing at Unique Point. Discover casual wear, formal wear, activewear and accessories for boys aged 0-16. Free shipping over ৳999 with easy returns.",
		keywords:
			"boys clothing, boys fashion, kids wear, casual wear for boys, formal wear boys, activewear boys, boys accessories, premium kids clothing",
	},
	GIRLS: {
		title: "Girls Fashion Collection - Premium Kids Clothing",
		description:
			"Shop premium girls clothing at Unique Point. Beautiful dresses, casual wear, formal wear and accessories for girls aged 0-16. Free shipping over ৳999 with easy returns.",
		keywords:
			"girls clothing, girls fashion, kids wear, girls dresses, casual wear for girls, formal wear girls, girls accessories, premium kids clothing",
	},
	CART: {
		title: "Shopping Cart - Unique Point",
		description:
			"Review your selected items and proceed to checkout. Secure payment options and free shipping over ৳999.",
		keywords: "shopping cart, checkout, secure payment, kids fashion",
	},
	WISHLIST: {
		title: "My Wishlist - Unique Point",
		description:
			"Your saved favorite items. Easy shopping for your preferred kids fashion choices.",
		keywords: "wishlist, favorites, saved items, kids fashion",
	},
};
