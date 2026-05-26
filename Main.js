// ── MODAL DATA ──
const modalData = {
  poultry: {
    tag: "Livestock — Poultry",
    title: "Poultry (Broilers And Layers)",
    img: "picture/chicken.png",
    content: `
      <h4>Poultry in Pampanga</h4>
      <p>Pampanga is one of the leading poultry-producing provinces in the Philippines. Sitting at the center of Central Luzon, the province is a critical supply hub that feeds Metro Manila and nearby regions. Poultry farming is one of the most significant agricultural sectors in the region, supporting thousands of local people from large commercial growers to tiny home farmers.</p>

      <h4>What is a Broiler?</h4>
      <p>A <strong>broiler</strong> is a chicken specifically raised for its meat. Broilers are bred to grow quickly, typically reaching market weight in just 35 to 42 days. They are known for their tender, white meat and are the primary source of chicken sold in wet markets, supermarkets, and fast-food restaurants across the country. In Pampanga, broiler farming is largely done through contract growing arrangements between local farmers and large poultry corporations.</p>

      <h4>What is a Layer?</h4>
      <p>A <strong>layer</strong> is a hen raised specifically for egg production rather than meat. A healthy, well-managed layer hen can produce more than 300 eggs in a single year. These eggs supply wet markets, grocery stores, bakeries, and food manufacturers throughout Luzon. Pampanga's proximity to major feed mills and its strong road network make it an ideal location for layer operations.</p>

      <h4>How Do You Raise Them?</h4>
      <p>Raising poultry in Pampanga follows a structured process to ensure healthy birds and consistent production:</p>
      <ul>
        <li><strong>Housing:</strong> Chickens are kept in enclosed, well-ventilated poultry houses that protect them from weather, predators, and disease. Footbaths, access restrictions, and disinfection are examples of biosecurity procedures that are closely adhered to.</li>
        <li><strong>Day-Old Chicks  :</strong> Farming starts with the purchase of day-old chicks from accredited hatcheries. Broilers are placed in a brooder house with controlled temperature and lighting for the first week.</li>
        <li><strong>Grow-Out Period:</strong> Broilers are grown for 5 to 6 weeks. Layers begin producing eggs at around 18 to 20 weeks of age and continue for about 12 months.</li>
        <li><strong>Health Management:</strong> Vaccination schedules for Newcastle Disease, Infectious Bronchitis, and Avian Influenza are followed. Regular monitoring for disease signs is essential.</li>
        <li><strong>Waste Management:</strong> Chicken litter is composted and converted into organic fertilizer, helping nearby crop farmers reduce input costs.</li>
      </ul>

      <h4>What Do They Eat?</h4>
      <p>Poultry feed is carefully formulated to meet the nutritional needs of each growth stage:</p>
      <ul>
        <li><strong>Starter Feed (0-2 weeks):</strong> High in protein (20-23%) to support rapid early growth and strong bone development.</li>
        <li><strong>Grower Feed (3-4 weeks):</strong> Slightly lower protein (18-20%), balanced with energy sources like corn to support muscle growth.</li>
        <li><strong>Finisher Feed (5-6 weeks for broilers):</strong> Lower protein, higher energy feed to maximize meat weight before market.</li>
        <li><strong>Layer Feed:</strong> Enriched with calcium (from oyster shell or limestone) to support strong eggshell formation, alongside protein and vitamins.</li>
        <li><strong>Key ingredients</strong> include yellow corn (main energy source), soybean meal (protein), rice bran, fish meal, vitamins, and minerals. To lower feed costs, research is being done on locally accessible substitutes including copra meal and black army fly larvae.</li>
      </ul>
    `
  },

  swine: {
    tag: "Livestock — Swine",
    title: "Swine / Pigs",
    img: "picture/pig.png",
    content: `
      <h4>Swine in Pampanga</h4>
      <p>Hog raising is deeply woven into the identity of Pampanga. The province's growing swine business is directly related to its famous culinary traditions, which include lechon, sisig, dinuguan, and more. Pig farms in Pampanga range from small backyard operations raising one or two heads, to large commercial enterprises supplying thousands of hogs monthly to Metro Manila's wet markets and meat processing plants.</p>

      <h4>What is a Broiler Pig? (Market Hog)</h4>
      <p>A <strong>market hog</strong>, or pig kept only for pork output, is the equivalent of a broiler in swine farming. These pigs are grown from weaning (around 3-4 weeks old) to market weight of 90-110 kg, typically in 5 to 6 months. Landrace, Large White, and Duroc are popular breeds farmed in Pampanga that are frequently crossed for improved growth rates and meat quality.</p>

      <h4>What is a Sow? (Breeding Pig)</h4>
      <p>A <strong>sow</strong> is a female pig kept for breeding purposes. She gives birth to a litter of piglets (usually 10-14 per litter) and can farrow (give birth) two to three times per year. Piglets are weaned at 3 to 4 weeks and then either raised on the same farm or sold to grow-out operations. The breeding stock is the backbone of any sustainable swine operation.</p>

      <h4>How Do You Raise Them?</h4>
      <ul>
        <li><strong>Housing:</strong> Pigs are raised in concrete pens with slatted floors for hygiene and waste drainage. To avoid heat stress, adequate ventilation, shade, and cooling devices are crucial, particularly in Pampanga's torrid environment.</li>
        <li><strong>Biosecurity:</strong> Strict biosecurity is unavoidable in the aftermath of ASF outbreaks; all-in-all-out systems, travel limitations, vehicle disinfection, and perimeter fencing are now standard.</li>
        <li><strong>Grow-Out:</strong> Piglets start on a nursery diet, then transition to grower and finisher feeds as they gain weight. Pigs are ready for market at around 5-6 months.</li>
        <li><strong>Health Management:</strong> Vaccination against Hog Cholera (Classical Swine Fever), FMD (Foot-and-Mouth Disease), and regular deworming are critical. ASF has no vaccine, so prevention through biosecurity is the only defense.</li>
      </ul>

      <h4>What Do They Eat?</h4>
      <ul>
        <li><strong>Starter Feed (weaning to ~15 kg):</strong> High protein (20-22%) with easily digestible ingredients like milk by-products, fishmeal, and soybean meal to support young gut development.</li>
        <li><strong>Grower Feed (15-60 kg):</strong> Balanced protein (16-18%) and energy from corn and rice bran to build muscle mass efficiently.</li>
        <li><strong>Finisher Feed (60 kg to market):</strong> Higher energy, lower protein (14-16%) to maximize weight gain and improve meat quality before slaughter.</li>
        <li><strong>Sow Feed:</strong> Specially formulated for gestation and lactation, with higher calcium, phosphorus, and vitamins to support piglet development and milk production.</li>
        <li><strong>Common ingredients:</strong> Yellow corn, soybean meal, rice bran, copra meal, fishmeal, salt, vitamins, and minerals. Some small-scale farmers supplement with vegetable waste and kitchen scraps, but this needs to be well cooked to lower the risk of illness.</li>
      </ul>
    `
  },

  carabao: {
    tag: "Livestock — Carabao",
    title: "The Philippine Carabao",
    img: "picture/carabao.png",
    content: `
      <h4>Carabao in Pampanga</h4>
      <p>The carabao (<em>Bubalus bubalis carabanesis</em>) is the national animal of the Philippines and a living symbol of the Filipino farmer's strength and endurance. Carabaos have been plowing rice terraces, carrying sugarcane, and transporting harvests over the fertile plains of Central Luzon in Pampanga for many years. Even today, with modern machinery available, the carabao remains an important part of farming life and cultural identity in the province.</p>

      <h4>What is a Draft Carabao?</h4>
      <p>A <strong>draft carabao</strong> is one raised and trained primarily for farm labor. These animals are used to pull carts, plow fields, and move cargo, particularly in places like upland farms and narrow rice paddies where tractors are difficult to operate. Draft carabaos are valued for their strength, calm temperament, and ability to work long hours in humid tropical heat. A mature carabao can weigh between 400 and 900 kg and live for 18 to 25 years.</p>

      <h4>What is a Dairy Carabao?</h4>
      <p>A <strong>dairy carabao</strong> is a female (called a <em>caraballa</em>) raised specifically for milk production. Carabao milk is richer and creamier than cow's milk, with a fat content of 7 to 8%, compared to cow's milk at around 3.5%.   This makes it perfect for making highly valued Filipino treats like pastillas de leche (milk sweet) and kesong puti (fresh white cheese), both of which are significant cottage enterprises in Pampanga and nearby Bulacan. A well-managed dairy carabao produces 3 to 5 liters of milk per day.</p>

      <h4>How Do You Raise Them?</h4>
      <ul>
        <li><strong>Housing:</strong> Carabaos are typically kept in simple open-sided sheds with a concrete or earthen floor. They need access to shade and a wallow (muddy pool or trough) to cool down, as they have fewer sweat glands than other animals and are highly sensitive to heat.</li>
        <li><strong>Handling and Training:</strong> Draft carabaos are trained starting at 2 to 3 years old. Nose-ringing is commonly practiced to allow handlers to guide the animal. Gentle, consistent handling builds trust and makes the carabao easier to manage.</li>
        <li><strong>Reproduction:</strong> Around two years of age is when carabaos achieve sexual maturity. For roughly ten to eleven months, a cow (female) bears her calf. At six to eight months, calves are weaned. To enhance indigenous bloodlines with high-producing animals like the Murrah buffalo, the Philippine Carabao Center (PCC) provides artificial insemination (AI) programs.</li>
        <li><strong>Health Management:</strong> Internal parasites, skin disorders, and hemorrhagic septicemia (pasteurellosis) are common illnesses. Hoof care, immunization, and regular deworming are crucial. Additionally, carabaos should be checked for ticks, which can transmit blood parasites.</li>
      </ul>

      <h4>What Do They Eat?</h4>
      <ul>
        <li><strong>Grasses and Forages:</strong> Carabaos are grazers by nature. The most popular forage in Pampanga, napier grass, paragrass, guinea grass, and natural pasture grasses are examples of common feeds. Each day, they can eat 30 to 40 kg of fresh forage.</li>
        <li><strong>Crop By-Products:</strong> Rice straw is a staple dry-season feed, often mixed with molasses or urea to improve its nutritional value. Sugarcane tops, corn stalks, and banana trunks are also used.</li>
        <li><strong>Concentrate Supplements:</strong> For dairy carabaos or working animals, concentrate feeds made from rice bran, corn, copra meal, and soybean meal are given to meet higher energy and protein demands.</li>
        <li><strong>Water:</strong> A carabao needs 30 to 50 liters of clean, fresh water per day, and more when it's hot outside or they have a lot of labor to do.</li>
      </ul>
    `
  },

  cattle: {
    tag: "Livestock — Cattle",
    title: "Cattle",
    img: "picture/cattle.png",
    content: `
      <h4>Cattle in Pampanga</h4>
      <p>Cattle raising is a developing livestock industry in Pampanga and throughout Central Luzon, however it is not as widely used as poultry or swine. Cattle produce dung for organic fertilizer, leather for industry, and beef for local consumption. Using cattle to graze on fallow fields and turning their waste into compost for rice and vegetable crops, small-scale cattle farmers sometimes combine their operations with crop production.</p>

      <h4>What is a Beef Cattle?</h4>
      <p>Breeds of cattle raised mainly for meat production are known as <strong>beef cattle</strong>. The Brahman, which is valued for its ability to withstand heat and sickness, Simmental, and regional crossbreeds are common breeds in the Philippines. Usually during the course of 18 to 24 months, beef cattle are raised to a slaughter weight of 350-500 kg. Their meat is supplied to supermarkets, wet markets, and the rapidly expanding processed meat industry.</p>

      <h4>What is a Dairy Cow?</h4>
      <p>A female cattle breed raised especially for milk is called a <strong>dairy cow</strong>. In the Philippines, <strong>Holstein-Friesian</strong> and <strong>Jersey</strong> crossbreeds that are suitable for tropical climates are popular dairy breeds. Ten to twenty liters of milk can be produced daily by a productive dairy cow. Although cow's milk is becoming more and more popular for the production of fresh milk, cheese, and dairy products, carabao milk still rules the local dairy scene.</p>

      <h4>How Do You Raise Them?</h4>
      <ul>
        <li><strong>Housing:</strong> Open barns with clean floors, proper ventilation, and distinct spaces for feeding, resting, and watering are used to keep cattle. Drainage is essential for maintaining hygiene and preventing hoof illnesses.</li>
        <li><strong>Pasture Management:</strong> In order to minimize overgrazing and allow grass to recover, many cattle farmers in Pampanga use rotational grazing, which involves splitting pasture land into portions and rotating the herd.</li>
        <li><strong>Grow-Out:</strong> Calves are weaned at 3 to 4 months and then moved to a growing pen. They are fed a combination of forage and concentrate feeds until they reach market weight.</li>
        <li><strong>Health Management:</strong> The law mandates vaccination against anthrax, hemorrhagic septicemia, and foot-and-mouth disease (FMD). For cattle to be healthy, regular hoof trimming, tick management, and deworming are also crucial.</li>
        <li><strong>Breeding:</strong> To improve local cattle genetics and increase output, the government promotes artificial insemination using semen from superior bulls.</li>
      </ul>

      <h4>What Do They Eat?</h4>
      <ul>
        <li><strong>Forages and Grasses:</strong> Napier grass, guinea grass, stargrass, and legumes like rensonii and ipil-ipil make up the main food. A fully grown cow consumes 50-70 kg of new grass per day.</li>
        <li><strong>Crop By-Products:</strong> Common dry-season meals include rice straw, corn stalks, sugarcane bagasse, and banana by-products. The digestibility and nutritional value of rice straw are significantly increased when it is treated with urea (also known as urea-treated rice straw, or UTRS).</li>
        <li><strong>Concentrate Feed:</strong> Forage is supplemented with a mixture of rice bran, corn bran, copra meal, and soybean meal, particularly for growing cattle and breastfeeding dairy cows that require extra protein and energy.</li>
        <li><strong>Minerals and Vitamins:</strong> To avoid deficiencies that impact growth, reproduction, and milk supply, free-choice mineral blocks (salt licks) containing calcium, phosphorus, and trace minerals are offered.</li>
        <li><strong>Water:</strong> Cattle require 40 to 60 liters of clean water per day, with pregnant cows and the hot dry season requiring more.</li>
      </ul>
    `
  },
  duck: {
    tag: "Livestock — Ducks",
    title: "Ducks (Itik)",
    img: "picture/duck.png",
    content: `
      <h4>Ducks in Pampanga</h4>
      <p>Duck raising, locally known as itik farming, is one of the most culturally significant livestock industries in Pampanga and the surrounding provinces of Central Luzon. Two of the most famous foods in the Philippines originate from ducks: <strong>balut</strong> (fertilized duck egg) and <strong>itlog na maalat</strong> (salted egg), both of which have strong ties to Kapampangan cuisine and are exported both locally and globally.</p>
 
      <h4>What is a Balut Duck? (Layer Duck)</h4>
      <p>A <strong>layer duck</strong>, specifically the native Philippine duck breed called Pateros or Itik Pinas, is raised primarily for egg production. Because of their great egg production and high-quality eggs for balut manufacture, these ducks are highly valued. An effective layer duck can lay between 180 and 250 eggs annually. For balut, the eggs are incubated for 17 to 18 days; for salted eggs, they are kept in salt and ash.</p>
 
      <h4>What is a Meat Duck?</h4>
      <p>A <strong>meat duck</strong> is raised for its flesh rather than eggs. The <strong>Pekin duck</strong> is the most common breed used for meat production due to its fast growth rate and large body size, reaching market weight of 2.5 to 3 kg in just 7 to 8 weeks. Duck meat is popular in Filipino and Chinese-influenced recipes because it is leaner than hog and has a deep, unique flavor.</p>
 
      <h4>How Do You Raise Them?</h4>
      <ul>
        <li><strong>Housing:</strong> Intensive, semi-intensive, or free-range strategies can be used to raise ducks. Many farmers in Pampanga employ the traditional pastural method, which drastically lowers feed costs by letting ducks roam freely in harvested rice fields to eat leftover grain, insects, and snails.</li>
        <li><strong>Brooding:</strong> Ducklings need a warm, dry brooder for the first 2 to 3 weeks. They are more water-resistant than chicks but still need protection from cold and wet conditions in early life.</li>
        <li><strong>Egg Collection and Incubation:</strong> Every day, eggs for balut are gathered and either naturally or artificially incubated. Timing is crucial: salted eggs contain fresh, unfertilized eggs that are stored for 18 to 21 days, whereas balut requires precisely 17 to 18 days of incubation.</li>
        <li><strong>Health Management:</strong> Although they are more resilient than chickens, ducks may get duck cholera and duck virus enteritis. Clean water supplies and vaccinations are crucial. Clean drinking water must always be available to ducks, particularly while they are consuming dry feed.</li>
      </ul>
 
      <h4>What Do They Eat?</h4>
      <ul>
        <li><strong>Commercial Duck Pellets:</strong> For ducks raised intensively, the foundation diet consists of formulated feeds that contain 16-20% protein. Ducklings are fed starter pellets for 0 to 3 weeks, grower pellets for 4 to 8 weeks, and layer pellets for ducks that produce eggs.</li>
        <li><strong>Rice and Rice By-Products:</strong> Duck feed often has broken rice, rice bran, and rice hull. These ingredients are cheap and readily available due to Pampanga's close proximity to important rice-growing regions.</li>
        <li><strong>Snails (Kuhol) and Insects:</strong> In rice paddies, free-range ducks search for insects, earthworms, and golden apple snails—a natural, high-protein supplement that enhances the quality and color of egg yolks.</li>
        <li><strong>Corn and Soybean Meal:</strong> U sed in commercial meals to balance protein and energy, particularly for layer ducks that lay eggs for balut.</li>
        <li><strong>Water:</strong> At least 0.5 liters of water are used daily by each duck, and more in hot conditions. Health and egg production depend on having access to clean water for drinking and, preferably, bathing.</li>
      </ul>
    `
  },
 
  goat: {
    tag: "Livestock — Goats",
    title: "Goats",
    img: "picture/goat.png",
    content: `
      <h4>Goats in Pampanga</h4>
      <p>Goat raising is one of the most accessible and affordable livestock enterprises in Pampanga. Goats, called kambing in the area, are produced for their meat (chevon), milk, and skin by both commercial farmers and individual farmers. Goat meat is a staple protein in Kapampangan cuisine, most notably in kaldereta (goat stew). Demand for goat meat is high throughout the year, with prices spiking around fiestas, Christmas, and Eid festivals.</p>
 
      <h4>What is a Meat Goat?</h4>
      <p>A <strong>meat goat</strong> is raised primarily for chevon (goat meat).The native Philippine Native Goat and improved varieties like the <strong>Anglo-Nubian</strong>, <strong>Boer</strong>, and <strong>Saanen</strong> crossbreeds are common in Pampanga. At 6 to 8 months of age, meat goats are usually raised to a market weight of 15 to 25 kg. Boer crossbreeds are becoming more and more popular among commercial farmers because they grow much more quickly.</p>
 
      <h4>What is a Dairy Goat?</h4>
      <p>A <strong>dairy goat</strong> is a female (doe) raised specifically for milk production.Goat milk is suitable for those with mild lactose intolerance since it has a different protein structure and smaller fat globules than cow's milk, making it simpler to digest. The <strong>Anglo-Nubian</strong> and <strong>Saanen</strong> are popular dairy breeds in the Philippines. One to three liters of milk can be produced daily by a productive dairy doe, which is used to make artisanal cheese, soap, and fresh drinking milk.</p>
 
      <h4>How Do You Raise Them?</h4>
      <ul>
        <li><strong>Housing:</strong> In order to keep them dry and avoid parasite accumulation from excrement on the ground, goats thrive in raised, slatted-floor enclosures that are at least one meter above the ground. In Pampanga's hot heat, proper ventilation is crucial. Due to their innate curiosity, goats need to be kept in safe quarters to avoid escaping.</li>
        <li><strong>Breeding:</strong> Doe (females) acquire sexual maturity between seven and ten months of age. A doe usually gives birth to one to three children per litter during the roughly 150-day (5-month) pregnancy period. To prevent unchecked mating, bucks (males) are kept separate and introduced solely for breeding.</li>
        <li><strong>Kid Management:</strong> For immunity, colostrum, or first milk, should be given to newborns within the first hour of life. At 8 to 12 weeks, children are breastfed. For dairy products, early weaning enables the milk to be gathered for sale sooner.</li>
        <li><strong>Health Management:</strong> Regular fecal inspections and specific deworming are essential since goats are vulnerable to internal parasites (worms). Maintaining vaccinations against pneumonia, foot-and-mouth disease, and goat pox is important. Lameness is avoided by trimming the hoof every two to three months.</li>
      </ul>
 
      <h4>What Do They Eat?</h4>
      <ul>
        <li><strong>Grasses and Legumes:</strong> The main forages are guinea grass, paragrass, and napier grass. To increase protein intake, legumes such as rensonii, kakawate, and ipil-ipil are combined. Giving goats tree leaves and mixed forage increases the variety of their diet since they prefer browsing, or eating shrubs and leaves, over grazing.</li>
        <li><strong>Crop By-Products:</strong> Excellent low-cost supplements include banana leaves and trunks, corn stalks, sugarcane tops, camote vines, and cassava leaves. For home farmers, these drastically lower feed expenses.</li>
        <li><strong>Concentrate Feed:</strong> To address their increased nutritional needs, growing children, pregnant does, and lactating dairy goats are given a small daily ration (200 to 500 grams) of concentrate, which is produced from rice bran, corn, copra meal, and soybean meal.</li>
        <li><strong>Minerals:</strong> There should always be a salt block or loose mineral mix on hand. In order to prevent metabolic problems, calcium and phosphorus are particularly crucial for developing children and pregnant women.</li>
        <li><strong>Water:</strong> Goats require one to three liters of clean water per day; during the dry season and during breastfeeding, this amount increases. Goats won't drink stale or unclean water, so always give them clean, fresh water.</li>
      </ul>
    `
  },
};

