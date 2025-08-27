// Sample product data for development and testing
import unicorn from "../assets/cute_unicorn_Tshirt.jpg";
import superhero from "../assets/superhero_cape_set.jpg";
import floral from "../assets/floral_summer_dress.jpg";
import joggers from "../assets/comfortable_joggers.jpg";
import kurta from "../assets/kurta.jpg";
import lehenga from "../assets/lehenga.jpg";

export const sampleProducts = [
	{
		id: 1,
		name: "Cute Unicorn T-Shirt",
		category: "girls",
		ageGroup: "kids",
		clothingType: "t-shirts",
		price: 699,
		originalPrice: 999,
		discount: 30,
		images: [
			unicorn,
			unicorn,
		],
		description:
			"Adorable unicorn print t-shirt made from 100% organic cotton. Perfect for everyday wear and playtime.",
		sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y"],
		colors: ["Pink", "Purple", "White"],
		brand: "Little Stars",
		material: "100% Organic Cotton",
		careInstructions: "Machine wash cold, tumble dry low",
		tags: ["unicorn", "girls", "kids", "cotton", "comfortable"],
		isNew: true,
		isBestseller: false,
		inStock: true,
		rating: 4.8,
		reviewCount: 24,
	},
	{
		id: 2,
		name: "Superhero Cape Set",
		category: "boys",
		ageGroup: "kids",
		clothingType: "accessories",
		price: 1299,
		originalPrice: 1599,
		discount: 19,
		images: [
			superhero,
			superhero,
		],
		description:
			"Complete superhero cape set with mask and wristbands. Let your little hero save the day!",
		sizes: ["One Size"],
		colors: ["Red", "Blue", "Black"],
		brand: "Hero Kids",
		material: "Polyester Satin",
		careInstructions: "Hand wash only, air dry",
		tags: ["superhero", "boys", "kids", "cape", "costume"],
		isNew: false,
		isBestseller: true,
		inStock: true,
		rating: 4.9,
		reviewCount: 67,
	},
	{
		id: 3,
		name: "Floral Summer Dress",
		category: "girls",
		ageGroup: "teens",
		clothingType: "dresses",
		price: 1499,
		originalPrice: 1999,
		discount: 25,
		images: [
			floral,
			floral,
		],
		description:
			"Beautiful floral print summer dress perfect for casual outings and special occasions.",
		sizes: ["S", "M", "L", "XL"],
		colors: ["Floral Blue", "Floral Pink", "Floral Yellow"],
		brand: "Teen Fashion",
		material: "Cotton Blend",
		careInstructions: "Machine wash cold, iron on low heat",
		tags: ["floral", "girls", "teens", "dress", "summer"],
		isNew: true,
		isBestseller: false,
		inStock: true,
		rating: 4.6,
		reviewCount: 18,
	},
	{
		id: 4,
		name: "Comfortable Joggers",
		category: "boys",
		ageGroup: "teens",
		clothingType: "jeans",
		price: 899,
		originalPrice: 1199,
		discount: 25,
		images: [
			joggers,
			joggers,
		],
		description:
			"Comfortable and stylish joggers perfect for sports, casual wear, and lounging.",
		sizes: ["S", "M", "L", "XL"],
		colors: ["Black", "Navy Blue", "Grey"],
		brand: "Active Teen",
		material: "Cotton Polyester Blend",
		careInstructions: "Machine wash warm, tumble dry medium",
		tags: ["joggers", "boys", "teens", "comfortable", "sport"],
		isNew: false,
		isBestseller: true,
		inStock: true,
		rating: 4.7,
		reviewCount: 43,
	},
	{
		id: 5,
		name: "Ethnic Kurta Set",
		category: "boys",
		ageGroup: "kids",
		clothingType: "ethnic",
		price: 1799,
		originalPrice: 2299,
		discount: 22,
		images: [
			kurta,
			kurta,
		],
		description:
			"Traditional ethnic kurta with matching pajama, perfect for festivals and special occasions.",
		sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y"],
		colors: ["Cream", "Light Blue", "Maroon"],
		brand: "Tradition Kids",
		material: "Pure Cotton",
		careInstructions: "Hand wash or gentle machine wash",
		tags: ["ethnic", "boys", "kids", "kurta", "festival"],
		isNew: false,
		isBestseller: false,
		inStock: true,
		rating: 4.5,
		reviewCount: 29,
	},
	{
		id: 6,
		name: "Princess Lehenga",
		category: "girls",
		ageGroup: "kids",
		clothingType: "ethnic",
		price: 2499,
		originalPrice: 3199,
		discount: 22,
		images: [
			lehenga,
			lehenga,
		],
		description:
			"Beautiful princess-style lehenga with intricate embroidery, perfect for weddings and festivals.",
		sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y"],
		colors: ["Pink", "Red", "Golden"],
		brand: "Little Princess",
		material: "Silk Blend",
		careInstructions: "Dry clean only",
		tags: ["lehenga", "girls", "kids", "ethnic", "princess"],
		isNew: true,
		isBestseller: true,
		inStock: true,
		rating: 4.9,
		reviewCount: 56,
	},
];

// Helper functions for filtering products
export const getProductsByCategory = (category) => {
	return sampleProducts.filter((product) => product.category === category);
};

export const getProductsByAgeGroup = (ageGroup) => {
	return sampleProducts.filter((product) => product.ageGroup === ageGroup);
};

export const getProductsByClothingType = (clothingType) => {
	return sampleProducts.filter(
		(product) => product.clothingType === clothingType
	);
};

export const getNewProducts = () => {
	return sampleProducts.filter((product) => product.isNew);
};

export const getBestsellerProducts = () => {
	return sampleProducts.filter((product) => product.isBestseller);
};

export const getSaleProducts = () => {
	return sampleProducts.filter((product) => product.discount > 0);
};

export const searchProducts = (query) => {
	const searchTerm = query.toLowerCase();
	return sampleProducts.filter(
		(product) =>
			product.name.toLowerCase().includes(searchTerm) ||
			product.description.toLowerCase().includes(searchTerm) ||
			product.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
			product.brand.toLowerCase().includes(searchTerm)
	);
};

// Collections data
export const collections = [
	{
		id: 1,
		name: "Festival Special",
		slug: "festival",
		description: "Traditional and ethnic wear for festive celebrations",
		image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800",
		products: [5, 6], // Product IDs
	},
	{
		id: 2,
		name: "Summer Collection",
		slug: "summer",
		description: "Light and breezy outfits for the summer season",
		image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
		products: [1, 3],
	},
	{
		id: 3,
		name: "Back to School",
		slug: "school",
		description: "Comfortable and stylish outfits for school days",
		image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
		products: [1, 4],
	},
];
