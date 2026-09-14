// BYSA CLO — Product Catalog Data
// Edit this file to update products. Replace placeholder images in the
// images folder with real photos named product-001.jpg ... product-026.jpg
// (or update the "image" field below to match your filenames).

const PRODUCTS = [
  { id: 1,  name: "Aurora Maxi Dress",        collection: "maxi",       price: 3499, image: "product-001.jpg", description: "A flowing floor-length maxi with a soft empire waist and dreamy floral print, cut for effortless movement.", fabric: "Georgette", sizes: ["XS","S","M","L","XL"] },
  { id: 2,  name: "Ivory Bloom Maxi",          collection: "maxi",       price: 3799, image: "product-002.jpg", description: "Romantic ivory maxi with delicate bloom embroidery along the neckline and flutter sleeves.", fabric: "Chiffon", sizes: ["S","M","L","XL"] },
  { id: 3,  name: "Twilight Wrap Maxi",        collection: "maxi",       price: 3999, image: "product-003.jpg", description: "A wrap-style maxi in deep twilight blue, cinched at the waist for a flattering silhouette.", fabric: "Crepe", sizes: ["XS","S","M","L"] },
  { id: 4,  name: "Sunset Tiered Maxi",        collection: "maxi",       price: 3599, image: "product-004.jpg", description: "Tiered ruffle maxi in warm sunset tones, perfect for golden-hour occasions.", fabric: "Georgette", sizes: ["S","M","L","XL"] },
  { id: 5,  name: "Pearl Bodycon",             collection: "bodycon",    price: 2899, image: "product-005.jpg", description: "Figure-hugging pearl-toned bodycon with a subtle sheen, designed to flatter every curve.", fabric: "Scuba Knit", sizes: ["XS","S","M","L"] },
  { id: 6,  name: "Noir Ribbed Bodycon",       collection: "bodycon",    price: 2699, image: "product-006.jpg", description: "Classic black ribbed bodycon with a sweetheart neckline — a timeless staple.", fabric: "Ribbed Knit", sizes: ["S","M","L"] },
  { id: 7,  name: "Rosewood Bodycon",          collection: "bodycon",    price: 2999, image: "product-007.jpg", description: "Deep rosewood bodycon with cutout waist detail for an elevated evening look.", fabric: "Satin", sizes: ["XS","S","M","L","XL"] },
  { id: 8,  name: "Champagne Shine Bodycon",   collection: "bodycon",    price: 3199, image: "product-008.jpg", description: "Champagne shimmer bodycon designed for statement nights out.", fabric: "Lurex Knit", sizes: ["S","M","L"] },
  { id: 9,  name: "Everyday Linen Mini",       collection: "mini",       price: 1999, image: "product-009.jpg", description: "Breezy linen mini with a relaxed fit — perfect for casual daytime wear.", fabric: "Linen Blend", sizes: ["XS","S","M","L","XL"] },
  { id: 10, name: "Gingham Sunday Mini",       collection: "mini",       price: 2199, image: "product-010.jpg", description: "Playful gingham mini with puff sleeves and a cinched waist tie.", fabric: "Cotton", sizes: ["S","M","L"] },
  { id: 11, name: "Blush Halter Mini",         collection: "mini",       price: 2399, image: "product-011.jpg", description: "Soft blush halter-neck mini with a fitted bodice and flared skirt.", fabric: "Crepe", sizes: ["XS","S","M","L"] },
  { id: 12, name: "Denim Button Mini",         collection: "mini",       price: 2099, image: "product-012.jpg", description: "Classic denim button-front mini dress for an effortless everyday edit.", fabric: "Denim", sizes: ["S","M","L","XL"] },
  { id: 13, name: "Soft Days Casual",          collection: "casual",     price: 1799, image: "product-013.jpg", description: "Lightweight everyday dress in a soft muted palette, designed for all-day comfort.", fabric: "Cotton Blend", sizes: ["XS","S","M","L","XL"] },
  { id: 14, name: "Weekend Wrap Casual",       collection: "casual",     price: 1899, image: "product-014.jpg", description: "Easy wrap-style casual dress that transitions from errands to brunch.", fabric: "Rayon", sizes: ["S","M","L"] },
  { id: 15, name: "Picnic Puff Sleeve",        collection: "casual",     price: 2099, image: "product-015.jpg", description: "Puff-sleeve casual dress with a cinched waist, made for slow afternoons.", fabric: "Cotton", sizes: ["XS","S","M","L"] },
  { id: 16, name: "City Stroll Shirt Dress",   collection: "casual",     price: 2199, image: "product-016.jpg", description: "Relaxed shirt-dress silhouette with a tie belt — a wardrobe essential.", fabric: "Poplin", sizes: ["S","M","L","XL"] },
  { id: 17, name: "Golden Hour Occasion Gown", collection: "occasion",   price: 4999, image: "product-017.jpg", description: "Statement occasion gown with a fitted bodice and dramatic flowing train.", fabric: "Satin", sizes: ["XS","S","M","L"] },
  { id: 18, name: "Emerald Evening Gown",      collection: "occasion",   price: 5299, image: "product-018.jpg", description: "Rich emerald gown with a thigh-high slit, made for red-carpet moments.", fabric: "Velvet", sizes: ["S","M","L"] },
  { id: 19, name: "Midnight Sequin Occasion",  collection: "occasion",   price: 5499, image: "product-019.jpg", description: "All-over sequin occasion dress that catches the light with every move.", fabric: "Sequin Mesh", sizes: ["XS","S","M","L","XL"] },
  { id: 20, name: "Blush Tulle Occasion",      collection: "occasion",   price: 4799, image: "product-020.jpg", description: "Dreamy blush tulle gown with a corseted bodice, built for milestone nights.", fabric: "Tulle", sizes: ["S","M","L"] },
  { id: 21, name: "Made-For-You Bridal Blush", collection: "customized", price: 6499, image: "product-021.jpg", description: "Fully customizable bridal-inspired piece — tell us your measurements, colors and embellishments.", fabric: "Made to Order", sizes: ["Custom"] },
  { id: 22, name: "Signature Monogram Maxi",   collection: "customized", price: 4299, image: "product-022.jpg", description: "Your maxi, your way — choose fabric, color and add a hand-embroidered monogram.", fabric: "Made to Order", sizes: ["Custom"] },
  { id: 23, name: "Bespoke Bodycon Edit",      collection: "customized", price: 3699, image: "product-023.jpg", description: "A bodycon silhouette tailored to your exact fit and favorite shade.", fabric: "Made to Order", sizes: ["Custom"] },
  { id: 24, name: "Custom Occasion Statement", collection: "customized", price: 5999, image: "product-024.jpg", description: "Design your dream occasion piece with us — fully personalized from sketch to stitch.", fabric: "Made to Order", sizes: ["Custom"] },
  { id: 25, name: "Personalized Casual Set",   collection: "customized", price: 2599, image: "product-025.jpg", description: "Everyday dress customized in your chosen colorway and fit preferences.", fabric: "Made to Order", sizes: ["Custom"] },
  { id: 26, name: "Custom Mini Edit",          collection: "customized", price: 2899, image: "product-026.jpg", description: "A mini dress designed around your vision — fabric, length and detailing all your choice.", fabric: "Made to Order", sizes: ["Custom"] }
];

const COLLECTIONS = [
  { key: "all",        label: "All" },
  { key: "maxi",        label: "Maxi" },
  { key: "bodycon",     label: "Bodycon" },
  { key: "mini",        label: "Mini" },
  { key: "casual",      label: "Casual" },
  { key: "occasion",    label: "Occasion" },
  { key: "customized",  label: "Customized" }
];

const INSTAGRAM_HANDLE = "bysa.clo";
const INSTAGRAM_URL = "https://instagram.com/bysa.clo";
