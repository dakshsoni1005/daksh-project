require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Google Generative AI (Requires API Key)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "YOUR_API_KEY_HERE");

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files like html, css, js

const USERS_FILE = process.env.VERCEL ? '/tmp/users.json' : path.join(__dirname, 'users.json');

// Helper to read users
const readUsers = () => {
    if (process.env.VERCEL) {
        if (!fs.existsSync(USERS_FILE)) {
            const bundledPath = path.join(__dirname, 'users.json');
            if (fs.existsSync(bundledPath)) {
                fs.copyFileSync(bundledPath, USERS_FILE);
            } else {
                fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
            }
        }
    } else {
        if (!fs.existsSync(USERS_FILE)) {
            return [];
        }
    }
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
};

// Helper to write users
const writeUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// --- START AI CHAT LOGIC ---

// Comprehensive Knowledge-Based AI Engine
const knowledgeDB = [
    // Greetings
    {
        tags: ["hello", "hi", "namaste", "hey", "kem cho", "kaise ho", "good morning", "good evening", "helo", "hii", "namaskar", "jai shree krishna", "jai hind"],
        replies: [
            "Namaste! 🙏 I am KrishiAI, your farming assistant. Ask me anything about crops, weather, prices, pests, or govt schemes!",
            "Hello farmer! 🌱 How can I help you today? You can ask about any crop, market price, weather, soil, or government scheme.",
            "Kem cho! 🙏 I'm your Krishi AI Guru. I can help with weather, mandi prices, pest control, fertilizers, and much more!"
        ]
    },
    // Thanks
    {
        tags: ["thank", "thanks", "dhanyavad", "aabhar", "shukriya"],
        replies: [
            "You're welcome! 🙏 Happy farming! Ask anytime you need help.",
            "Glad I could help! Feel free to ask more questions about your crops.",
            "Always here for you! Jai Kisan! 🌾"
        ]
    },
    // Who are you
    {
        tags: ["who are you", "what are you", "your name", "tu kon", "tame kon", "kaun ho"],
        replies: [
            "I am KrishiAI 🤖 — your intelligent farming assistant! I can help with crop advice, weather updates, market prices, pest solutions, government schemes, and more.",
            "I'm your Krishi AI Guru! Think of me as a digital agriculture expert available 24/7 to help Indian farmers."
        ]
    },
    // What can you do
    {
        tags: ["what can you do", "features", "help me", "shu kari shako", "kya kar sakte", "guide"],
        replies: [
            "I can help you with:\n🌦️ Weather forecasts\n💰 Mandi/Market prices\n🌱 Crop advice (Cotton, Wheat, Rice, Groundnut, etc.)\n🐛 Pest & disease solutions\n🏛️ Govt schemes (PM-KISAN, PMFBY, KCC)\n🧪 Soil & fertilizer tips\n💧 Irrigation guidance\n\nJust type your question!"
        ]
    },
    // Weather
    {
        tags: ["weather", "rain", "forecast", "temperature", "mausam", "varsad", "garmi", "thand", "thandi", "havaman", "monsoon", "barish", "baarish"],
        replies: [
            "🌦️ Check our 'Weather Alerts' section for your local 3-day forecast. Weather monitoring is crucial for:\n- Sowing timing\n- Irrigation scheduling\n- Pest outbreak prediction\n- Harvest planning\n\nWhich district's weather do you want to know about?",
            "🌧️ For accurate weather data, use the Weather Alerts feature on our platform. You can see temperature, rainfall probability, and humidity for your area. Planning irrigation based on weather saves up to 30% water!",
            "☀️ Weather affects every farming decision! Our Weather section gives you real-time alerts. During monsoon, check daily for heavy rain warnings to protect your standing crop."
        ]
    },
    // Market Prices
    {
        tags: ["price", "market", "mandi", "rate", "cost", "sell", "bhav", "kimat", "msp", "bazaar", "bazar", "kharido", "vecho"],
        replies: [
            "💰 Current approximate Mandi rates:\n🌾 Wheat: ₹2400-2600/q\n🥜 Groundnut: ₹5500-6000/q\n🧵 Cotton: ₹6200-6800/q\n🌽 Maize: ₹1900-2200/q\n🍚 Paddy: ₹2100-2300/q\n\nCheck 'Market Watch' for live rates in your nearest mandi!",
            "📊 Market prices change daily! Tips to get best price:\n1. Check multiple mandis before selling\n2. Grade your produce properly\n3. Sell when demand is high\n4. Use MSP if market rate is lower\n\nWhich crop's price do you want to know?",
            "💹 Use the Market Watch feature for real-time prices. Pro tip: Store crops in warehouses (get warehouse receipt) and sell when prices peak. Cotton prices usually rise in March-April!"
        ]
    },
    // Soil & Fertilizer
    {
        tags: ["soil", "fertilizer", "health", "urea", "npk", "dap", "potash", "jamin", "khatar", "manure", "compost", "organic matter", "mati", "zameen"],
        replies: [
            "🧪 Soil Health Tips:\n- Get a Soil Health Card from your nearest agriculture office\n- NPK ratio 4:2:1 works well for most cereals\n- Don't overuse Urea — it damages soil long-term\n- Add FYM (Farm Yard Manure) every season\n- Test soil pH — ideal is 6.0 to 7.5\n\nWhich crop are you growing? I can suggest specific fertilizer doses!",
            "🌿 Fertilizer Guide:\n- DAP: Apply at sowing time (basal dose)\n- Urea: Split into 2-3 doses during crop growth\n- Potash (MOP): Important for fruit/grain quality\n- Zinc Sulphate: For rice and wheat\n- Gypsum: Essential for groundnut\n\nRemember: Soil test before fertilizing saves money!",
            "🧬 Healthy soil = Healthy crops! Tips:\n1. Practice crop rotation\n2. Use green manure (Dhaincha/Moong)\n3. Add vermicompost\n4. Avoid burning crop residue\n5. Mulching retains moisture\n\nWant fertilizer recommendation for a specific crop?"
        ]
    },
    // Pest & Disease
    {
        tags: ["pest", "bug", "insect", "disease", "worm", "kida", "rog", "dawai", "spray", "attack", "fungus", "blight", "virus", "jivat", "keeda"],
        replies: [
            "🐛 Pest Management Tips:\n- Use our Pest Scanner to identify the exact pest!\n- Always identify first, then spray\n- Prefer bio-pesticides (Neem oil, Beauveria)\n- Use pheromone traps for monitoring\n- Spray in evening, not afternoon\n\nWhich crop has the pest problem? I can suggest specific solutions!",
            "🦠 Common Crop Diseases:\n🌾 Wheat: Rust, Karnal Bunt\n🧵 Cotton: Pink Bollworm, Whitefly\n🍚 Rice: Blast, BPH\n🥜 Groundnut: Tikka, White Grub\n🌽 Maize: Fall Armyworm\n\nUpload a photo in our Scanner section for instant diagnosis!",
            "💊 Integrated Pest Management (IPM):\n1. Cultural control (crop rotation, resistant varieties)\n2. Biological control (Trichogramma cards, ladybugs)\n3. Mechanical control (traps, handpicking)\n4. Chemical control (last resort!)\n\nTell me which pest you see and I'll guide you!"
        ]
    },
    // Govt Schemes
    {
        tags: ["scheme", "subsidy", "loan", "kisan", "govt", "government", "yojna", "sahay", "bank", "insurance", "pm-kisan", "kcc", "pmfby", "sarkari", "sarkar"],
        replies: [
            "🏛️ Major Government Schemes for Farmers:\n\n1. PM-KISAN: ₹6000/year (3 installments)\n2. PMFBY: Crop insurance at just 2% premium\n3. KCC: Loan up to ₹3 lakh at 4% interest\n4. Soil Health Card: Free soil testing\n5. PM Krishi Sinchai Yojna: Drip/sprinkler subsidy (55-75%)\n6. e-NAM: Sell online in any mandi\n\nWhich scheme interests you?",
            "💳 Financial Support:\n- KCC Loan: Up to ₹3 lakh at 4% (with subvention)\n- PM-KISAN: ₹2000 every 4 months directly to bank\n- PMFBY: Insure your crop — Kharif 2%, Rabi 1.5%\n- Subsidy on farm equipment: 50-80%\n\nVisit your nearest CSC center or bank to apply!",
            "📋 How to Apply:\n- PM-KISAN: pmkisan.gov.in or CSC center\n- KCC: Any bank with land documents\n- PMFBY: Through bank or CSC within sowing window\n- Equipment subsidy: State agriculture dept website\n\nNeed help with a specific scheme?"
        ]
    },
    // Cotton
    {
        tags: ["cotton", "kapas", "kapasiyum", "narma"],
        replies: [
            "🧵 Cotton (Kapas) Guide:\n- Season: Kharif (June-July sowing)\n- Spacing: 90cm x 60cm\n- Major pest: Pink Bollworm — use pheromone traps!\n- Market rate: ~₹6500/q\n- Tips: Deep ploughing in summer, use Bt varieties, timely picking\n- Irrigation: Critical at flowering and boll formation\n\nAsk me about specific cotton problems!",
            "🧵 Cotton Pest Alert:\n⚠️ Pink Bollworm: Use pheromone traps + refuge rows\n⚠️ Whitefly: Neem oil spray works well\n⚠️ Bollworm: Spray at ETL (Economic Threshold Level)\n\nTip: Pick cotton in 3-4 intervals for better quality and price. Don't delay harvest — it reduces grade!"
        ]
    },
    // Wheat
    {
        tags: ["wheat", "gehu", "ghau", "ghuh"],
        replies: [
            "🌾 Wheat (Gehu/Ghau) Guide:\n- Sowing: October-November\n- Varieties: GW-496, Lok-1, HD-3086\n- Seed rate: 100-125 kg/ha\n- Irrigation: 4-6 irrigations needed\n  1st: CRI stage (21 days)\n  2nd: Tillering (45 days)\n  3rd: Jointing\n  4th: Flowering\n  5th: Grain filling\n- MSP: ~₹2275/q\n\nWhich aspect do you need help with?",
            "🌾 Wheat Tips:\n- Late sowing? Use early maturing varieties\n- Yellow leaves? Apply Zinc Sulphate 25 kg/ha\n- Rust disease? Spray Propiconazole immediately\n- Apply last irrigation at dough stage for best grain weight\n- Harvest at 14% moisture for best storage"
        ]
    },
    // Rice
    {
        tags: ["rice", "paddy", "dhan", "chokha", "chawal", "bhaat"],
        replies: [
            "🍚 Rice (Dhan/Paddy) Guide:\n- Season: Kharif (June-July transplanting)\n- Nursery: 20-25 days old seedlings\n- Spacing: 20cm x 15cm (SRI method saves water!)\n- Major diseases: Blast, BPH, Stem Borer\n- Apply Nitrogen in 3 splits\n- AWD (Alternate Wetting & Drying) saves 25% water\n\nWhich rice variety are you growing?"
        ]
    },
    // Groundnut
    {
        tags: ["groundnut", "peanut", "magfali", "sing", "mungfali"],
        replies: [
            "🥜 Groundnut (Magfali/Sing) Guide:\n- Season: Kharif (June-July)\n- Soil: Sandy loam (well-drained)\n- Spacing: 30cm x 10cm\n- KEY: Apply Gypsum 500 kg/ha at flowering!\n- Pests: White Grub (Carbofuran at sowing)\n- Disease: Tikka (Mancozeb spray)\n- Harvest when inside shell turns dark\n\nCurrent rate: ~₹5800/q"
        ]
    },
    // Sugarcane
    {
        tags: ["sugarcane", "ganna", "serdi", "sherd"],
        replies: [
            "🎋 Sugarcane (Ganna) Guide:\n- Planting: October (Adsali) or February (Suru)\n- Sets: Use disease-free 2-3 budded sets\n- Major disease: Red Rot — crop rotation is must!\n- Drip irrigation: Saves 40% water, 25% more yield\n- Earthing up at 3-4 months prevents lodging\n- Ratoon management: Stubble shaving + gap filling\n\nDrip irrigation subsidy available up to 75%!"
        ]
    },
    // Maize
    {
        tags: ["maize", "corn", "makka", "makai", "bhutta"],
        replies: [
            "🌽 Maize (Makka) Guide:\n- Season: Kharif or Rabi (with irrigation)\n- Spacing: 60cm x 20cm\n- ⚠️ Major Pest: Fall Armyworm — check whorls!\n  Treatment: Emamectin benzoate spray\n- Zinc deficiency shows white streaks on leaves\n- Don't waterlog — maize is very sensitive to it\n- Harvest when husk turns brown and kernels are hard"
        ]
    },
    // Vegetables
    {
        tags: ["vegetable", "tomato", "onion", "potato", "bhaji", "sabji", "shak", "tamatar", "batata", "dungri", "kanda"],
        replies: [
            "🥬 Vegetable Farming Tips:\n🍅 Tomato: Stake plants, spray for leaf curl virus\n🧅 Onion: Plant in November, harvest when tops fall\n🥔 Potato: Use certified seed tubers, ridge planting\n🌶️ Chilli: Thrips control is critical\n\nVegetables give faster returns than field crops. Use drip irrigation + mulching for best results!"
        ]
    },
    // Irrigation
    {
        tags: ["irrigation", "water", "pani", "paani", "sinchai", "drip", "sprinkler", "bore", "borewell", "canal"],
        replies: [
            "💧 Irrigation Guide:\n- Drip irrigation: Best for row crops (55-75% subsidy!)\n- Sprinkler: Good for wheat, groundnut\n- Flood irrigation: Wastes up to 60% water\n- Schedule irrigation based on crop stage, not calendar\n- Mulching reduces water need by 30-40%\n- Soil moisture sensor helps save water\n\nSubsidy available under PMKSY scheme!"
        ]
    },
    // Organic farming
    {
        tags: ["organic", "natural", "jaivik", "prakrutik", "zbnf", "zero budget"],
        replies: [
            "🌿 Organic/Natural Farming:\n- Start with Jeevamrut (cow dung + urine + jaggery)\n- Vermicompost: 5 tons/ha replaces chemical fertilizer\n- Bio-fertilizers: Rhizobium, PSB, Azotobacter\n- Neem oil for pest control\n- ZBNF (Zero Budget Natural Farming): Gujarat & AP models\n- Premium price for organic produce: 20-40% more!\n\nTakes 2-3 seasons to fully transition. Start small!"
        ]
    },
    // Seed
    {
        tags: ["seed", "bij", "beej", "variety", "hybrid", "jat"],
        replies: [
            "🌱 Seed Selection Tips:\n- Always buy certified/branded seeds\n- Choose varieties recommended for your region\n- Hybrid seeds give higher yield but can't be reused\n- Treat seeds before sowing (Thiram/Carbendazim)\n- Check germination %: should be >85%\n- Store seeds in cool, dry place\n\nContact your nearest Krushi Vigyan Kendra (KVK) for variety recommendations!"
        ]
    },
    // Harvest
    {
        tags: ["harvest", "katai", "cutting", "kapat", "kapa", "lani"],
        replies: [
            "🌾 Harvest Tips:\n- Harvest at right moisture (varies by crop)\n- Wheat: Harvest when grain is hard, 14% moisture\n- Rice: 80% grains golden, 20-22% moisture\n- Groundnut: Kernel shell dark inside\n- Use proper drying to avoid aflatoxin\n- Clean produce gets better mandi price\n\nPost-harvest losses in India are 15-20%. Proper storage saves money!"
        ]
    },
    // Storage
    {
        tags: ["storage", "warehouse", "godown", "bharani", "store", "rakh"],
        replies: [
            "🏪 Storage Tips:\n- Dry grain properly (below 12% moisture)\n- Use warehouse receipts for bank loans\n- Hermetic bags prevent insect damage without chemicals\n- Government warehouses available at subsidized rates\n- FPO godowns can store collectively\n\nStore and sell later when prices are higher — this alone can increase income by 15-25%!"
        ]
    },
    // Loan / Finance
    {
        tags: ["paisa", "rupiya", "rupee", "income", "kamai", "aavak", "profit", "loss", "nuksan", "faayda"],
        replies: [
            "💰 Income Tips for Farmers:\n- Diversify: Don't depend on one crop\n- Value addition: Process before selling (dal, flour, oil)\n- Direct selling: FPO, e-NAM, local markets\n- Allied activities: Dairy, poultry, beekeeping\n- Reduce input cost with organic/integrated farming\n\nKCC loan at 4% interest can help during lean periods. Apply at your nearest bank!"
        ]
    },
    // General what/how/why questions
    {
        tags: ["what", "how", "why", "when", "which", "tell", "explain", "suggest", "batao", "samjhao", "kaho", "kehjo", "jano"],
        replies: [
            "That's a great question! 🤔 I specialize in agriculture. I can help with:\n\n🌾 Crop advice (Cotton, Wheat, Rice, Groundnut, Maize, Sugarcane)\n💰 Market prices & where to sell\n🌦️ Weather and irrigation\n🐛 Pest and disease solutions\n🏛️ Government schemes & subsidies\n🧪 Soil testing & fertilizers\n🌱 Seeds & organic farming\n\nPlease specify which topic you need help with!"
        ]
    },
];

