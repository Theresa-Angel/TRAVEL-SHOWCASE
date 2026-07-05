'use strict';
/* ═══════════════════════════════════════════════════
   EXPLORE TAMIL NADU – Complete Script
   ═══════════════════════════════════════════════════ */

/* ── DATA ─────────────────────────────────────────── */
const DESTINATIONS = [
  { id:1, name:'Ooty', district:'Nilgiris', cat:'Hill Stations', rating:4.8,
    desc:'The "Queen of Hill Stations" – misty tea gardens, a scenic toy train and a botanical garden that has been blooming since 1848.',
    full:'Ooty (Udhagamandalam) sits at 2,240 m in the Nilgiri Mountains. Its cool climate, rolling tea estates, Botanical Garden, and the heritage Nilgiri Mountain Railway (UNESCO World Heritage) make it South India\'s most beloved hill escape.',
    best:'April – June, Sep – Nov', fee:'₹30 – ₹150', budget:'₹3,000 – ₹6,000/day',
    attractions:['Botanical Garden','Ooty Lake','Doddabetta Peak','Tea Museum','Nilgiri Mountain Railway'],
    activities:['Boating','Trekking','Tea Estate Tour','Horse Riding'],
    nearby:['Coonoor','Kodaikanal','Mudumalai'],
    food:['Home-made Chocolate','Varkey','Ooty Cheese'],
    tip:'Carry woollens even in summer – nights are cold. The toy train to Coonoor is unmissable.',
    img:'https://i.pinimg.com/736x/60/81/60/6081606799c9de22ff6404a2ba37ede1.jpg' },

  { id:2, name:'Kodaikanal', district:'Dindigul', cat:'Hill Stations', rating:4.7,
    desc:'"Princess of Hill Stations" – star-shaped lake, sheer clifftop walks and dense shola forests.',
    full:'Kodaikanal at 2,133 m in the Palani Hills is famous for its star-shaped Kodai Lake, Coaker\'s Walk with panoramic views, Silver Cascade Falls, and unique flora. The town is renowned for homemade chocolates and eucalyptus oil.',
    best:'April – June', fee:'₹20 – ₹80', budget:'₹2,500 – ₹5,000/day',
    attractions:['Kodai Lake','Coaker\'s Walk','Pillar Rocks','Bear Shola Falls','Bryant Park'],
    activities:['Cycling','Trekking','Boating','Horse Riding'],
    nearby:['Ooty','Munnar','Madurai'],
    food:['Homemade Chocolate','Eucalyptus Honey','Fresh Jam'],
    tip:'Explore on a hired bicycle. Avoid the May peak-season crowd.',
    img:'https://i.pinimg.com/1200x/da/cb/91/dacb91131592ba255ce7f49ef6626c51.jpg' },

  { id:3, name:'Yercaud', district:'Salem', cat:'Hill Stations', rating:4.5,
    desc:'"Jewel of the South" – budget-friendly hill station with coffee estates, orange groves and tranquil lake.',
    full:'Yercaud sits at 1,515 m in the Eastern Ghats\' Shevaroy Hills, surrounded by spice, coffee and orange plantations. It offers serene walks, Lady\'s Seat viewpoint, and is far less crowded than Ooty or Kodaikanal.',
    best:'Oct – June', fee:'₹10 – ₹40', budget:'₹1,200 – ₹2,800/day',
    attractions:['Yercaud Lake','Lady\'s Seat','Pagoda Point','Botanical Garden','Anna Park'],
    activities:['Boating','Bird Watching','Trekking','Plantation Walk'],
    nearby:['Salem','Mettur Dam','Namakkal'],
    food:['Filter Coffee','Orange Squash','Forest Honey'],
    tip:'Perfect budget alternative to Ooty. Rent a bicycle and explore coffee estates.',
    img:'https://i.pinimg.com/1200x/08/06/36/080636d4d0980b63c0db178b04401f98.jpg' },

  { id:4, name:'Kanyakumari', district:'Kanyakumari', cat:'Beaches', rating:4.9,
    desc:'Southernmost tip of India – three seas meet here for a sunrise and sunset unlike anywhere else on earth.',
    full:'Kanyakumari is where the Arabian Sea, Bay of Bengal, and Indian Ocean converge. The Vivekananda Rock Memorial and Thiruvalluvar Statue rise dramatically from the sea. Watching the sun rise and set over three waters is a once-in-a-lifetime experience.',
    best:'Oct – Mar', fee:'₹50 – ₹150', budget:'₹1,800 – ₹4,000/day',
    attractions:['Vivekananda Rock Memorial','Thiruvalluvar Statue','Kumari Amman Temple','Sunrise & Sunset Point','Gandhi Memorial'],
    activities:['Boat Ride','Temple Visit','Beach Walk','Photography'],
    nearby:['Trivandrum','Padmanabhapuram','Nagercoil'],
    food:['Sea Fish Curry','Kothu Parotta','Coconut Water'],
    tip:'Reach the viewing point before 5 AM to catch the tri-sea sunrise. Book boat tickets early.',
    img:'https://i.pinimg.com/1200x/5f/d7/9b/5fd79be9af1589ec80a507919712a0b7.jpg' },

  { id:5, name:'Rameswaram', district:'Ramanathapuram', cat:'Temples', rating:4.8,
    desc:'Sacred island of Hinduism – the magnificent Ramanathaswamy Temple has the world\'s longest temple corridor at 1,212 m.',
    full:'Rameswaram is one of the four Char Dham pilgrimage sites. The Ramanathaswamy Temple with 22 sacred wells, ornate pillared corridors, and the haunting ruins of Dhanushkodi make this island extraordinary. The Pamban Bridge connecting it to the mainland is an engineering marvel.',
    best:'Oct – Apr', fee:'₹0 – ₹50', budget:'₹1,200 – ₹3,000/day',
    attractions:['Ramanathaswamy Temple','Pamban Bridge','Dhanushkodi','Agni Theertham','Adam\'s Bridge'],
    activities:['Pilgrimage','Beach Walk','Fishing Village Tour','Cycling'],
    nearby:['Madurai','Kanyakumari','Tirunelveli'],
    food:['Fish Curry','Appam','Coconut Rice'],
    tip:'Visit Dhanushkodi ghost town at sunrise – surreal abandoned city on a sandbar.',
    img:'https://i.pinimg.com/736x/0c/cf/8c/0ccf8c911ba698b2eef6195e3e124af1.jpg' },

  { id:6, name:'Mahabalipuram', district:'Chengalpattu', cat:'Heritage', rating:4.7,
    desc:'UNESCO World Heritage Site – breathtaking 7th-century Pallava rock-cut temples and sculptures on the Bay of Bengal.',
    full:'Mahabalipuram (Mamallapuram) was a flourishing Pallava port city. Its Shore Temple, Arjuna\'s Penance, Five Rathas, and Krishna\'s Butterball are among the finest examples of Dravidian rock-cut art. The town sits on a beautiful beach.',
    best:'Nov – Feb', fee:'₹40 – ₹600', budget:'₹2,000 – ₹4,500/day',
    attractions:['Shore Temple','Arjuna\'s Penance','Five Rathas','Krishna\'s Butterball','Tiger Cave'],
    activities:['Heritage Walk','Surfing','Scuba Diving','Stone Carving Workshop'],
    nearby:['Chennai','Puducherry','Kanchipuram'],
    food:['Prawn Curry','Fish Fry','Crab Masala'],
    tip:'Visit Shore Temple at sunrise – golden light on ancient stones is magical. Hire a local guide.',
    img:'https://i.pinimg.com/1200x/27/1c/b1/271cb1ef524f3c6ddc8000b6e5d9775d.jpg' },

  { id:7, name:'Madurai', district:'Madurai', cat:'Temples', rating:4.9,
    desc:'"Athens of the East" – the awe-inspiring Meenakshi Amman Temple with 14 towering gopurams is a living masterpiece.',
    full:'Madurai is one of the oldest continuously inhabited cities on earth. The Meenakshi Amman Temple\'s 14 gopurams adorned with 33,000 sculptures dominate the city. The city never sleeps – its bazaars, jasmine markets, and street food create an electric atmosphere around the clock.',
    best:'Oct – Mar', fee:'₹50 – ₹100', budget:'₹1,800 – ₹3,800/day',
    attractions:['Meenakshi Amman Temple','Thirumalai Nayakkar Mahal','Gandhi Memorial Museum','Vandiyur Teppakulam','Thiruparankundram'],
    activities:['Temple Tour','Evening Aarti','Street Food Walk','Shopping'],
    nearby:['Rameswaram','Kodaikanal','Dindigul'],
    food:['Jigarthanda','Kari Dosa','Mutton Biryani','Parotta Salna'],
    tip:'The evening aarti is a spiritual spectacle. Visit the temple early morning to avoid crowds.',
    img:'https://i.pinimg.com/736x/d5/e9/bd/d5e9bdc81538930d7b9220fe5b97743c.jpg' },

  { id:8, name:'Thanjavur', district:'Thanjavur', cat:'Heritage', rating:4.8,
    desc:'"Rice Bowl of Tamil Nadu" – the colossal Brihadeeswarar Temple built in 1010 AD casts no shadow at noon.',
    full:'Thanjavur was the heart of the Chola Empire and remains a centre of Tamil classical arts. The Brihadeeswarar Temple, built by Raja Raja Chola I, is a UNESCO World Heritage Site. Its 66 m vimana and perfectly proportioned architecture show the mathematical precision of ancient Tamil engineers.',
    best:'Oct – Feb', fee:'₹30 – ₹50', budget:'₹1,500 – ₹3,500/day',
    attractions:['Brihadeeswarar Temple','Thanjavur Palace','Saraswathi Mahal Library','Art Gallery','Gangaikonda Cholapuram'],
    activities:['Heritage Walk','Tanjore Painting Workshop','Classical Music Concert'],
    nearby:['Kumbakonam','Chidambaram','Trichy'],
    food:['Sakkarai Pongal','Adai','Kavuni Arisi'],
    tip:'The temple casts no shadow at noon during equinox. Visit Saraswathi Mahal for 1,000-year-old manuscripts.',
    img:'https://i.pinimg.com/736x/7c/c3/82/7cc382113315a389aa7aba5b9c703fad.jpg' },

  { id:9, name:'Valparai', district:'Coimbatore', cat:'Wildlife', rating:4.6,
    desc:'Hidden gem accessed by 40 thrilling hairpin bends – tea estates, Nilgiri Tahr, elephants and hornbills await.',
    full:'Valparai in the Anamalai Hills is part of the Anamalai Tiger Reserve. The 40-bend road itself is an experience. Rolling tea and coffee plantations host rare wildlife including lion-tailed macaques, Nilgiri Tahr, and great hornbills. Almost no crowds compared to other hill stations.',
    best:'Oct – Mar', fee:'₹50 – ₹200', budget:'₹2,000 – ₹4,000/day',
    attractions:['Anamalai Tiger Reserve','Attakatti Falls','Sholayar Dam','Grass Hills','Tea Estates'],
    activities:['Wildlife Safari','Bird Watching','Trekking','Tea Estate Walk'],
    nearby:['Coimbatore','Pollachi','Munnar'],
    food:['Bamboo Biryani','Filter Coffee','Appam Stew'],
    tip:'Keep eyes open for lion-tailed macaques on the main road – they are iconic here.',
    img:'https://i.pinimg.com/736x/a3/c1/5e/a3c15e168b3e51107a622e151bf4559b.jpg' },

  { id:10, name:'Hogenakkal Falls', district:'Dharmapuri', cat:'Waterfalls', rating:4.7,
    desc:'"Niagara of India" – thundering Kaveri River cascades through ancient carbonatite rocks with thrilling coracle rides.',
    full:'Hogenakkal means "smoking rocks" – named for the mist rising from the falls. The Kaveri River plunges dramatically through 3.3-billion-year-old carbonatite rocks, one of the oldest rock formations on earth. Coracle boat rides weaving through gorges are the unmissable highlight.',
    best:'Jun – Jan', fee:'₹20 – ₹50', budget:'₹800 – ₹2,200/day',
    attractions:['Main Waterfall','Coracle Boat Ride','Bathing Ghats','Forest Walk','Fish Massage'],
    activities:['Coracle Ride','Swimming','Fish Massage','Photography'],
    nearby:['Dharmapuri','Krishnagiri','Salem'],
    food:['Fried Fish','Prawn Fry','Kaveri Crab'],
    tip:'Visit July–October for the most powerful falls. Morning coracle rides are calmer and scenic.',
    img:'https://i.pinimg.com/1200x/cb/e5/17/cbe517d5457e1e14faeaa8e736bbba01.jpg' }
];