// ── POLICY MODALS ──
const policyData = {
  privacy: {
    tag: "Legal",
    title: "Privacy Policy",
    content: `
      <p>PampangaAgri is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard any information when you visit our website.</p>

      <h4>Information We Collect</h4>
      <p>We do not require you to create an account or log in to use this website.</p>

      <h4>Third-Party Links</h4>
      <p>Our website may contain links to external resources such as government agricultural sites or research institutions. We are not responsible for the privacy practices of those websites and encourage you to review their policies separately.</p>

      <h4>Children's Privacy</h4>
      <p>This website is designed as an educational resource suitable for all ages.</p>

      <h4>Changes to This Policy</h4>
      <p>We may update this Privacy Policy from time to time. Continued use of the site after changes constitutes acceptance of the revised policy.</p>

      <h4>Contact Us</h4>
      <p>If you have any questions about this Privacy Policy, please contact us at <strong>info@pampangaagri.com</strong>.</p>
    `
  },
  terms: {
    tag: "Legal",
    title: "Terms of Service",
    content: `
      <p>By accessing and using the PampangaAgri website, you agree to be bound by the following Terms of Service. Please read them carefully before using this site.</p>

      <h4>Purpose of the Website</h4>
      <p>PampangaAgri is an informational and educational platform about the livestock industry in Pampanga, Philippines. The content is intended for general knowledge and educational purposes only.</p>

      <h4>Accuracy of Information</h4>
      <p>We make every effort to ensure the information on this website is accurate and up to date. However, PampangaAgri makes no warranties or guarantees about the completeness, accuracy, or reliability of any content. Always consult a licensed agricultural professional or government agency for official guidance.</p>

      <h4>Intellectual Property</h4>
      <p>You may not reproduce, distribute, or use our content for commercial purposes without prior permission. Educational and non-commercial sharing with proper attribution is permitted.</p>

      <h4>User Conduct</h4>
      <p>You agree to use this website only for lawful purposes. You must not:</p>
      <ul>
        <li>Attempt to gain unauthorized access to any part of the website</li>
        <li>Use the site to distribute harmful, misleading, or illegal content</li>
        <li>Scrape or harvest content from the site in bulk without permission</li>
        <li>Impersonate PampangaAgri or its representatives</li>
      </ul>

      <h4>Disclaimer of Liability</h4>
      <p>PampangaAgri shall not be held liable for any losses, damages, or injuries resulting from the use of information on this website. Agricultural practices vary by location, climate, and regulations; always apply information with professional judgment.</p>

      <h4>External Links</h4>
      <p>This site may link to third-party websites for reference. PampangaAgri does not endorse or take responsibility for the content, accuracy, or practices of any external sites.</p>

      <h4>Changes to Terms</h4>
      <p>We reserve the right to modify these Terms of Service at any time. Updates will be posted on this page with a revised effective date. Continued use of the website following any changes constitutes your acceptance of the new terms.</p>

      <h4>Contact Us</h4>
      <p>For questions regarding these Terms of Service, please reach out to us at <strong>info@pampangaagri.com</strong>.</p>
    `
  }
};

