
export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  description: string;
  imageUrl: string;
  hostId: string;
  hostName: string;
  rating: number;
  reviews: number;
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "Modern Studio in Downtown",
    location: "New York, NY",
    price: 120,
    description: "Cozy studio apartment in the heart of downtown. Perfect for solo travelers or couples looking to explore the city. Features a comfortable queen bed, full kitchen, and amazing city views. Walking distance to restaurants, shops, and public transportation.",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    hostId: "101",
    hostName: "Emma Thompson",
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    title: "Luxury Beachfront Condo",
    location: "Miami, FL",
    price: 250,
    description: "Experience luxury living in this stunning beachfront condo. Wake up to ocean views and fall asleep to the sound of waves. This 2-bedroom condo features modern amenities, a spacious balcony, and direct beach access. Perfect for your dream beach vacation.",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    hostId: "102",
    hostName: "Michael Rodriguez",
    rating: 4.9,
    reviews: 89
  },
  {
    id: "3",
    title: "Rustic Mountain Cabin",
    location: "Denver, CO",
    price: 175,
    description: "Escape to this charming mountain cabin surrounded by nature. This authentic log cabin offers 3 bedrooms, a cozy fireplace, and breathtaking mountain views. Perfect for hiking enthusiasts and those looking to disconnect from the city life.",
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2765&q=80",
    hostId: "103",
    hostName: "Sarah Johnson",
    rating: 4.7,
    reviews: 65
  },
  {
    id: "4",
    title: "Historic Downtown Loft",
    location: "Chicago, IL",
    price: 135,
    description: "Stay in a piece of history with this beautifully renovated loft in a historic building. High ceilings, exposed brick walls, and modern amenities come together to create a unique urban experience. Located in the vibrant downtown area with everything you need nearby.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80",
    hostId: "104",
    hostName: "David Wilson",
    rating: 4.6,
    reviews: 78
  },
  {
    id: "5",
    title: "Peaceful Garden Cottage",
    location: "Seattle, WA",
    price: 110,
    description: "Find serenity in this charming garden cottage. The private cottage is nestled in a lush garden setting, offering a tranquil retreat after a day of exploration. Features a comfortable queen bed, a small kitchenette, and a private patio.",
    imageUrl: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    hostId: "105",
    hostName: "Jennifer Brown",
    rating: 4.9,
    reviews: 42
  },
  {
    id: "6",
    title: "Stylish Urban Apartment",
    location: "Los Angeles, CA",
    price: 195,
    description: "Experience LA living in this stylish apartment in the heart of the city. The modern apartment features upscale furnishings, a gourmet kitchen, and city views. Located near trendy restaurants, shopping, and entertainment venues.",
    imageUrl: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    hostId: "106",
    hostName: "Robert Taylor",
    rating: 4.7,
    reviews: 96
  }
];

export const getListingById = (id: string): Listing | undefined => {
  return listings.find(listing => listing.id === id);
};