// Smart conversational response engine
function getLocalResponse(text) {
    const lowerText = text.toLowerCase().trim();

    // Handle very short/empty messages
    if (lowerText.length < 2) {
        return "Please type your question about farming, crops, prices, or schemes! I'm here to help 🌾";
    }

    // Score each topic
    let bestMatch = null;
    let maxScore = 0;

    for (const topic of knowledgeDB) {
        let score = 0;
        for (const tag of topic.tags) {
            if (lowerText.includes(tag)) {
                // Longer tag matches get higher score (more specific)
                score += tag.length;
            }
        }
        if (score > maxScore) {
            maxScore = score;
            bestMatch = topic;
        }
    }

    if (bestMatch && maxScore > 0) {
        // Return random reply from matching topic
        return bestMatch.replies[Math.floor(Math.random() * bestMatch.replies.length)];
    }

    // Smart default — give a helpful farming tip instead of an error
    const tips = [
        "🌾 Farming Tip: Crop rotation improves soil health and reduces pest problems. Try alternating cereals with legumes!\n\nYou can ask me about: Weather, Mandi prices, Crops, Pests, Govt schemes, Irrigation, Seeds, or Organic farming.",
        "🌱 Did you know? Mulching can reduce water usage by 40% and suppress weeds naturally!\n\nTry asking me specific questions like:\n- 'What is the price of cotton?'\n- 'How to control pests in wheat?'\n- 'Tell me about PM-KISAN scheme'",
        "💡 Pro Tip: Selling through FPO (Farmer Producer Organization) can get you 10-20% better prices!\n\nI can help with: Crop advice, Market rates, Weather, Fertilizers, Pest solutions, and Govt schemes. Just ask!",
        "🧑‍🌾 Tip: Get your Soil Health Card for free from your district agriculture office. It tells you exactly which fertilizers your soil needs!\n\nAsk me about any crop, price, scheme, or farming technique!"
    ];
    return tips[Math.floor(Math.random() * tips.length)];
}