// ── MODAL ──
const overlay   = document.getElementById('modalOverlay');
const modalImg  = document.getElementById('modalImg');
const modalTag  = document.getElementById('modalTag');
const modalTitle= document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

function openModal(key) {
  const data = modalData[key] || policyData[key];
  if (!data) return;
  
  if (data.img) {
    modalImg.src = data.img;
    modalImg.alt = data.title;
    modalImg.style.display = 'block';
  } else {
    modalImg.style.display = 'none';
  }
  modalTag.textContent   = data.tag;
  modalTitle.textContent = data.title;
  modalText.innerHTML    = data.content;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal]').forEach(link => {
  link.addEventListener('click', e => { e.preventDefault(); openModal(link.dataset.modal); });
});
document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── HAMBURGER FOR MOBILE ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when nav link is clicked
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── SCROLL ANIMATION ──
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => fadeObserver.observe(el));

// ── ANIMATED STAT BARS ──
const bars = document.querySelectorAll('.bar-fill[data-width]');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.width + '%';
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });
// Start bars at 0 width
bars.forEach(bar => { bar.style.width = '0%'; barObserver.observe(bar); });

// ── ACTIVE NAV ON SCROLL ──
const sections = document.querySelectorAll('section[id], footer[id]');
const navAnchors = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const triggerY = window.scrollY + window.innerHeight * 0.4;
  const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 10;
  let current = '';

  if (atBottom) {
    // If we're at the very bottom, always highlight the last section (footer #contact)
    current = sections[sections.length - 1].getAttribute('id');
  } else {
    sections.forEach(section => {
      if (triggerY >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });
  }

  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav(); // run once on load so the correct link is active on page load

// ── BACK TO TOP ──
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});