const FESTIVALS = [
  { name:'Pongal', desc:'Tamil Nadu\'s harvest festival celebrating the sun and abundance. Homes are decorated with kolam patterns and pots of sweet pongal are cooked outdoors.', location:'State-wide', month:'January',
    img:'https://i.pinimg.com/736x/bf/2f/dc/bf2fdc42d616f1725ec5592634296e88.jpg' },
  { name:'Chithirai Festival', desc:'Madurai\'s grandest festival celebrating the divine wedding of Meenakshi and Sundareswarar with a 20-day procession of deities through the streets.', location:'Madurai', month:'April–May',
    img:'https://i.pinimg.com/736x/40/87/29/408729524f8dc40113b444895f56ac2c.jpg' },
  { name:'Natyanjali Dance Festival', desc:'Classical dancers from across India perform at the sacred Nataraja Temple in Chidambaram, offering their art as a devotion to the Lord of Dance.', location:'Chidambaram', month:'February',
    img:'https://i.pinimg.com/1200x/cd/6f/c1/cd6fc1ab3206eee3b97824faf941c797.jpg' },
  { name:'Karthigai Deepam', desc:'Festival of lights celebrated with millions of lamps illuminating homes and temples. The giant beacon on Thiruvannamalai hill is visible 30 km away.', location:'Thiruvannamalai', month:'November–December',
    img:'https://i.pinimg.com/1200x/09/29/7e/09297e6896a592c318a5e52171f4096e.jpg' },
  { name:'Jallikattu', desc:'Ancient bull-taming sport symbolising bravery, revived after legal battles. Young men embrace and hold onto bulls\' humps in a test of courage and strength.', location:'Madurai, Alanganallur', month:'January',
    img:'https://i.pinimg.com/736x/16/73/aa/1673aa38593c9858cc51ed3e8360b65e.jpg' },
  { name:'Deepavalli', desc:'Diwali, also known as the Festival of Lights, is one of the most important and widely celebrated festivals in India. It symbolizes the victory of light over darkness, good over evil, and knowledge over ignorance.', location:'All Over TamilNadu', month:'November',
    img:'https://i.pinimg.com/1200x/67/c3/d2/67c3d2b42bfd2a8dfdbcc48546c449ee.jpg' },
  { name:'Vinayaka Chaturthi', desc:'A Hindu festival celebrating the birth of Lord Ganesha. Devotees worship clay idols, offer sweets like modak and kozhukattai, and conduct processions before immersing the idols in water.', location:'All Over TamilNadu', month:'August–September',
    img:'https://i.pinimg.com/736x/5b/ca/1a/5bca1a469e86b7ed3309e544f4fe8d46.jpg' },
  { name:'Aadi Perukku', desc:'A traditional Tamil festival that honors rivers and water bodies, giving thanks for water\'s role in agriculture and prosperity. Families offer prayers and enjoy picnics along riverbanks.', location:'Thanjavur and Trichy', month:'July–August',
    img:'https://i.pinimg.com/736x/6b/bc/77/6bbc77a88bc72871a2d0a98d8a3770a1.jpg' }
];

