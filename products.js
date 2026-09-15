// BYSA CLO — Product Catalog Data
// Sourced from @bysa.clo Instagram. Images are placeholders — replace
// product-001.jpg ... product-029.jpg with real photos (same filenames)
// whenever you have clean shots ready.

const PRODUCTS = [
  { id: 1,  name: "Navy Satin Wrap Robe Dress",              collection: "casual",     price: 2600, image: "product-001.jpg", description: "Deep navy satin robe-style dress with a tie-front silhouette and a soft sheen. Relaxed, elegant drape for effortless everyday wear.", fabric: "Satin", sizes: ["XS","S","M","L","XL"] },
  { id: 2,  name: "Berry Ballgown \"Disney Princess\" Dress", collection: "occasion",   price: 2600, image: "product-002.jpg", description: "Fitted berry/magenta satin bodice with structured puff sleeves flowing into a dramatic, voluminous full skirt. A true statement gown.", fabric: "Satin", sizes: ["XS","S","M","L"] },
  { id: 3,  name: "Rust Terracotta Abaya Set",                collection: "customized", price: 2400, image: "product-003.jpg", description: "Oversized-sleeve rust terracotta abaya with a matching flowing hijab, made to order and tailored to you.", fabric: "Cotton Blend", sizes: ["Custom"] },
  { id: 4,  name: "Mustard Gold Draped Kaftan",                collection: "customized", price: 2300, image: "product-004.jpg", description: "Mustard gold kaftan with soft ruched draping at the waist, a relaxed silhouette, and a matching hijab. Custom made.", fabric: "Viscose", sizes: ["Custom"] },
  { id: 5,  name: "Steel Blue Satin Peplum Co-ord",            collection: "casual",     price: 3500, image: "product-005.jpg", description: "Two-piece set in steel blue satin: a cropped peplum-style top paired with a long, flowy matching skirt.", fabric: "Satin", sizes: ["XS","S","M","L"] },
  { id: 6,  name: "Rose Pink Two-Piece with Marble Dupatta",   collection: "casual",     price: 2100, image: "product-006.jpg", description: "High-low peplum top with flared bell sleeves in rose pink, paired with a flowy rose maxi skirt and an abstract marble-print dupatta.", fabric: "Crepe", sizes: ["XS","S","M","L"], soldOut: true },
  { id: 7,  name: "White Polka Dot Bell-Sleeve Maxi",          collection: "maxi",       price: 2300, image: "product-007.jpg", description: "Long bell sleeves, allover black polka dot print on white, flowing full-length maxi skirt. Sold as a skirt + top set.", fabric: "Cotton", sizes: ["XS","S","M","L"] },
  { id: 8,  name: "White Polka Dot Corset-Back Midi",          collection: "mini",       price: 2300, image: "product-008.jpg", description: "Puff sleeves with lace-up corset detailing on the back and a tea-length flared skirt, in the same polka dot fabric. Sold as a skirt + top set.", fabric: "Cotton", sizes: ["XS","S","M","L"] },
  { id: 9,  name: "Pale Yellow Chiffon Dress",                 collection: "casual",     price: 2900, image: "product-009.jpg", description: "Soft pale yellow chiffon with oversized flowy sleeves and a relaxed maxi silhouette. Light and airy.", fabric: "Chiffon", sizes: ["XS","S","M","L","XL"] },
  { id: 10, name: "Wine Burgundy Twirl Dress",                 collection: "occasion",   price: 2800, image: "product-010.jpg", description: "Deep wine dress with puff sleeves and a fitted bodice flowing into a full circle skirt — beautiful movement in motion.", fabric: "Satin", sizes: ["XS","S","M","L"] },
  { id: 11, name: "Powder Blue \"Cinderella\" Gown",           collection: "occasion",   price: 2800, image: "product-011.jpg", description: "Pale powder-blue gown with a soft, voluminous skirt that catches the wind beautifully. Pure fairytale energy.", fabric: "Satin", sizes: ["XS","S","M","L"] },
  { id: 12, name: "Cream Lace-Sleeve Dress",                   collection: "occasion",   price: 2700, image: "product-012.jpg", description: "Cream dress with delicate lace trim detailing along the sleeves for a soft, romantic finish.", fabric: "Satin & Lace", sizes: ["XS","S","M","L"] },
  { id: 13, name: "Soft Pink Tie-Waist Maxi",                  collection: "maxi",       price: 2100, image: "product-013.jpg", description: "Blush pink flowy maxi with a tie-waist and long sleeves. One of our most-loved everyday styles.", fabric: "Crepe", sizes: ["XS","S","M","L","XL"] },
  { id: 14, name: "Chartreuse Olive Satin Dress",              collection: "maxi",       price: 2100, image: "product-014.jpg", description: "Long-sleeve satin dress in a chartreuse olive-yellow tone with a flowy maxi skirt.", fabric: "Satin", sizes: ["XS","S","M","L"] },
  { id: 15, name: "Butter Yellow Oversized Kaftan",            collection: "customized", price: 2100, image: "product-015.jpg", description: "Soft butter-yellow oversized kaftan with relaxed dropped-shoulder sleeves. Custom made to order.", fabric: "Viscose", sizes: ["Custom"] },
  { id: 16, name: "Black Leopard-Print Skirt",                 collection: "casual",     price: 1200, image: "product-016.jpg", description: "A flowing leopard-print maxi skirt that pairs easily with any top — an instant wardrobe favorite.", fabric: "Crepe", sizes: ["XS","S","M","L","XL"] },
  { id: 17, name: "Coral Rust Ruffled-Sleeve Abaya",           collection: "occasion",   price: 2100, image: "product-017.jpg", description: "Rust coral abaya with dramatic ruffled bell sleeves and a full flowing skirt. One of our most-loved designs.", fabric: "Crepe", sizes: ["XS","S","M","L"] },
  { id: 18, name: "Soft Yellow Flowy Dress",                   collection: "customized", price: 2100, image: "product-018.jpg", description: "Pale yellow flowy dress with dropped shoulders and relaxed sleeves. Can be made to order in a different color.", fabric: "Chiffon", sizes: ["Custom"] },
  { id: 19, name: "White Oversized Abaya with Leopard Scarf",  collection: "casual",     price: 2800, image: "product-019.jpg", description: "Cream white relaxed abaya with dropped shoulders and a floor-length silhouette, paired with a leopard-print scarf.", fabric: "Cotton Blend", sizes: ["XS","S","M","L","XL"] },
  { id: 20, name: "Royal Blue Pearl-Trim Satin Dress",         collection: "occasion",   price: 1900, image: "product-020.jpg", description: "Rich royal blue satin in a flowy silhouette with a row of pearl button detailing down the sleeve. A fan favorite.", fabric: "Satin", sizes: ["XS","S","M","L"] },
  { id: 21, name: "Cream & Grey Two-Tone Dress",               collection: "casual",     price: 1900, image: "product-021.jpg", description: "Cream bodice with a soft grey side drape for a relaxed, flowy two-tone finish.", fabric: "Crepe", sizes: ["XS","S","M","L"] },
  { id: 22, name: "Wine Ruffled Satin Dress with Pearl Belt",  collection: "occasion",   price: 2200, image: "product-022.jpg", description: "Deep wine satin dress with a cascading ruffle panel down the front and a pearled belt at the waist.", fabric: "Satin", sizes: ["XS","S","M","L"] },
  { id: 23, name: "Pink Robe Birthday Dress",                  collection: "customized", price: 2100, image: "product-023.jpg", description: "Soft pink wrap-style robe dress with wide relaxed sleeves and a drawstring waist. A best-selling custom piece.", fabric: "Satin", sizes: ["Custom"] },
  { id: 24, name: "Pink Beaded Ballgown",                      collection: "customized", price: 2600, image: "product-024.jpg", description: "Off-shoulder corset bodice with beaded embroidery detailing, dramatic sleeves, and a full satin ballgown skirt.", fabric: "Satin", sizes: ["Custom"] },
  { id: 25, name: "Dusty Pink Gold-Trim Flowy Dress",          collection: "customized", price: 2100, image: "product-025.jpg", description: "Dusty mauve-pink satin with gold trim along the edges and oversized flowy sleeves.", fabric: "Satin", sizes: ["Custom"] },
  { id: 26, name: "Bright Yellow Tiered Ruffle Dress",         collection: "maxi",       price: 2100, image: "product-026.jpg", description: "Bold yellow dress with a tiered ruffled skirt and side drawstring-bow ties at the waist.", fabric: "Cotton", sizes: ["XS","S","M","L","XL"] },
  { id: 27, name: "Maroon Satin Dress",                        collection: "maxi",       price: 2200, image: "product-027.jpg", description: "Deep maroon satin dress with puff sleeves — quiet, elegant everyday luxury.", fabric: "Satin", sizes: ["XS","S","M","L"] },
  { id: 28, name: "White Sheer Chiffon Twirl Dress",           collection: "occasion",   price: 2100, image: "product-028.jpg", description: "Flowing white sheer chiffon dress with beautiful movement — made for twirling.", fabric: "Chiffon", sizes: ["XS","S","M","L"] },
  { id: 29, name: "Wine Velvet Dress with Beaded Belt",        collection: "occasion",   price: 2200, image: "product-029.jpg", description: "Deep wine dress with a delicate beaded waist belt and puff sleeves. Perfect for a special dinner.", fabric: "Velvet", sizes: ["XS","S","M","L","XL"] }
];

const COLLECTIONS = [
  { key: "all",        label: "All" },
  { key: "maxi",        label: "Maxi" },
  { key: "occasion",    label: "Occasion" },
  { key: "casual",      label: "Casual" },
  { key: "mini",        label: "Mini" },
  { key: "customized",  label: "Customized" }
];

const INSTAGRAM_HANDLE = "bysa.clo";
const INSTAGRAM_URL = "https://instagram.com/bysa.clo";
