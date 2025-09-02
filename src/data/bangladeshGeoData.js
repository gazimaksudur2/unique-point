// Bangladesh Geographic Data
// Divisions, Districts, Upazilas, and Unions

export const bangladeshGeoData = {
	divisions: [
		{
			id: "1",
			name: "Dhaka",
			districts: [
				{
					id: "1",
					name: "Dhaka",
					upazilas: [
						{
							id: "1",
							name: "Dhanmondi",
							unions: ["Dhanmondi", "Kalabagan", "Hazaribagh"],
						},
						{
							id: "2",
							name: "Gulshan",
							unions: ["Gulshan 1", "Gulshan 2", "Banani"],
						},
						{
							id: "3",
							name: "Uttara",
							unions: ["Uttara East", "Uttara West", "Azampur"],
						},
						{
							id: "4",
							name: "Wari",
							unions: ["Wari", "Rankin Street", "Armanitola"],
						},
					],
				},
				{
					id: "2",
					name: "Gazipur",
					upazilas: [
						{
							id: "5",
							name: "Gazipur Sadar",
							unions: ["Bhawal", "Rajendrapur", "Tongi"],
						},
						{
							id: "6",
							name: "Kaliakair",
							unions: ["Kaliakair", "Chandra", "Tetuljhora"],
						},
					],
				},
				{
					id: "3",
					name: "Narayanganj",
					upazilas: [
						{
							id: "7",
							name: "Narayanganj Sadar",
							unions: ["Narayanganj", "Siddhirganj", "Kadam Rasul"],
						},
					],
				},
			],
		},
		{
			id: "2",
			name: "Chittagong",
			districts: [
				{
					id: "4",
					name: "Chittagong",
					upazilas: [
						{
							id: "8",
							name: "Chittagong City",
							unions: ["Agrabad", "Kotwali", "Chandgaon"],
						},
						{
							id: "9",
							name: "Hathazari",
							unions: ["Hathazari", "Fatikchhari", "Nanupur"],
						},
					],
				},
				{
					id: "5",
					name: "Cox's Bazar",
					upazilas: [
						{
							id: "10",
							name: "Cox's Bazar Sadar",
							unions: ["Cox's Bazar", "Chakaria", "Teknaf"],
						},
					],
				},
			],
		},
		{
			id: "3",
			name: "Rajshahi",
			districts: [
				{
					id: "6",
					name: "Rajshahi",
					upazilas: [
						{
							id: "11",
							name: "Rajshahi Sadar",
							unions: ["Rajshahi", "Poba", "Durgapur"],
						},
					],
				},
				{
					id: "7",
					name: "Bogura",
					upazilas: [
						{
							id: "12",
							name: "Bogura Sadar",
							unions: ["Bogura", "Shibganj", "Kahaloo"],
						},
					],
				},
			],
		},
		{
			id: "4",
			name: "Khulna",
			districts: [
				{
					id: "8",
					name: "Khulna",
					upazilas: [
						{
							id: "13",
							name: "Khulna Sadar",
							unions: ["Khulna", "Digholia", "Rupsa"],
						},
					],
				},
				{
					id: "9",
					name: "Jessore",
					upazilas: [
						{
							id: "14",
							name: "Jessore Sadar",
							unions: ["Jessore", "Chaugachha", "Jhikargachha"],
						},
					],
				},
			],
		},
		{
			id: "5",
			name: "Barisal",
			districts: [
				{
					id: "10",
					name: "Barisal",
					upazilas: [
						{
							id: "15",
							name: "Barisal Sadar",
							unions: ["Barisal", "Babuganj", "Agailjhara"],
						},
					],
				},
			],
		},
		{
			id: "6",
			name: "Sylhet",
			districts: [
				{
					id: "11",
					name: "Sylhet",
					upazilas: [
						{
							id: "16",
							name: "Sylhet Sadar",
							unions: ["Sylhet", "Companiganj", "Gowainghat"],
						},
					],
				},
			],
		},
		{
			id: "7",
			name: "Rangpur",
			districts: [
				{
					id: "12",
					name: "Rangpur",
					upazilas: [
						{
							id: "17",
							name: "Rangpur Sadar",
							unions: ["Rangpur", "Gangachara", "Kaunia"],
						},
					],
				},
			],
		},
		{
			id: "8",
			name: "Mymensingh",
			districts: [
				{
					id: "13",
					name: "Mymensingh",
					upazilas: [
						{
							id: "18",
							name: "Mymensingh Sadar",
							unions: ["Mymensingh", "Trishal", "Muktagachha"],
						},
					],
				},
			],
		},
	],
};

// Helper functions
export const getDivisions = () => {
	return bangladeshGeoData.divisions.map((division) => ({
		value: division.id,
		label: division.name,
	}));
};

export const getDistrictsByDivision = (divisionId) => {
	const division = bangladeshGeoData.divisions.find((d) => d.id === divisionId);
	if (!division) return [];

	return division.districts.map((district) => ({
		value: district.id,
		label: district.name,
	}));
};

export const getUpazilasByDistrict = (districtId) => {
	for (const division of bangladeshGeoData.divisions) {
		const district = division.districts.find((d) => d.id === districtId);
		if (district) {
			return district.upazilas.map((upazila) => ({
				value: upazila.id,
				label: upazila.name,
			}));
		}
	}
	return [];
};

export const getUnionsByUpazila = (upazilaId) => {
	for (const division of bangladeshGeoData.divisions) {
		for (const district of division.districts) {
			const upazila = district.upazilas.find((u) => u.id === upazilaId);
			if (upazila) {
				return upazila.unions.map((union) => ({
					value: union,
					label: union,
				}));
			}
		}
	}
	return [];
};

export const getLocationNames = (
	divisionId,
	districtId,
	upazilaId,
	unionName
) => {
	const division = bangladeshGeoData.divisions.find((d) => d.id === divisionId);
	if (!division) return null;

	const district = division.districts.find((d) => d.id === districtId);
	if (!district) return null;

	const upazila = district.upazilas.find((u) => u.id === upazilaId);
	if (!upazila) return null;

	return {
		division: division.name,
		district: district.name,
		upazila: upazila.name,
		union: unionName,
	};
};