const FOODS = [
  { name:'Dosa', origin:'State-wide', desc:'Crispy fermented rice crepe served with sambar and chutneys – a Tamil Nadu breakfast icon.',
    img:'https://i.pinimg.com/736x/05/a2/6a/05a26ae5198b733851138a222719b9f3.jpg' },
  { name:'Idli', origin:'State-wide', desc:'Soft steamed rice cakes – light, healthy and perfect with coconut chutney and sambar.',
    img:'https://i.pinimg.com/1200x/ef/2f/cb/ef2fcbf03d24969cc9277990d6363b24.jpg' },
  { name:'Pongal', origin:'State-wide', desc:'Comforting rice and lentil dish tempered with pepper, cumin and ghee – a sacred festival food.',
    img:'https://i.pinimg.com/736x/8f/47/cd/8f47cdeda86f544aa7cd2aa8137d3358.jpg' },
  { name:'Chettinad Chicken', origin:'Karaikudi', desc:'Fiery aromatic curry from the Chettinad region made with freshly ground spices – one of India\'s most complex curries.',
    img:'https://i.pinimg.com/736x/33/2a/70/332a7033d653db7d01f4497adca77c4b.jpg' },
  { name:'Jigarthanda', origin:'Madurai', desc:'Madurai\'s iconic cold drink – milk, almond gum, sarsaparilla syrup and ice cream. Nothing beats it on a hot afternoon.',
    img:'https://i.pinimg.com/736x/6e/f0/53/6ef05341de4a5056bfe24f4c99e39224.jpg' },
  { name:'Kari Dosa', origin:'Madurai', desc:'Minced mutton stuffed inside a crispy dosa – a Madurai street food special that defines the city.',
    img:'https://i.pinimg.com/736x/ab/71/37/ab7137ef272009091bcb19f17e332938.jpg' },
  { name:'Parotta', origin:'State-wide', desc:'Flaky layered flatbread made from maida – best enjoyed with salna (spiced curry) or egg bhurji.',
    img:'https://i.pinimg.com/1200x/09/55/7d/09557dd77d3a117316f8be2dfe0ad0db.jpg' },
  { name:'Filter Coffee', origin:'Chennai', desc:'South India\'s decoction coffee with frothed hot milk served in a traditional davara-tumbler set – pure ritual.',
    img:'https://i.pinimg.com/736x/e0/54/91/e05491004ec184982fda7f9e649d6389.jpg' }
];

