export const siteConfig = {
    title: 'Armenian cuisine',
    description: 'armenian cuisine recipes',
    navItems: [
        { href: '/', label: 'Recipes' },
        { href: '/ingridients', label: 'Ingredients' },
        { href: '/about', label: 'About us' }
    ],
    pagesContent: {
        "/": {
            content: "recipes soon"
        },
        "/ingridients": {
            content: "ingredients soon"
        },
        "/about": {
            content: `
            <div class="flex flex-col gap-4">
  <p>
    Armenian cuisine is a celebration of <span class="">rich flavors, ancient traditions,</span> 
    and heartfelt hospitality. Each dish tells a story passed down through generations - 
    a story of family, love, and the joy of sharing food together.
  </p>

  <p>
    From fragrant herbs and sun-ripened vegetables to juicy meats grilled over open fire - 
    every bite captures the essence of Armenia’s land and spirit. 
    Fresh <span class="">lavash bread</span> baked in a traditional tonir oven, 
    tender <span class="">khorovats</span> (Armenian barbecue), 
    <span class="  ">dolma</span> wrapped in grape leaves, and creamy hummus 
    - each dish is made with warmth and soul.
  </p>

  <p>
    Armenian cuisine also delights with <span class="italic">rich soups</span> like 
    <span class="">spas</span> (yogurt soup) and 
    <span class="">khash</span>, vibrant salads with pomegranate and walnuts, 
    flavorful stews such as <span class="  ">harissa</span> and 
    <span class="">ghapama</span>, and sweet pastries filled with honey and nuts - 
    <span class="">pakhlava</span> and <span class="  ">gata</span>. 
    Every meal reflects centuries-old culinary art and deep respect for tradition.
  </p>

  <p>
    Our cuisine combines the best of <span class="">Eastern spice</span> and 
    <span class="">Mediterranean freshness</span>, creating a perfect harmony of taste. 
    It’s hearty, soulful, and always made with love.
  </p>

  <p>
    Come taste the warmth of Armenian tradition - where food is not just eaten, it’s felt.
  </p>

  <h3 class="text-2xl text-center my-4">Traditional Dishes of Armenian Cuisine:</h3>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside">
        <li>Lavash - traditional thin flatbread baked in a tonir oven</li>
        <li>Khorovats - Armenian-style grilled meat</li>
        <li>Dolma - grape leaves stuffed with rice and minced meat</li>
        <li>Harissa - slow-cooked wheat and chicken porridge</li>
        <li>Spas - yogurt soup with herbs and barley</li>
        <li>Khash - traditional beef broth with garlic and lavash</li>
        <li>Ghapama - baked pumpkin stuffed with rice, fruits, and nuts</li>
        <li>Armenian pilaf with dried fruits and almonds</li>
        <li>Manti - baked dumplings with meat and yogurt sauce</li>
        <li>Basturma - air-dried cured beef with spices</li>
        <li>Pakhlava - layered pastry with nuts and honey syrup</li>
        <li>Gata - sweet pastry filled with butter and sugar</li>
        <li>Armenian coffee - strong, rich, and aromatic</li>
    </ul>
  </div>`
        }
    }
};