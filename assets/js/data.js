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
        description: "A brown satchel that actually looks like it was made by someone who cared. The leather has that warm, earthy tone that gets better the more you use it, with natural grain and slight variations that give it character instead of looking factory-flat. The bag holds its shape without feeling stiff, and the texture is smooth enough to feel premium but still rugged enough to handle daily use. The main compartment is roomy — not oversized, not cramped — just the right amount of space for your essentials: tablet, notebook, wallet, keys, whatever you usually carry. Inside, you get a couple of practical pockets that keep things organized instead of turning the bag into a black hole. The flap closes securely with a simple buckle or magnetic clasp depending on the model, and it doesn’t look bulky or overdesigned.The strap is adjustable, comfortable on the shoulder, and strong enough to take a beating without fraying.<br><br> Overall, it’s the kind of satchel that works for casual outfits, work, university, or travel. It’s clean, classic, and reliable — a piece you grab every day without thinking twice because it does exactly what it’s supposed to do and looks good doing it.",
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
    <div class="ml-3">
        <ul class="list-disc list-inside text-dark-slate-grey/80 leading-relaxed">
            <li>Only the best materials</li>
            <li>Ethically and locally made</li>
            <li>Durable stitching for long-lasting wear</li>
        </ul>
    </div>
    </div>
    `;
    return aboutHTML;
}