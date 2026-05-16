// ── MODAL DATA ──
const modalData = {
  poultry: {
    tag: "Livestock — Poultry",
    title: "Poultry (Broilers And Layers)",
    img: "picture/chicken.png",
    content: `
      <h4>Poultry in Pampanga</h4>
      <p>Pampanga is one of the leading poultry-producing provinces in the Philippines. Sitting at the center of Central Luzon, the province is a critical supply hub that feeds Metro Manila and nearby regions. Poultry farming here supports thousands of local families — from large commercial growers to small backyard raisers — making it one of the most important agricultural industries in the area.</p>

      <h4>What is a Broiler?</h4>
      <p>A <strong>broiler</strong> is a chicken specifically raised for its meat. Broilers are bred to grow quickly, typically reaching market weight in just 35 to 42 days. They are known for their tender, white meat and are the primary source of chicken sold in wet markets, supermarkets, and fast-food restaurants across the country. In Pampanga, broiler farming is largely done through contract growing arrangements between local farmers and large poultry corporations.</p>

      <h4>What is a Layer?</h4>
      <p>A <strong>layer</strong> is a hen raised specifically for egg production rather than meat. A healthy, well-managed layer hen can produce more than 300 eggs in a single year. These eggs supply wet markets, grocery stores, bakeries, and food manufacturers throughout Luzon. Pampanga's proximity to major feed mills and its strong road network make it an ideal location for layer operations.</p>

      <h4>How Do You Raise Them?</h4>
      <p>Raising poultry in Pampanga follows a structured process to ensure healthy birds and consistent production:</p>
      <ul>
        <li><strong>Housing:</strong> Chickens are kept in enclosed, well-ventilated poultry houses that protect them from weather, predators, and disease. Biosecurity measures — like footbaths, restricted entry, and disinfection — are strictly followed.</li>
        <li><strong>Day-Old Chicks (DOC):</strong> Farming starts with the purchase of day-old chicks from accredited hatcheries. Broilers are placed in a brooder house with controlled temperature and lighting for the first week.</li>
        <li><strong>Grow-Out Period:</strong> Broilers are grown for 5 to 6 weeks. Layers begin producing eggs at around 18 to 20 weeks of age and continue for about 12 months.</li>
        <li><strong>Health Management:</strong> Vaccination schedules for Newcastle Disease, Infectious Bronchitis, and Avian Influenza are followed. Regular monitoring for disease signs is essential.</li>
        <li><strong>Waste Management:</strong> Chicken litter (manure and bedding) is composted and converted into organic fertilizer, helping nearby crop farmers reduce input costs.</li>
      </ul>

      <h4>What Do They Eat?</h4>
      <p>Poultry feed is carefully formulated to meet the nutritional needs of each growth stage:</p>
      <ul>
        <li><strong>Starter Feed (0-2 weeks):</strong> High in protein (20-23%) to support rapid early growth and strong bone development.</li>
        <li><strong>Grower Feed (3-4 weeks):</strong> Slightly lower protein (18-20%), balanced with energy sources like corn to support muscle growth.</li>
        <li><strong>Finisher Feed (5-6 weeks for broilers):</strong> Lower protein, higher energy feed to maximize meat weight before market.</li>
        <li><strong>Layer Feed:</strong> Enriched with calcium (from oyster shell or limestone) to support strong eggshell formation, alongside protein and vitamins.</li>
        <li><strong>Key ingredients</strong> include yellow corn (main energy source), soybean meal (protein), rice bran, fish meal, vitamins, and minerals. Research into locally available alternatives — such as black soldier fly larvae and copra meal — is ongoing to reduce feed costs.</li>
      </ul>
    `
  },

  swine: {
    tag: "Livestock — Swine",
    title: "Swine / Pigs",
    img: "picture/pig.png",
    content: `
      <h4>Swine in Pampanga</h4>
      <p>Hog raising is deeply woven into the identity of Pampanga. The province's legendary culinary tradition — lechon, sisig, dinuguan, and more — is inseparable from its thriving swine industry. Pig farms in Pampanga range from small backyard operations raising one or two heads, to large commercial enterprises supplying thousands of hogs monthly to Metro Manila's wet markets and meat processing plants.</p>

      <h4>What is a Broiler Pig? (Market Hog)</h4>
      <p>In swine farming, the equivalent of a broiler is a <strong>market hog</strong> — a pig raised purely for pork production. These pigs are grown from weaning (around 3-4 weeks old) to market weight of 90-110 kg, typically in 5 to 6 months. Popular breeds raised in Pampanga include <strong>Landrace</strong>, <strong>Large White</strong>, and <strong>Duroc</strong>, often crossbred for better growth rates and meat quality.</p>

      <h4>What is a Sow? (Breeding Pig)</h4>
      <p>A <strong>sow</strong> is a female pig kept for breeding purposes. She gives birth to a litter of piglets (usually 10-14 per litter) and can farrow (give birth) two to three times per year. Piglets are weaned at 3 to 4 weeks and then either raised on the same farm or sold to grow-out operations. The breeding stock is the backbone of any sustainable swine operation.</p>

      <h4>How Do You Raise Them?</h4>
      <ul>
        <li><strong>Housing:</strong> Pigs are raised in concrete pens with slatted floors for hygiene and waste drainage. Proper ventilation, shading, and cooling systems (especially in Pampanga's hot climate) are essential to prevent heat stress.</li>
        <li><strong>Biosecurity:</strong> After ASF outbreaks, strict biosecurity is non-negotiable — perimeter fencing, vehicle disinfection, visitor restrictions, and all-in-all-out systems are now standard.</li>
        <li><strong>Grow-Out:</strong> Piglets start on a nursery diet, then transition to grower and finisher feeds as they gain weight. Pigs are ready for market at around 5-6 months.</li>
        <li><strong>Health Management:</strong> Vaccination against Hog Cholera (Classical Swine Fever), FMD (Foot-and-Mouth Disease), and regular deworming are critical. ASF has no vaccine, so prevention through biosecurity is the only defense.</li>
      </ul>

      <h4>What Do They Eat?</h4>
      <ul>
        <li><strong>Starter Feed (weaning to ~15 kg):</strong> High protein (20-22%) with easily digestible ingredients like milk by-products, fishmeal, and soybean meal to support young gut development.</li>
        <li><strong>Grower Feed (15-60 kg):</strong> Balanced protein (16-18%) and energy from corn and rice bran to build muscle mass efficiently.</li>
        <li><strong>Finisher Feed (60 kg to market):</strong> Higher energy, lower protein (14-16%) to maximize weight gain and improve meat quality before slaughter.</li>
        <li><strong>Sow Feed:</strong> Specially formulated for gestation and lactation, with higher calcium, phosphorus, and vitamins to support piglet development and milk production.</li>
        <li><strong>Common ingredients:</strong> Yellow corn, soybean meal, rice bran, copra meal, fishmeal, salt, vitamins, and minerals. Some small-scale farmers supplement with kitchen scraps and vegetable waste — though this requires proper cooking to reduce disease risk.</li>
      </ul>
    `
  },

  carabao: {
    tag: "Livestock — Carabao",
    title: "The Philippine Carabao",
    img: "picture/carabao.png",
    content: `
      <h4>Carabao in Pampanga</h4>
      <p>The carabao (<em>Bubalus bubalis carabanesis</em>) is the national animal of the Philippines and a living symbol of the Filipino farmer's strength and endurance. In Pampanga, carabaos have worked the fields for centuries — plowing rice paddies, hauling sugarcane, and carrying harvests across Central Luzon's fertile plains. Even today, with modern machinery available, the carabao remains an important part of farming life and cultural identity in the province.</p>

      <h4>What is a Draft Carabao?</h4>
      <p>A <strong>draft carabao</strong> is one raised and trained primarily for farm labor. These animals are used to plow fields, pull carts, and transport goods — especially in areas where tractors cannot easily operate, like narrow rice paddies and upland farms. Draft carabaos are valued for their strength, calm temperament, and ability to work long hours in humid tropical heat. A mature carabao can weigh between 400 and 900 kg and live for 18 to 25 years.</p>

      <h4>What is a Dairy Carabao?</h4>
      <p>A <strong>dairy carabao</strong> is a female (called a <em>caraballa</em>) raised specifically for milk production. Carabao milk is richer and creamier than cow's milk, with a fat content of 7 to 8%, compared to cow's milk at around 3.5%. This makes it ideal for producing prized Filipino delicacies like <em>kesong puti</em> (fresh white cheese) and <em>pastillas de leche</em> (milk candy) — both of which are important cottage industries in Pampanga and nearby Bulacan. A well-managed dairy carabao produces 3 to 5 liters of milk per day.</p>

      <h4>How Do You Raise Them?</h4>
      <ul>
        <li><strong>Housing:</strong> Carabaos are typically kept in simple open-sided sheds with a concrete or earthen floor. They need access to shade and a wallow (muddy pool or trough) to cool down, as they have fewer sweat glands than other animals and are highly sensitive to heat.</li>
        <li><strong>Handling and Training:</strong> Draft carabaos are trained starting at 2 to 3 years old. Nose-ringing is commonly practiced to allow handlers to guide the animal. Gentle, consistent handling builds trust and makes the carabao easier to manage.</li>
        <li><strong>Reproduction:</strong> Carabaos reach sexual maturity at around 2 years. A cow (female) carries her calf for about 10 to 11 months. Calves are weaned at 6 to 8 months. The Philippine Carabao Center (PCC) offers artificial insemination (AI) programs to improve local bloodlines with high-producing breeds like the Murrah buffalo.</li>
        <li><strong>Health Management:</strong> Common diseases include Hemorrhagic Septicemia (Pasteurellosis), skin conditions, and internal parasites. Regular deworming, vaccination, and hoof care are essential. Carabaos should also be checked for ticks, which can spread blood parasites.</li>
      </ul>

      <h4>What Do They Eat?</h4>
      <ul>
        <li><strong>Grasses and Forages:</strong> Carabaos are natural grazers. Common feeds include napier grass (the most widely grown forage in Pampanga), paragrass, guinea grass, and natural pasture grasses. They can consume 30-40 kg of fresh forage per day.</li>
        <li><strong>Crop By-Products:</strong> Rice straw is a staple dry-season feed, often mixed with molasses or urea to improve its nutritional value. Sugarcane tops, corn stalks, and banana trunks are also used.</li>
        <li><strong>Concentrate Supplements:</strong> For dairy carabaos or working animals, concentrate feeds made from rice bran, corn, copra meal, and soybean meal are given to meet higher energy and protein demands.</li>
        <li><strong>Water:</strong> Clean, fresh water is critical — a carabao drinks 30 to 50 liters daily, and more during hot weather or heavy work.</li>
      </ul>
    `
  },

  cattle: {
    tag: "Livestock — Cattle",
    title: "Cattle",
    img: "picture/cattle.png",
    content: `
      <h4>Cattle in Pampanga</h4>
      <p>While not as dominant as poultry or swine, cattle raising is a growing livestock activity in Pampanga and across Central Luzon. Cattle provide beef for local consumption, leather for industry, and manure for organic fertilizer. Small-scale cattle raisers often integrate their animals with crop farming, using cattle to graze on fallow fields and converting their waste into compost for rice and vegetable crops.</p>

      <h4>What is a Beef Cattle?</h4>
      <p><strong>Beef cattle</strong> are breeds raised primarily for meat production. In the Philippines, common breeds include the <strong>Brahman</strong> (valued for heat tolerance and disease resistance), <strong>Simmental</strong>, and local crossbreeds. Beef cattle are grown to a slaughter weight of 350-500 kg, typically over 18 to 24 months. Their meat supplies wet markets, supermarkets, and the fast-growing processed meat industry.</p>

      <h4>What is a Dairy Cow?</h4>
      <p>A <strong>dairy cow</strong> is a female cattle breed raised specifically for milk. Common dairy breeds in the Philippines include <strong>Holstein-Friesian</strong> and <strong>Jersey</strong> crossbreeds adapted to tropical conditions. A productive dairy cow can yield 10 to 20 liters of milk per day. While carabao milk dominates the local dairy scene, cow's milk is increasingly in demand for fresh milk, cheese, and dairy product manufacturing.</p>

      <h4>How Do You Raise Them?</h4>
      <ul>
        <li><strong>Housing:</strong> Cattle are housed in open sheds with good ventilation, clean flooring, and separate areas for feeding, resting, and watering. Drainage is important to prevent hoof diseases and maintain hygiene.</li>
        <li><strong>Pasture Management:</strong> Many cattle raisers in Pampanga practice rotational grazing — dividing pasture land into sections and rotating the herd to allow grass to regrow and prevent overgrazing.</li>
        <li><strong>Grow-Out:</strong> Calves are weaned at 3 to 4 months and then moved to a growing pen. They are fed a combination of forage and concentrate feeds until they reach market weight.</li>
        <li><strong>Health Management:</strong> Vaccination against Foot-and-Mouth Disease (FMD), Hemorrhagic Septicemia, and Anthrax is required by law. Regular deworming, tick control, and hoof trimming are also essential for healthy cattle.</li>
        <li><strong>Breeding:</strong> Artificial insemination (AI) using semen from high-quality bulls is promoted by the government to improve local cattle genetics and increase productivity.</li>
      </ul>

      <h4>What Do They Eat?</h4>
      <ul>
        <li><strong>Forages and Grasses:</strong> The main diet consists of napier grass, guinea grass, stargrass, and legumes like ipil-ipil and rensonii. A mature cow eats 50-70 kg of fresh grass daily.</li>
        <li><strong>Crop By-Products:</strong> Rice straw, corn stalks, sugarcane bagasse, and banana by-products are common dry-season feeds. Treating rice straw with urea (urea-treated rice straw or UTRS) greatly improves its digestibility and nutritional value.</li>
        <li><strong>Concentrate Feed:</strong> A mixture of rice bran, corn bran, copra meal, and soybean meal is given to supplement forage, especially for growing cattle and lactating dairy cows that need extra energy and protein.</li>
        <li><strong>Minerals and Vitamins:</strong> Mineral blocks (salt licks) containing calcium, phosphorus, and trace minerals are provided free-choice to prevent deficiencies that affect growth, reproduction, and milk production.</li>
        <li><strong>Water:</strong> Cattle need 40 to 60 liters of clean water daily — more for lactating cows and during the hot dry season.</li>
      </ul>
    `
  }
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

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => navObserver.observe(s));

// ── BACK TO TOP ──
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});