const TIPS = [
  { icon:'fa-cloud-sun', title:'Best Season', text:'October to March is ideal – cool, dry weather across all regions. Avoid April–June for coastal areas (hot & humid).' },
  { icon:'fa-train', title:'Local Transport', text:'TNSTC buses connect all major towns. Chennai Metro, auto-rickshaws, and app cabs are convenient within cities.' },
  { icon:'fa-shield-halved', title:'Safety Tips', text:'Tamil Nadu is one of India\'s safest states for tourists. Keep copies of documents, stay hydrated, and trust registered guides.' },
  { icon:'fa-shirt', title:'Temple Dress Code', text:'Cover shoulders and knees when visiting temples. Many large temples (Madurai, Rameswaram) require men to remove shirts at the entrance.' },
  { icon:'fa-wallet', title:'Budget Travel', text:'Tamil Nadu is very affordable. Meals from ₹80, guesthouses from ₹600. TNSTC buses save heavily vs private taxis.' },
  { icon:'fa-language', title:'Language', text:'Tamil is the primary language. English is widely spoken in tourist areas, hotels and transport hubs.' }
];

const CATEGORIES = [
  { icon:'fa-mountain', label:'Hill Stations', count:3, cat:'Hill Stations' },
  { icon:'fa-umbrella-beach', label:'Beaches', count:2, cat:'Beaches' },
  { icon:'fa-place-of-worship', label:'Temples', count:2, cat:'Temples' },
  { icon:'fa-water', label:'Waterfalls', count:1, cat:'Waterfalls' },
  { icon:'fa-paw', label:'Wildlife', count:1, cat:'Wildlife' },
  { icon:'fa-monument', label:'Heritage', count:2, cat:'Heritage' },
  { icon:'fa-leaf', label:'Nature', count:3, cat:'Nature' },
  { icon:'fa-compass', label:'Adventure', count:2, cat:'Adventure' }
];

