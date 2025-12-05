// This mimics the 'Products' table from Database Schema (Just sample data)
const products = [
    {
        id: 1,
        name: "Vintage Denim Jacket",
        price: 800,
        sale_price: 560, // Calculated -30%
        category: "Men",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
        description: "High-quality vintage denim jacket with a classic cut. Perfect for casual outings and layering.",
        material: "Denim",
        stock: 15,
        sizes: ["S", "M", "L", "XL"],
        colors: ["blue", "black", "gray", "white"],
        factory_name: "Cairo Textiles Factory" // Matches 'BusinessProfile' in Class Diagram
    },
    {
        id: 2,
        name: "Egyptian Cotton Roll",
        price: 4500,
        sale_price: 2000,
        category: "Fabrics",
        image: "https://images.unsplash.com/photo-1746737198845-e1e74bea786e?w=400&auto=format&fit=crop",
        description: "Premium 100% Egyptian cotton fabric roll (50 Meters). Ideal for factories and wholesale buyers.",
        material: "Egyptian Cotton",
        stock: 50,
        sizes: ["Roll (50m)", "Roll (100m)"],
        colors: ["brown", "white", "beige"],
        factory_name: "El Mahalla Weaving Co."
    },
    {
        id: 3,
        name: "Urban White Hoodie",
        price: 550,
        sale_price: null,
        category: "Unisex",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500&auto=format&fit=crop",
        description: "Heavyweight cotton hoodie designed for maximum comfort and warmth. Double-stitched seams.",
        material: "Cotton Blend",
        stock: 100,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "gray", "black"],
        factory_name: "Modern Wear Workshop"
    },
    {
        id: 4,
        name: "Classic Leather Bag",
        price: 1200,
        sale_price: null,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=500&auto=format&fit=crop",
        description: "Genuine leather satchel with adjustable straps. Durable and stylish for work or travel.",
        material: "Leather",
        stock: 5,
        sizes: ["One Size"],
        colors: ["brown", "black"],
        factory_name: "Leather Craftsmen Ltd."
    }
];

// Helper to find product by ID (Simulates a DB Query)
function getProductById(id) {
    return products.find(p => p.id == id);
}

function getAboutThisItem(id) {
    const product = getProductById(id);
    const aboutHTML = `
    <div class="m-3 flex flex-col">
     <div>
      <h2 class="text-2xl font-bold mb-4">About This Item</h2>
    </div>
    <div class="ml-3">
        <ul class="list-disc list-inside text-gray-700">
            <li><strong>Material:</strong> ${product.material}</li>
            <li><strong>Available Sizes:</strong> ${product.sizes.join(', ')}</li>
            <li><strong>Available Colors:</strong> ${product.colors.join(', ')}</li>
        </ul>
    </div>
    </div>
    `;
    return aboutHTML;
}