// Chat Endpoint
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ reply: "Please send a message." });
    }

    try {
        // 1. Try Google Gemini API first
        if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE' && process.env.GEMINI_API_KEY.length > 20) {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = `You are KrishiAI, a helpful agricultural assistant for Indian farmers. You speak in simple English. Answer this question concisely and helpfully. Keep responses under 80 words. Add relevant emojis: ${message}`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            return res.json({ reply: text, source: "ai" });
        }

        // 2. Fallback to Smart Local Logic
        const reply = getLocalResponse(message);
        return res.json({ reply, source: "local" });

    } catch (error) {
        console.log("AI error, using fallback:", error.message);
        const reply = getLocalResponse(message);
        return res.json({ reply, source: "local" });
    }
});

// --- END AI CHAT LOGIC ---

// Signup Endpoint
app.post('/api/signup', (req, res) => {
    const { fullName, mobile, state, password } = req.body;

    if (!fullName || !mobile || !state || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const users = readUsers();

    // Check if user already exists
    const existingUser = users.find(u => u.mobile === mobile);
    if (existingUser) {
        return res.status(400).json({ success: false, message: 'User with this mobile number already exists.' });
    }

    const newUser = {
        id: Date.now(),
        fullName,
        mobile,
        state,
        password, // Ideally hash this, but for demo plain text is ok (user asked for details to be saved)
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    writeUsers(users);

    res.json({ success: true, message: 'Account created successfully!' });
});

// Login Endpoint
app.post('/api/login', (req, res) => {
    const { mobile, password } = req.body; // Changed from just password check to mobile + password

    const users = readUsers();
    const user = users.find(u => u.mobile === mobile && u.password === password);

    if (user) {
        res.json({ success: true, user: { fullName: user.fullName, mobile: user.mobile, state: user.state } });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }
});

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;