const GALLERY = [
  { src:'https://i.pinimg.com/736x/db/1b/90/db1b90f14218148d7143acf2698230a3.jpg',          cap:'Ooty Hills' },
  { src:'https://i.pinimg.com/1200x/d5/0f/40/d50f4072a0c4849fda014a249da0af5d.jpg',       cap:'Meenakshi Temple, Madurai' },
  { src:'https://i.pinimg.com/1200x/e3/d4/58/e3d4587c8529bc61e8a6a86541377386.jpg',   cap:'Kanyakumari Sunrise' },
  { src:'https://i.pinimg.com/1200x/18/04/cd/1804cdefef972ea58e16bd01aff83037.jpg', cap:'Shore Temple, Mahabalipuram' },
  { src:'https://i.pinimg.com/1200x/cb/e5/17/cbe517d5457e1e14faeaa8e736bbba01.jpg',    cap:'Hogenakkal Falls' },
  { src:'https://i.pinimg.com/736x/7c/c3/82/7cc382113315a389aa7aba5b9c703fad.jpg',     cap:'Brihadeeswarar Temple, Thanjavur' },
  { src:'https://i.pinimg.com/736x/66/63/2c/66632cf70d304eb71251db0022053535.jpg',    cap:'Kodaikanal Lake' },
  { src:'https://i.pinimg.com/736x/f1/46/53/f14653c135428be28c2e166f25a255f2.jpg',      cap:'Valparai Tea Estate' },
  { src:'https://i.pinimg.com/1200x/b1/c9/1c/b1c91cfc62f3494e34b96d9d813c1c8f.jpg',    cap:'Rameswaram Temple' },
  { src:'https://i.pinimg.com/1200x/04/36/8b/04368b372002c6ec81449cfd2f1b3153.jpg',       cap:'Yercaud Valley' },
  { src:'https://i.pinimg.com/1200x/0b/d0/c3/0bd0c3f96634ba03ba221f66cd0d7a7c.jpg',         cap:'Classical Dance Festival' },
  { src:'https://i.pinimg.com/736x/cc/cc/62/cccc62e797b207446fd39d9bcdc84bfd.jpg',        cap:'Pongal Celebrations' },
  { src:'https://i.pinimg.com/736x/c7/2d/69/c72d694f245e9f902f9014f30ba0f890.jpg',          cap:'South Special Briyani' }
];

/* ── STATE ───────────────────────────────────────── */
let favourites  = JSON.parse(localStorage.getItem('tn_favs') || '[]');
let theme       = localStorage.getItem('tn_theme') || 'light';
let currentCat  = 'all';
let searchQuery = '';

/* Hero slider state */
let heroIdx = 0, heroTimer = null, heroRAF = null, heroStart = null;
const HERO_DELAY = 5000;

/* Lightbox state */
let lbIdx = 0;

/* ── HELPERS ─────────────────────────────────────── */
const $ = id => document.getElementById(id);
const starsHTML = r => {
  const full = Math.floor(r), half = r % 1 >= 0.5;
  let s = '';
  for(let i=0;i<full;i++) s += '<i class="fa-solid fa-star"></i>';
  if(half) s += '<i class="fa-solid fa-star-half-stroke"></i>';
  s += ` <span style="color:var(--muted)">${r}</span>`;
  return s;
};
const isFav = id => favourites.includes(id);
const saveFavs = () => localStorage.setItem('tn_favs', JSON.stringify(favourites));

/* ── LOADER ──────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    $('loader').classList.add('fade-out');
  }, 700);
});

/* ── THEME ───────────────────────────────────────── */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  $('themeBtn').innerHTML = t === 'dark'
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem('tn_theme', t);
}
applyTheme(theme);
$('themeBtn').addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
});

/* ── NAVBAR ──────────────────────────────────────── */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  // Active nav link
  document.querySelectorAll('.nav-link').forEach(a => {
    const sec = document.querySelector(a.getAttribute('href'));
    if(sec) {
      const r = sec.getBoundingClientRect();
      a.classList.toggle('active', r.top <= 80 && r.bottom >= 80);
    }
  });
});

// Hamburger
$('hamburger').addEventListener('click', () => {
  $('hamburger').classList.toggle('open');
  $('navLinks').classList.toggle('open');
});

/* ── SCROLL PROGRESS ─────────────────────────────── */
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  $('scrollProgress').style.width = pct + '%';
});

