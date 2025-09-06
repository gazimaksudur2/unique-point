import React, { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SEO from "../components/common/SEO";
import products from "../data/products";
const Gallery = () => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState("all");

	// Get all product images for gallery
	const allImages = products.flatMap((product, productIndex) =>
		product.images.map((image, imageIndex) => ({
			src: image,
			alt: product.name,
			category: product.category,
			productName: product.name,
			id: `${productIndex}-${imageIndex}`,
		}))
	);

	// Filter images based on selected category
	const filteredImages =
		selectedCategory === "all"
			? allImages
			: allImages.filter((image) => {
					if (selectedCategory === "Combo") {
						return image.productName.includes("Combo");
					} else if (selectedCategory === "Single") {
						return image.productName.includes("Single");
					}
					return image.category === selectedCategory;
			  });

	const openLightbox = (index) => {
		setSelectedImageIndex(index);
	};

	const closeLightbox = () => {
		setSelectedImageIndex(null);
	};

	const nextImage = () => {
		setSelectedImageIndex((prev) =>
			prev === filteredImages.length - 1 ? 0 : prev + 1
		);
	};

	const prevImage = () => {
		setSelectedImageIndex((prev) =>
			prev === 0 ? filteredImages.length - 1 : prev - 1
		);
	};

	const categories = [
		{ name: "All", value: "all" },
		{ name: "Mens", value: "Mens" },
		{ name: "Combo", value: "Combo" },
		{ name: "Single", value: "Single" },
	];

	// Structured data for Gallery page
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "ImageGallery",
		name: "Fashion Gallery - UniquePoint",
		description:
			"Browse our fashion gallery showcasing premium clothing collections",
		url: "https://uniquepointbd.com/gallery",
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: allImages.length,
			itemListElement: allImages.slice(0, 10).map((image, index) => ({
				"@type": "ImageObject",
				position: index + 1,
				contentUrl: image.src,
				name: image.productName,
				description: `Fashion product image - ${image.productName}`,
			})),
		},
	};

	return (
		<>
			<SEO
				title="Fashion Gallery - Premium Collection Showcase"
				description="Browse our fashion gallery featuring premium clothing and accessories. View high-quality images of our latest collections for kids and teens."
				keywords="fashion gallery, clothing images, product showcase, kids fashion, teens fashion, premium clothing gallery"
				ogType="website"
				ogUrl="https://uniquepointbd.com/gallery"
				structured={structuredData}
				canonical="https://uniquepointbd.com/gallery"
			/>

			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
				{/* Header */}
				<div className="bg-gradient-to-r from-white to-primary-50">
					<div className="container mx-auto px-4 py-12">
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Fashion Gallery
						</h1>
						<p className="text-lg text-gray-600 max-w-2xl">
							Explore our stunning collection through our curated gallery.
							Discover the latest trends and timeless classics.
						</p>
					</div>
				</div>

				{/* Category Filter */}
				<div id="filters" className="bg-white border-b border-gray-200">
					<div className="container mx-auto px-4 py-6">
						<div className="flex flex-wrap gap-2">
							{categories.map((category) => (
								<button
									key={category.value}
									onClick={() => setSelectedCategory(category.value)}
									className={`px-6 py-3 rounded-full font-medium transition-all ${
										selectedCategory === category.value
											? "bg-primary-700 text-white shadow-lg"
											: "bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700"
									}`}
								>
									{category.name}
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Gallery Grid */}
				<div id="gallery" className="container mx-auto px-4 py-12">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{filteredImages.map((image, index) => (
							<div
								key={image.id}
								className="group relative aspect-square bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
								onClick={() => openLightbox(index)}
							>
								<img
									src={image.src}
									alt={image.alt}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								{/* Enhanced overlay with better visibility */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
									<div className="p-4 w-full">
										<div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
											<h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
												{image.productName}
											</h3>
											<div className="flex items-center justify-between">
												<span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
													{image.category}
												</span>
												<div className="flex items-center space-x-1">
													<div className="w-2 h-2 bg-green-500 rounded-full"></div>
													<span className="text-xs text-gray-600 font-medium">
														Available
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Subtle border highlight on hover */}
								<div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-400 transition-all duration-300"></div>
							</div>
						))}
					</div>

					{filteredImages.length === 0 && (
						<div className="text-center py-12">
							<p className="text-gray-500 text-lg">
								No images found for this category.
							</p>
						</div>
					)}
				</div>

				{/* Lightbox Modal */}
				{selectedImageIndex !== null && (
					<div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
						<div className="relative max-w-4xl max-h-full">
							{/* Close Button */}
							<button
								onClick={closeLightbox}
								className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
							>
								<FiX className="h-6 w-6" />
							</button>

							{/* Navigation Buttons */}
							<button
								onClick={prevImage}
								className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all"
							>
								<FiChevronLeft className="h-6 w-6" />
							</button>
							<button
								onClick={nextImage}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all"
							>
								<FiChevronRight className="h-6 w-6" />
							</button>

							{/* Image */}
							<img
								src={filteredImages[selectedImageIndex].src}
								alt={filteredImages[selectedImageIndex].alt}
								className="max-w-full max-h-full object-contain rounded-lg"
							/>

							{/* Image Info */}
							<div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
								<h3 className="font-semibold text-lg">
									{filteredImages[selectedImageIndex].productName}
								</h3>
								<p className="text-sm capitalize opacity-80">
									{filteredImages[selectedImageIndex].category} Collection
								</p>
								<p className="text-xs opacity-60 mt-1">
									{selectedImageIndex + 1} of {filteredImages.length}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Gallery;