/* ── SCROLL TO TOP ───────────────────────────────── */
window.addEventListener('scroll', () => {
  $('scrollTop').classList.toggle('hidden', window.scrollY < 400);
});
$('scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── SMOOTH NAV SCROLL ───────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const tgt = document.querySelector(a.getAttribute('href'));
    if(tgt) {
      e.preventDefault();
      tgt.scrollIntoView({ behavior: 'smooth' });
      $('navLinks').classList.remove('open');
      $('hamburger').classList.remove('open');
    }
  });
});

/* ── HERO SLIDER ─────────────────────────────────── */
function buildSlider() {
  const wrap = $('slides');
  const dotsWrap = $('heroDots');
  wrap.innerHTML = '';
  dotsWrap.innerHTML = '';

  DESTINATIONS.forEach((d, i) => {
    const s = document.createElement('div');
    s.className = 'slide' + (i === 0 ? ' active' : '');
    s.style.backgroundImage = `url('${d.img}')`;
    s.innerHTML = `
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <div class="slide-badge">${d.district} · ${d.cat}</div>
        <h1 class="slide-title">${d.name}</h1>
        <p class="slide-desc">${d.desc}</p>
        <button class="slide-cta" onclick="openModal(${d.id})">
          Explore Now <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>`;
    wrap.appendChild(s);

    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  slides[heroIdx].classList.remove('active');
  dots[heroIdx].classList.remove('active');
  heroIdx = (n + DESTINATIONS.length) % DESTINATIONS.length;
  slides[heroIdx].classList.add('active');
  dots[heroIdx].classList.add('active');
  resetProgress();
}

function heroNext() { goToSlide(heroIdx + 1); }
function heroPrev() { goToSlide(heroIdx - 1); }

function resetProgress() {
  cancelAnimationFrame(heroRAF);
  clearTimeout(heroTimer);
  $('heroBar').style.width = '0%';
  heroStart = performance.now();
  function tick(now) {
    const pct = Math.min(((now - heroStart) / HERO_DELAY) * 100, 100);
    $('heroBar').style.width = pct + '%';
    if(pct < 100) heroRAF = requestAnimationFrame(tick);
  }
  heroRAF = requestAnimationFrame(tick);
  heroTimer = setTimeout(heroNext, HERO_DELAY);
}

$('heroNext').addEventListener('click', heroNext);
$('heroPrev').addEventListener('click', heroPrev);

// Keyboard
document.addEventListener('keydown', e => {
  if(e.key === 'ArrowRight') heroNext();
  if(e.key === 'ArrowLeft')  heroPrev();
  if(e.key === 'Escape')     closeModal();
});

// Touch swipe
let tsX = 0;
document.querySelector('.hero') && document.querySelector('.hero').addEventListener('touchstart', e => {
  tsX = e.touches[0].clientX;
});
document.querySelector('.hero') && document.querySelector('.hero').addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - tsX;
  if(Math.abs(dx) > 50) dx < 0 ? heroNext() : heroPrev();
});

// Pause on hover
document.querySelector('.hero') && document.querySelector('.hero').addEventListener('mouseenter', () => {
  cancelAnimationFrame(heroRAF);
  clearTimeout(heroTimer);
});
document.querySelector('.hero') && document.querySelector('.hero').addEventListener('mouseleave', resetProgress);

/* ── DESTINATION CARDS ───────────────────────────── */
function destCard(d) {
  const fav = isFav(d.id);
  return `
  <div class="dest-card" data-id="${d.id}">
    <div class="card-img">
      <img src="${d.img}" alt="${d.name}" loading="lazy" />
      <span class="card-cat">${d.cat}</span>
      <button class="card-fav ${fav ? 'on' : ''}" data-id="${d.id}" aria-label="Favourite">
        <i class="fa-${fav ? 'solid' : 'regular'} fa-heart"></i>
      </button>
    </div>
    <div class="card-body">
      <div class="card-name">${d.name}</div>
      <div class="card-dist"><i class="fa-solid fa-location-dot"></i>${d.district}</div>
      <div class="card-stars">${starsHTML(d.rating)}</div>
      <p class="card-desc">${d.desc}</p>
      <div class="card-meta">
        <span><i class="fa-solid fa-calendar"></i>${d.best}</span>
        <span><i class="fa-solid fa-ticket"></i>${d.fee}</span>
        <span><i class="fa-solid fa-wallet"></i>${d.budget}</span>
      </div>
      <button class="card-view" onclick="openModal(${d.id})">View Details</button>
    </div>
  </div>`;
}

function renderDest() {
  const q = searchQuery.toLowerCase();
  const filtered = DESTINATIONS.filter(d => {
    const matchCat = currentCat === 'all' || d.cat === currentCat;
    const matchQ   = !q || d.name.toLowerCase().includes(q)
                       || d.district.toLowerCase().includes(q)
                       || d.cat.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  const grid = $('destGrid');
  grid.innerHTML = filtered.map(destCard).join('');
  $('noResults').classList.toggle('hidden', filtered.length > 0);

  // Fav button events
  grid.querySelectorAll('.card-fav').forEach(btn => {
    btn.addEventListener('click', () => toggleFav(+btn.dataset.id));
  });
}

// Category chips
$('chips').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if(!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  currentCat = chip.dataset.cat;
  renderDest();
});

// Search
$('destSearch').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderDest();
});

/* ── FAVOURITES ──────────────────────────────────── */
function toggleFav(id) {
  if(isFav(id)) {
    favourites = favourites.filter(f => f !== id);
  } else {
    favourites.push(id);
  }
  saveFavs();
  updateFavBadge();
  renderDest();
  renderFavSection();
}

function updateFavBadge() {
  $('favBadge').textContent = favourites.length;
}

function renderFavSection() {
  const sec  = $('favSection');
  const grid = $('favGrid');
  if(favourites.length === 0) {
    sec.classList.add('hidden');
    return;
  }
  sec.classList.remove('hidden');
  const favDests = DESTINATIONS.filter(d => isFav(d.id));
  grid.innerHTML = favDests.map(destCard).join('');
  grid.querySelectorAll('.card-fav').forEach(btn => {
    btn.addEventListener('click', () => toggleFav(+btn.dataset.id));
  });
}

// Fav nav button scrolls to fav section
$('favBtn').addEventListener('click', () => {
  const sec = $('favSection');
  if(!sec.classList.contains('hidden')) {
    sec.scrollIntoView({ behavior:'smooth' });
  }
});

/* ── NAV SEARCH DROPDOWN ─────────────────────────── */
$('navSearch').addEventListener('input', function() {
  const q = this.value.toLowerCase().trim();
  const dd = $('navDropdown');
  if(!q) { dd.classList.add('hidden'); return; }
  const res = DESTINATIONS.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.district.toLowerCase().includes(q) ||
    d.cat.toLowerCase().includes(q)
  ).slice(0,5);
  if(!res.length) { dd.classList.add('hidden'); return; }
  dd.classList.remove('hidden');
  dd.innerHTML = res.map(d =>
    `<div class="ndd-item" onclick="openModal(${d.id});$('navDropdown').classList.add('hidden');$('navSearch').value=''">
      <i class="fa-solid fa-location-dot"></i>
      <span>${d.name} <small style="color:var(--muted)">– ${d.district}</small></span>
    </div>`
  ).join('');
});
document.addEventListener('click', e => {
  if(!e.target.closest('.nav-search-box')) $('navDropdown').classList.add('hidden');
});

/* ── GALLERY ─────────────────────────────────────── */
function buildGallery() {
  $('galleryGrid').innerHTML = GALLERY.map((g, i) => `
    <div class="g-item" onclick="openLightbox(${i})">
      <img src="${g.src}" alt="${g.cap}" loading="lazy" />
      <div class="g-overlay"><span>${g.cap}</span></div>
    </div>`).join('');
}

function openLightbox(i) {
  lbIdx = i;
  $('lbImg').src   = GALLERY[i].src;
  $('lbCaption').textContent = GALLERY[i].cap;
  $('lightbox').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  $('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
}
$('lbClose').addEventListener('click', closeLightbox);
$('lbPrev').addEventListener('click', () => {
  lbIdx = (lbIdx - 1 + GALLERY.length) % GALLERY.length;
  $('lbImg').src = GALLERY[lbIdx].src;
  $('lbCaption').textContent = GALLERY[lbIdx].cap;
});
$('lbNext').addEventListener('click', () => {
  lbIdx = (lbIdx + 1) % GALLERY.length;
  $('lbImg').src = GALLERY[lbIdx].src;
  $('lbCaption').textContent = GALLERY[lbIdx].cap;
});
$('lightbox').addEventListener('click', e => { if(e.target === $('lightbox')) closeLightbox(); });

/* ── CATEGORY SHOWCASE ───────────────────────────── */
function buildCatShowcase() {
  $('catGrid').innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" onclick="filterByCat('${c.cat}')">
      <i class="fa-solid ${c.icon}"></i>
      <h4>${c.label}</h4>
      <span>${c.count} destination${c.count !== 1 ? 's' : ''}</span>
    </div>`).join('');
}

function filterByCat(cat) {
  currentCat = cat;
  document.querySelectorAll('.chip').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === cat);
  });
  renderDest();
  $('destinations').scrollIntoView({ behavior:'smooth' });
}

/* ── FESTIVALS ───────────────────────────────────── */
function buildFestivals() {
  $('festGrid').innerHTML = FESTIVALS.map(f => `
    <div class="fest-card">
      <div class="fest-img"><img src="${f.img}" alt="${f.name}" loading="lazy" /></div>
      <div class="fest-body">
        <h4>${f.name}</h4>
        <p>${f.desc}</p>
        <div class="fest-tags">
          <span class="fest-tag"><i class="fa-solid fa-location-dot"></i>${f.location}</span>
          <span class="fest-tag"><i class="fa-solid fa-calendar"></i>${f.month}</span>
        </div>
      </div>
    </div>`).join('');
}

/* ── FOODS ───────────────────────────────────────── */
function buildFoods() {
  $('foodGrid').innerHTML = FOODS.map(f => `
    <div class="food-card">
      <div class="food-img"><img src="${f.img}" alt="${f.name}" loading="lazy" /></div>
      <div class="food-body">
        <h4>${f.name}</h4>
        <div class="food-origin">${f.origin}</div>
        <p>${f.desc}</p>
      </div>
    </div>`).join('');
}

/* ── TIPS ────────────────────────────────────────── */
function buildTips() {
  $('tipsGrid').innerHTML = TIPS.map(t => `
    <div class="tip-card">
      <div class="tip-icon"><i class="fa-solid ${t.icon}"></i></div>
      <div class="tip-text"><h4>${t.title}</h4><p>${t.text}</p></div>
    </div>`).join('');
}

/* ── DESTINATION MODAL ───────────────────────────── */
function openModal(id) {
  const d = DESTINATIONS.find(x => x.id === id);
  if(!d) return;

  $('modalBody').innerHTML = `
    <div class="modal-hero"><img src="${d.img}" alt="${d.name}" /></div>
    <div class="modal-body">
      <span class="md-cat">${d.cat}</span>
      <h2>${d.name}</h2>
      <div class="md-dist"><i class="fa-solid fa-location-dot"></i>${d.district} District</div>
      <div class="md-stars">${starsHTML(d.rating)}</div>
      <p class="md-desc">${d.full}</p>

      <div class="md-stitle"><i class="fa-solid fa-binoculars"></i> Famous Attractions</div>
      <div class="md-tags">${d.attractions.map(a=>`<span class="md-tag">${a}</span>`).join('')}</div>

      <div class="md-stitle"><i class="fa-solid fa-person-hiking"></i> Activities</div>
      <div class="md-tags">${d.activities.map(a=>`<span class="md-tag">${a}</span>`).join('')}</div>

      <div class="md-stitle"><i class="fa-solid fa-map"></i> Nearby Places</div>
      <div class="md-tags">${d.nearby.map(n=>`<span class="md-tag">${n}</span>`).join('')}</div>

      <div class="md-stitle"><i class="fa-solid fa-utensils"></i> Local Food</div>
      <div class="md-tags">${d.food.map(f=>`<span class="md-tag">${f}</span>`).join('')}</div>

      <div class="md-2col">
        <div class="md-info"><span>Best Time</span><b>${d.best}</b></div>
        <div class="md-info"><span>Entry Fee</span><b>${d.fee}</b></div>
        <div class="md-info"><span>Est. Budget</span><b>${d.budget}</b></div>
        <div class="md-info"><span>District</span><b>${d.district}</b></div>
      </div>

      <div class="md-stitle"><i class="fa-solid fa-lightbulb"></i> Travel Tip</div>
      <div class="md-tip">${d.tip}</div>
    </div>`;

  $('modalOverlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('modalOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}
$('modalClose').addEventListener('click', closeModal);
$('modalOverlay').addEventListener('click', e => { if(e.target === $('modalOverlay')) closeModal(); });

/* ── NEWSLETTER ──────────────────────────────────── */
$('nlForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = $('nlEmail').value.trim();
  if(!/\S+@\S+\.\S+/.test(email)) return;
  $('nlForm').classList.add('hidden');
  $('nlMsg').classList.remove('hidden');
});

/* ── CONTACT FORM ────────────────────────────────── */
$('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = $('contactForm').querySelector('button');
  btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message Sent!';
  btn.style.background = '#27ae60';
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
    btn.style.background = '';
    $('contactForm').reset();
  }, 3000);
});

/* ── SCROLL-REVEAL ANIMATION ─────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting) {
        en.target.style.opacity = '1';
        en.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.dest-card,.fest-card,.food-card,.tip-card,.cat-card,.g-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    obs.observe(el);
  });
}

/* ── IMAGE FALLBACK ──────────────────────────────── */
// If any <img> fails to load, swap in a tasteful gradient placeholder
function initImgFallbacks() {
  document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG') {
      const colors = ['1a7a4a','0066cc','e76f51','f4a261','2d6a4f','264653'];
      const col = colors[Math.floor(Math.random() * colors.length)];
      e.target.src = `https://placehold.co/900x600/${col}/ffffff?text=${encodeURIComponent(e.target.alt || 'Tamil Nadu')}`;
      e.target.onerror = null; // prevent infinite loop
    }
  }, true);
}

/* ── INIT ────────────────────────────────────────── */
(function init() {
  initImgFallbacks();
  buildSlider();
  resetProgress();
  renderDest();
  renderFavSection();
  updateFavBadge();
  buildGallery();
  buildCatShowcase();
  buildFestivals();
  buildFoods();
  buildTips();
  setTimeout(initReveal, 100);
})();
