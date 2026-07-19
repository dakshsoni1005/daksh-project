const translations = {
    en: {
        title: "Empowering Every Farmer with <span style=\"color: var(--secondary-color)\">AI Intelligence</span>",
        desc: "Bridging the gap between traditional wisdom and modern technology. Get real-time advice, weather alerts, and market insights in your native language.",
        nav: ["Features", "Scanner", "AI Guru", "Feedback"],
        f_soil: ["AI Soil Health", "Personalized fertilizer recommendations based on your soil health card data."],
        f_weather: ["Weather Alerts", "Hyper-local weather forecasts and predictive alerts for crop protection."],
        f_pest: ["Pest Detection", "Upload a photo of your crop to instantly identify pests and diseases."],
        f_market: ["Market Watch", "Real-time Mandi prices to help you sell at the best time."],
        f_govt: ["Govt. Integration", "Direct access to subsidies, PM-KISAN, and insurance schemes."],
        scanner: ["Pest Detection Scanner", "Simply take a photo of your crop. Our AI instantly identifies the problem.", "Launch Scanner"],
        bot: ["Krishi AI Guru", "Namaste! I am your AI Expert. How can I help you today?", "Type your query..."]
    },
    gu: {
        title: "દરેક ખેડૂતને <span style=\"color: var(--secondary-color)\">AI ઇન્ટેલિજન્સ</span> સાથે સશક્ત બનાવવું",
        desc: "પરંપરાગત જ્ઞાન અને આધુનિક ટેકનોલોજી વચ્ચેના અંતરને દૂર કરવું. તમારી પોતાની ભાષામાં સલાહ, હવામાન અને બજાર ભાવ મેળવો.",
        nav: ["સુવિધાઓ", "સ્કેનર", "AI ગુરુ", "પ્રતિસાદ"],
        f_soil: ["AI જમીન આરોગ્ય", "તમારા સોઇલ હેલ્થ કાર્ડના ડેટાના આધારે ખાતરની ભલામણો."],
        f_weather: ["હવામાન એલર્ટ", "પાક સુરક્ષા માટે સ્થાનિક હવામાન આગાહી અને ચેતવણીઓ."],
        f_pest: ["જીવાત ઓળખ", "જીવાત અને રોગોની તાત્કાલિક ઓળખ માટે પાકનો ફોટો અપલોડ કરો."],
        f_market: ["બજાર ભાવ", "સૌથી સારા ભાવે વેચવા માટે રીઅલ-ટાઇમ માર્કેટ ભાવ."],
        f_govt: ["સરકારી યોજનાઓ", "સબસિડી, PM-KISAN અને વીમા યોજનાઓ વિશે સીધી માહિતી."],
        scanner: ["જીવાત ઓળખ સ્કેનર", "ફક્ત તમારા પાકનો ફોટો લો. અમારું AI તરત જ સમસ્યાને ઓળખી કાઢશે.", "સ્કેનર શરૂ કરો"],
        bot: ["કૃષિ AI ગુરુ", "નમસ્તે! હું તમારો AI નિષ્ણાત છું. આજે હું તમને કેવી રીતે મદદ કરી શકું?", "તમારો પ્રશ્ન લખો..."]
    },
    hi: {
        title: "हर किसान को <span style=\"color: var(--secondary-color)\">AI इंटेलिजेंस</span> से सशक्त बनाना",
        desc: "पारंपरिक ज्ञान और आधुनिक तकनीक के बीच की दूरी को कम करना। अपनी स्थानीय भाषा में सलाह, मौसम और बाजार की जानकारी प्राप्त करें।",
        nav: ["विशेषताएं", "स्कैनर", "AI गुरु", "प्रतिक्रिया"],
        f_soil: ["AI मृदा रिपोर्ट", "आपके सॉइल हेल्थ कार्ड के आधार पर उर्वरक की सिफारिशें।"],
        f_weather: ["मौसम अलर्ट", "फसल सुरक्षा के लिए स्थानीय मौसम पूर्वानुमान और चेतावनी।"],
        f_pest: ["कीट पहचान", "कीटों और रोगों की तुरंत पहचान के लिए अपनी फसल का फोटो अपलोड करें।"],
        f_market: ["का बाज़ार भाव", "सही समय पर बेचने के लिए मंडी की ताज़ा कीमतें।"],
        f_govt: ["सरकारी योजनाएं", "सब्सिडी, PM-KISAN और बीमा योजनाओं तक सीधी पहुँच।"],
        scanner: ["कीट पहचान स्कैनर", "बस अपनी फसल की एक फोटो लें। हमारा AI तुरंत समस्या की पहचान करेगा।", "स्कैनर शुरू करें"],
        bot: ["कृषि AI गुरु", "नमस्ते! मैं आपका AI विशेषज्ञ हूँ। आज मैं आपकी क्या सहायता कर सकता हूँ?", "अपनी क्वेरी टाइप करें..."]
    }
};

let currentLang = 'en';
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const navLinks = document.querySelectorAll('.nav-links a');

function setLanguage(lang, element) {
    document.querySelectorAll('.lang-pill').forEach(pill => pill.classList.remove('active'));
    element.classList.add('active');
    updateLanguage(lang);
}

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (heroTitle) {
        heroTitle.innerHTML = t.title;
        heroDesc.innerText = t.desc;
    }

    // Nav
    navLinks.forEach((link, i) => {
        if (t.nav[i]) link.innerText = t.nav[i];
    });

    // Features
    const cards = document.querySelectorAll('.feature-card');
    const f_data = [t.f_soil, t.f_weather, t.f_pest, t.f_market, t.f_govt];
    cards.forEach((card, i) => {
        if (f_data[i]) {
            card.querySelector('h3').innerText = f_data[i][0];
            card.querySelector('p').innerText = f_data[i][1];
        }
    });


    // Chatbot
    const botName = document.getElementById('bot-name');
    if (botName) {
        botName.innerText = t.bot[0];
        document.getElementById('welcome-msg').innerText = t.bot[1];
        document.getElementById('chat-input').placeholder = t.bot[2];
    }

    // Scanner Section
    const pestSection = document.getElementById('pest');
    if (pestSection) {
        pestSection.querySelector('h2').innerText = t.scanner[0];
        pestSection.querySelector('p').innerText = t.scanner[1];
        pestSection.querySelector('button').innerText = t.scanner[2];
    }

    // Update Scanner Modal Text
    resetScanner();

    // Smooth transition
    document.body.style.opacity = '0';
    setTimeout(() => { document.body.style.opacity = '1'; }, 100);
}

// Govt Schemes Data & Logic
const govtTranslations = {
    en: {
        title: "Govt. Schemes & Subsidies",
        schemes: [
            {
                name: "PM-KISAN",
                desc: "Direct income support of ₹6,000 per year.",
                icon: "fas fa-hand-holding-usd",
                link: "https://pmkisan.gov.in/",
                detailed: {
                    overview: "Launched in 2019, providing ₹6,000 annually in three installments of ₹2,000 directly to eligible farmer families.",
                    funding: "100% funded by the Government of India via DBT.",
                    eligibility: "All landholding farmer families (husband, wife, and minor children).",
                    requirements: "Mandatory Aadhaar seeding and eKYC completion via portal or CSC center.",
                    exclusions: "Constitutional post holders, serving/retired officers, pensioners with monthly pension ≥ ₹10,000, and professionals like doctors/lawyers."
                }
            },
            {
                name: "PMFBY (Insurance)",
                desc: "Low-premium crop insurance against natural calamities.",
                icon: "fas fa-shield-alt",
                link: "https://pmfby.gov.in/",
                detailed: {
                    overview: "Offers comprehensive insurance from sowing to 14 days post-harvest. Farmers pay minimal premiums: 2% (Kharif), 1.5% (Rabi), and 5% (Commercial).",
                    funding: "Highly subsidized; Govt covers the remaining premium beyond farmer contribution.",
                    eligibility: "Open to all farmers, including sharecroppers and tenant farmers growing notified crops.",
                    requirements: "Uses drones, smartphones, and remote sensing for accurate assessment and claim settlements.",
                    exclusions: "Covers losses from droughts, floods, landslides, pests, diseases, and unseasonal rain."
                }
            },
            {
                name: "KCC (Credit Card)",
                desc: "Flexible and cost-effective short-term credit for farmers.",
                icon: "fas fa-credit-card",
                link: "https://www.jansamarth.in/agri-loan-kisan-credit-card",
                guideLink: "https://www.rbi.org.in/commonman/English/scripts/Notification.aspx?Id=2311",
                detailed: {
                    overview: "Introduced in 1998 to provide timely credit for cultivation, post-harvest, and farm maintenance. Revolving credit with 5 years validity.",
                    funding: "Loans up to ₹3 lakhs at effective 4% interest (with subventions). Collateral-free up to ₹1.6 lakhs.",
                    eligibility: "Owner-cultivators, tenant farmers, SHGs, and individuals in dairy/fisheries.",
                    requirements: "Digital/paperless application via banks. Requires KYC, land records, and crop details.",
                    exclusions: "Prompt repayment required within 12 months for 3% interest incentive."
                }
            }
        ],
        labels: { overview: "Overview", eligibility: "Eligibility", funding: "Interest & Limits", requirements: "Process", exclusions: "Repayment", portal: "Apply on Official Portal", guide: "RBI Official Guide" },
        back: "Close List",
        backToSchemes: "Back to Schemes"
    },
    gu: {
        title: "સરકારી યોજનાઓ અને સબસિડી",
        schemes: [
            {
                name: "PM-KISAN",
                desc: "ખેડૂત પરિવારોને વાર્ષિક ₹6,000 ની સીધી સહાય.",
                icon: "fas fa-hand-holding-usd",
                link: "https://pmkisan.gov.in/",
                detailed: {
                    overview: "2019માં શરૂ થયેલ, જેમાં વાર્ષિક ₹6,000 સીધા બેંક ખાતામાં ત્રણ સરખા હપ્તામાં (₹2,000 દરેક) આપવામાં આવે છે.",
                    funding: "ભારત સરકાર દ્વારા 100% ભંડોળ (DBT દ્વારા).",
                    eligibility: "તમામ જમીન ધરાવતા ખેડૂત પરિવારો (પતિ, પત્ની અને સગીર બાળકો).",
                    requirements: "આધાર સીડીંગ અને eKYC પૂર્ણ કરવું ફરજિયાત છે.",
                    exclusions: "બંધારણીય હોદ્દા ધરાવતા, નિવૃત્ત અધિકારીઓ, ₹10,000 થી વધુ પેન્શન મેળવનારા અને વ્યાવસાયિકો."
                }
            },
            {
                name: "પીએમ ફસલ વીમા યોજના",
                desc: "કુદરતી આફતો સામે અત્યંત સબસિડીવાળો પાક વીમો.",
                icon: "fas fa-shield-alt",
                link: "https://pmfby.gov.in/",
                detailed: {
                    overview: "વાવણીથી લણણી પછીના 14 દિવસ સુધીનું વ્યાપક વીમો. પ્રીમિયમ: 2% (ખરીફ), 1.5% (રવિ) અને 5% (વાર્ષિક/બાગાયતી પાક).",
                    funding: "અત્યંત સબસિડીવાળી યોજના; સરકાર ખેડૂત કાળા સિવાયનો બાકીનો પ્રીમિયમ ભોગવે છે.",
                    eligibility: "નોટિફાઇડ પાક ઉગાડતા તમામ ખેડૂતો, સહભાગી ખેડૂતો અને ગણોતિયાઓ માટે ખુલ્લું.",
                    requirements: "નુકસાનના સચોટ મૂલ્યાંકન માટે ડ્રોન, સ્માર્ટફોન અને રિમોટ સેન્સિંગનો ઉપયોગ.",
                    exclusions: "દુષ્કાળ, પૂર, પહાડ ખસવા, જીવાત, રોગો અને માવઠા સામે રક્ષણ આપે છે."
                }
            },
            {
                name: "કિસાન ક્રેડિટ કાર્ડ (KCC)",
                desc: "ખેતી માટે પારદર્શક અને સસ્તી ટૂંકા ગાળાની લોન.",
                icon: "fas fa-credit-card",
                link: "https://www.jansamarth.in/agri-loan-kisan-credit-card",
                guideLink: "https://www.rbi.org.in/commonman/English/scripts/Notification.aspx?Id=2311",
                detailed: {
                    overview: "ખેતી, લણણી પછીના ખર્ચ અને અન્ય ખેતીના કામો માટે 1998 થી શરૂ થયેલ ફરતી લોન સુવિધા.",
                    funding: "₹3 લાખ સુધીની લોન, સમયસર ચુકવણી પર અસરકારક 4% વ્યાજ. ₹1.6 લાખ સુધી ગીરો વગર લોન.",
                    eligibility: "તમામ ખેડૂતો, ગણોતિયાઓ, પશુપાલન અને મત્સ્યપાલન સાથે સંકળાયેલા લોકો.",
                    requirements: "બેંકો દ્વારા ડિજિટલ અને પેપરલેસ અરજી. KYC અને જમીનના રેકોર્ડ જરૂરી.",
                    exclusions: "લોન સામાન્ય રીતે 12 મહિનામાં ચૂકવવાની હોય છે, લણણીની સીઝન મુજબ ફ્લેક્સિબિલિટી."
                }
            }
        ],
        labels: { overview: "પરિચય", eligibility: "પાત્રતા", funding: "વ્યાજ અને મર્યાદા", requirements: "અરજી પ્રક્રિયા", exclusions: "ચુકવણી", portal: "ઓફિશિયલ પોર્ટલ પર જાઓ", guide: "RBI સત્તાવાર માર્ગદર્શિકા" },
        back: "યાદી બંધ કરો",
        backToSchemes: "પાછા જાઓ"
    },
    hi: {
        title: "सरकारी योजनाएं और सब्सिडी",
        schemes: [
            {
                name: "PM-KISAN",
                desc: "किसानों को प्रति वर्ष ₹6,000 की सीधी सहायता।",
                icon: "fas fa-hand-holding-usd",
                link: "https://pmkisan.gov.in/",
                detailed: {
                    overview: "2019 में शुरू, प्रति वर्ष ₹6,000 तीन किस्तों में सीधे बैंक खातों में प्रदान किए जाते हैं।",
                    funding: "डीबीटी के माध्यम से भारत सरकार द्वारा 100% वित्त पोषित।",
                    eligibility: "सभी भूमिधारक किसान परिवार (पति, पत्नी और नाबालिग बच्चे)।",
                    requirements: "अनिवार्य आधार सीडिंग और eKYC पूरा करना।",
                    exclusions: "संवैधानिक पद धारक, सेवानिवृत्त अधिकारी, ₹10,000 से अधिक पेंशनभोगी और पेशेवर।"
                }
            },
            {
                name: "पीएम फसल बीमा योजना",
                desc: "प्राकृतिक आपदाओं के खिलाफ रियायती फसल बीमा।",
                icon: "fas fa-shield-alt",
                link: "https://pmfby.gov.in/",
                detailed: {
                    overview: "बुवाई से कटाई के 14 दिन बाद तक व्यापक बीमा। प्रीमियम: 2% (खरीफ), 1.5% (रवि) और 5% (वाणिज्यिक फसल)।",
                    funding: "अत्यधिक रियायती; सरकार किसान के योगदान के अलावा शेष प्रीमियम का भुगतान करती है।",
                    eligibility: "सभी किसान, बटाईदार और किरायेदार किसान जो अधिसूचित फसलें उगाते हैं।",
                    requirements: "सटीक मूल्यांकन के लिए ड्रोन, स्मार्टफोन और रिमोट Sensing का उपयोग।",
                    exclusions: "सूखा, बाढ़, भूस्खलन, कीट, बीमारी और बेमौसम बारिश से होने वाले नुकसान को कवर करता है।"
                }
            },
            {
                name: "किसान क्रेडिट कार्ड (KCC)",
                desc: "खेती के लिए समय पर और सस्ती ऋण सुविधा।",
                icon: "fas fa-credit-card",
                link: "https://www.jansamarth.in/agri-loan-kisan-credit-card",
                guideLink: "https://www.rbi.org.in/commonman/English/scripts/Notification.aspx?Id=2311",
                detailed: {
                    overview: "1998 में शुरू, खेती और संबंधित खर्चों के लिए फिर से उपयोग होने वाली ऋण सुविधा। 5 साल की वैधता।",
                    funding: "ऋण भुगतान पर प्रभावी 4% ब्याज दर (₹3 लाख तक)। ₹1.6 लाख तक बिना गारंटी ऋण।",
                    eligibility: "सभी किसान, बटाईदार, पशुपालन और मत्स्य पालन करने वाले व्यक्ति।",
                    requirements: "बैंकों के माध्यम से डिजिटल/पेपरलेस आवेदन। केवाईसी और भूमि रिकॉर्ड आवश्यक।",
                    exclusions: "कटाई के सीजन के अनुसार 12 महीने के भीतर पुनर्भुगतान की सुविधा।"
                }
            }
        ],
        labels: { overview: "विवरण", eligibility: "पात्रता", funding: "ब्याज और सीमा", requirements: "प्रक्रिया", exclusions: "पुनर्भुगतान", portal: "आधिकारिक पोर्टल पर जाएं", guide: "RBI आधिकारिक गाइड" },
        back: "सूची बंद करें",
        backToSchemes: "वापस जाएं"
    }
};

function showGovtSchemes() {
    const modal = document.getElementById('govt-modal');
    const overlay = document.getElementById('modal-overlay');
    const grid = document.getElementById('govt-details-grid');
    const data = govtTranslations[currentLang] || govtTranslations['en'];

    // Update Header
    const backBtn = document.getElementById('govt-modal-back');
    backBtn.style.display = 'block';
    backBtn.onclick = closeGovtModal; // On main list, back closes the modal
    document.getElementById('govt-modal-title').innerText = data.title;

    grid.innerHTML = data.schemes.map((scheme, index) => `
        <div class="glass" onclick="showGovtDetail(${index})" style="padding: 1.5rem; text-align: left; background: rgba(46, 125, 50, 0.05); cursor: pointer; transition: transform 0.3s; border: 1px solid var(--glass-border);">
            <i class="${scheme.icon}" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
            <h4 style="margin-bottom: 0.5rem; color: var(--text-color); font-weight: 800;">${scheme.name}</h4>
            <p style="font-size: 0.9rem; opacity: 0.8;">${scheme.desc}</p>
            <button class="cta-button" style="padding: 5px 15px; font-size: 0.8rem; margin-top: 10px;">
                ${currentLang === 'en' ? 'Learn Detail' : currentLang === 'gu' ? 'વિગત જુઓ' : 'विवरण देखें'}
            </button>
        </div>
    `).join('');

    overlay.classList.add('active');
    modal.classList.add('active');
}

function showGovtDetail(index) {
    const data = govtTranslations[currentLang] || govtTranslations['en'];
    const scheme = data.schemes[index];
    if (!scheme || !scheme.detailed) return;

    const grid = document.getElementById('govt-details-grid');
    const l = data.labels;

    let portalBtns = '<div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 1rem;">';
    if (scheme.link) {
        portalBtns += `
            <a href="${scheme.link}" target="_blank" class="cta-button" style="background: var(--secondary-color); text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px; flex: 1; min-width: 200px;">
                <i class="fas fa-external-link-alt"></i> ${l.portal}
            </a>
        `;
    }
    if (scheme.guideLink) {
        portalBtns += `
            <a href="${scheme.guideLink}" target="_blank" class="cta-button" style="background: var(--primary-color); text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px; flex: 1; min-width: 200px;">
                <i class="fas fa-file-pdf"></i> ${l.guide}
            </a>
        `;
    }
    portalBtns += '</div>';

    // Update Header for Detail view
    const backBtn = document.getElementById('govt-modal-back');
    backBtn.style.display = 'block';
    backBtn.onclick = showGovtSchemes;
    document.getElementById('govt-modal-title').innerText = scheme.name;

    grid.innerHTML = `
        <div style="grid-column: 1/-1; animation: fadeInUp 0.4s ease;">
            <div class="glass" style="padding: 2rem; margin-bottom: 1.5rem; border-left: 8px solid var(--primary-color);">
                <p><b>${l.overview}:</b> ${scheme.detailed.overview}</p>
                ${portalBtns}
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
                <div class="glass" style="padding: 1.2rem; background: var(--card-bg);">
                    <h5 style="color: var(--primary-color); margin-bottom: 8px;"><i class="fas fa-users"></i> ${l.eligibility}</h5>
                    <p style="font-size: 0.9rem; opacity: 0.9;">${scheme.detailed.eligibility}</p>
                </div>
                <div class="glass" style="padding: 1.2rem; background: var(--card-bg);">
                    <h5 style="color: var(--primary-color); margin-bottom: 8px;"><i class="fas fa-coins"></i> ${l.funding}</h5>
                    <p style="font-size: 0.9rem; opacity: 0.9;">${scheme.detailed.funding}</p>
                </div>
                <div class="glass" style="padding: 1.2rem; background: var(--card-bg);">
                    <h5 style="color: var(--primary-color); margin-bottom: 8px;"><i class="fas fa-check-double"></i> ${l.requirements}</h5>
                    <p style="font-size: 0.9rem; opacity: 0.9;">${scheme.detailed.requirements}</p>
                </div>
                <div class="glass" style="padding: 1.2rem; background: var(--card-bg); border-left: 4px solid #f44336;">
                    <h5 style="color: #f44336; margin-bottom: 8px;"><i class="fas fa-user-times"></i> ${l.exclusions}</h5>
                    <p style="font-size: 0.9rem; opacity: 0.9;">${scheme.detailed.exclusions}</p>
                </div>
            </div>
        </div>
    `;
}

function filterDistricts() {
    const input = document.getElementById('district-search');
    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll('.district-card');

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(filter) ? 'block' : 'none';
    });
}

// Voice Support Logic (Mock)
let isSpeaking = false;
function toggleVoice() {
    const icon = document.getElementById('voice-toggle');
    icon.classList.toggle('active');

    if (icon.classList.contains('active')) {
        alert(currentLang === 'en' ? "Voice AI Activated. Listening..." :
            currentLang === 'gu' ? "વોઇસ AI સક્રિય. સાંભળી રહ્યા છીએ..." :
                "वॉयस AI सक्रिय। सुन रहे हैं...");
        isSpeaking = true;
    } else {
        isSpeaking = false;
    }
}

// Theme Logic
function toggleTheme() {
    const body = document.documentElement;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icons = document.querySelectorAll('.theme-switch i');
    icons.forEach(icon => {
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// Mobile Menu Navigation Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.querySelector('.mobile-menu-btn i');
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        menuIcon.className = 'fas fa-times';
    } else {
        menuIcon.className = 'fas fa-bars';
    }
}

function closeMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.querySelector('.mobile-menu-btn i');
    if (navLinks) navLinks.classList.remove('active');
    if (menuIcon) menuIcon.className = 'fas fa-bars';
}

// Initialization
// Authentication Logic
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const hasAccount = localStorage.getItem('hasAccount') === 'true';
    const authLinksContainers = document.querySelectorAll('.auth-links');

    authLinksContainers.forEach(authLinks => {
        if (isLoggedIn) {
            authLinks.innerHTML = `
                <div style="display: flex; align-items: center; gap: 15px;">
                    <span style="color: var(--text-color); font-weight: 600;"><i class="fas fa-user-circle"></i> Farmer</span>
                    <button onclick="logout()" class="cta-button" style="background: #e74c3c; padding: 6px 15px; font-size: 0.85rem;">Log Out</button>
                </div>
            `;
        } else {
            // Not logged in
            if (hasAccount) {
                // Already has an account, only show Log In
                authLinks.innerHTML = `
                    <a href="login.html" class="cta-button" style="padding: 8px 25px;">Log In</a>
                `;
            } else {
                // New user, show both
                authLinks.innerHTML = `
                    <a href="login.html" style="text-decoration: none; color: var(--text-color); font-weight: 600;">Log In</a>
                    <a href="signup.html" class="cta-button">Sign Up</a>
                `;
            }
        }
    });

    if (isLoggedIn) {
        document.querySelectorAll('.locked-feature').forEach(el => el.classList.remove('locked-feature'));
    } else {
        document.querySelectorAll('.feature-card').forEach(card => card.classList.add('locked-feature'));
    }
}

function requireAuth(action) {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        action();
    } else {
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
}

async function simulateLogin(event) {
    if (event) event.preventDefault();

    const mobile = document.getElementById('login-mobile')?.value;
    const password = document.getElementById('login-password')?.value;

    if (!mobile || !password) {
        alert('Please enter mobile and password.');
        return;
    }

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobile, password })
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userMobile', data.user.mobile);
            localStorage.setItem('userName', data.user.fullName);
            window.location.href = 'index.html';
        } else {
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Error connecting to server. Please ensure the backend is running.');
    }
}

async function simulateSignup(event) {
    if (event) event.preventDefault();

    const fullName = document.getElementById('signup-fullname')?.value;
    const mobile = document.getElementById('signup-mobile')?.value;
    const state = document.getElementById('signup-state')?.value;
    const pass = document.getElementById('signup-password')?.value;
    const confirm = document.getElementById('signup-confirm')?.value;

    if (!pass || pass.length < 4) {
        alert(currentLang === 'gu' ? 'પાસવર્ડ ઓછામાં ઓછો 4 અક્ષરનો હોવો જોઈએ.' : 'Password must be at least 4 characters.');
        return;
    }

    if (pass !== confirm) {
        alert(currentLang === 'gu' ? 'પાસવર્ડ મેચ થતા નથી!' : 'Passwords do not match!');
        return;
    }

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, mobile, state, password: pass })
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem('isLoggedIn', 'true');
            // Also store basic user info locally if needed for display
            localStorage.setItem('hasAccount', 'true');

            alert(currentLang === 'gu' ? 'એકાઉન્ટ સફળતાપૂર્વક બનાવવામાં આવ્યું! કૃષિ સેવામાં તમારું સ્વાગત છે.' :
                currentLang === 'hi' ? 'खाता सफलतापूर्वक बनाया गया! कृषि सेवा में आपका स्वागत है।' :
                    'Account created successfully! Welcome to KrishiSeva.');

            window.location.href = 'index.html';
        } else {
            alert(data.message || 'Signup failed');
        }
    } catch (error) {
        console.error('Signup error:', error);
        alert('Error connecting to server. Please ensure the backend is running.');
    }
}

// Update DOMContentLoaded to check auth
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    checkAuth();
});

// --- Rest of Existing Code ---

const soilTranslations = {
    en: [
        {
            name: "North Gujarat",
            short: "Sandy & Sandy Loam (Goradu) soil.",
            icon: "fas fa-sun",
            detailed: {
                intro: "Predominantly sandy and moderately fertile soil found in regions like Banaskantha and Mehsana.",
                features: "Retadi (Sandy) and Goradu (Sandy Loam). Low water retention.",
                crops: "Bajra, Potatoes, Castor, Mustard.",
                location: "Banaskantha, Patan, Mehsana, Sabarkantha."
            }
        },
        {
            name: "Central Gujarat",
            short: "Fertile Besar & Goradu soil. The 'Golden Mine'.",
            icon: "fas fa-leaf",
            detailed: {
                intro: "Highly fertile soil region, especially the Charotar belt known for tobacco production.",
                features: "Besar and Goradu (loamy soil). Rich in nutrients.",
                crops: "Tobacco, Cotton, Rice, Wheat.",
                location: "Kheda, Anand (Charotar), Ahmedabad, Vadodara."
            }
        },
        {
            name: "Saurashtra",
            short: "Medium Black & Rocky soil. Ideal for Groundnut.",
            icon: "fas fa-mountain",
            detailed: {
                intro: "Volcanic origin soil with variations from deep black to rocky terrain.",
                features: "Medium Black, Rocky, and Saline near coasts.",
                crops: "Groundnut, Cotton, Kesar Mango, Cumin.",
                location: "Rajkot, Junagadh, Jamnagar, Bhavnagar, Amreli."
            }
        },
        {
            name: "South Gujarat",
            short: "Deep Black & Clayey (Chikni) soil. High rainfall area.",
            icon: "fas fa-cloud-showers-heavy",
            detailed: {
                intro: "Heavy clayey soil that retains moisture for a long time, suitable for high-water crops.",
                features: "Bhari Kali (Deep Black), Chikni (Clayey), Kanam soil.",
                crops: "Sugarcane, Rice, Banana, Mango (Hapus/Alphonso).",
                location: "Surat, Navsari, Valsad, Bharuch, Narmada."
            }
        },
        {
            name: "Kutch",
            short: "Sandy & Saline soil. Famous for Dates.",
            icon: "fas fa-cactus",
            detailed: {
                intro: "Desert landscape with saline patches, but emerging as a horticultural hub.",
                features: "Retadi (Sandy) and Khari (Saline) soil.",
                crops: "Dates (Kharek), Kesar Mango, Pomegranate.",
                location: "Kutch (Bhuj, Mandvi, Mundra)."
            }
        },
        {
            name: "District Directory",
            short: "Soil info for all 33 districts of Gujarat.",
            icon: "fas fa-folder-open",
            type: "directory"
        }
    ],
    gu: [
        {
            name: "ઉત્તર ગુજરાત",
            short: "રેતાળ અને ગોરાડુ જમીન.",
            icon: "fas fa-sun",
            detailed: {
                intro: "આ વિસ્તારમાં મુખ્યત્વે રેતાળ અને ઓછી તેજસ્વી પણ ફળદ્રુપ જમીન જોવા મળે છે.",
                features: "રેતાળ અને ગોરાડુ (Sandy Loam). પાણી સંગ્રહ કરવાની ક્ષમતા ઓછી.",
                crops: "બાજરી, બટાકા, એરંડા, રાઈ.",
                location: "બનાસકાંઠા, પાટણ, મહેસાણા, સાબરકાંઠા."
            }
        },
        {
            name: "મધ્ય ગુજરાત",
            short: "ફળદ્રુપ બેસર અને ગોરાડુ જમીન. 'સોનાની ખાણ'.",
            icon: "fas fa-leaf",
            detailed: {
                intro: "ખૂબ જ ફળદ્રુપ વિસ્તાર, જે ચરોતર તરીકે ઓળખાય છે.",
                features: "બેસર અને ગોરાડુ જમીન. પોષક તત્વોથી ભરપૂર.",
                crops: "તમ્બાકુ, કપાસ, ડાંગર, ઘઉં.",
                location: "ખેડા, આણંદ (ચરોતર), અમદાવાદ, વડોદરા."
            }
        },
        {
            name: "સૌરાષ્ટ્ર",
            short: "મધ્યમ કાળી અને પથરાળ જમીન. મગફળી માટે બેસ્ટ.",
            icon: "fas fa-mountain",
            detailed: {
                intro: "જ્વાળામુખી ફાટવાથી બનેલી જમીન, જે મગફળી અને કપાસ માટે શ્રેષ્ઠ છે.",
                features: "મધ્યમ કાળી, પથરાળ અને કિનારા પાસે ખારી જમીન.",
                crops: "મગફળી, કપાસ, કેસર કેરી, જીરું.",
                location: "રાજકોટ, જૂનાગઢ, જામનગર, ભાવનગર, અમરેલી."
            }
        },
        {
            name: "દક્ષિણ ગુજરાત",
            short: "ભારે કાળી અને ચીકણી જમીન. વધુ વરસાદી વિસ્તાર.",
            icon: "fas fa-cloud-showers-heavy",
            detailed: {
                intro: "વધારે વરસાદને કારણે ભેજ જાળવી રાખતી ફળદ્રુપ જમીન.",
                features: "ભારે કાળી, ચીકણી (ચિકણી), અને કાનમની જમીન.",
                crops: "શેરડી, ડાંગર, કેળા, કેસર/હાફૂસ કેરી.",
                location: "સુરત, નવસારી, વલસાડ, ભરૂચ, નર્મદા."
            }
        },
        {
            name: "કચ્છ",
            short: "રેતાળ અને ખારી જમીન. ખારેક માટે જાણીતી.",
            icon: "fas fa-cactus",
            detailed: {
                intro: "રણ અને દરિયાઈ વિસ્તારને લીધે રેતાળ પણ ફળદ્રુપ બાગાયતી જમીન.",
                features: "રેતાળ અને ખારી (Saline) જમીન.",
                crops: "ખારેક (Dates), કેસર કેરી, દાડમ.",
                location: "કચ્છ (ભુજ, માંડવી, મુંદ્રા)."
            }
        },
        {
            name: "જિલ્લા મુજબ માહિતી",
            short: "ગુજરાતના તમામ 33 જિલ્લાઓની જમીનની વિગત.",
            icon: "fas fa-folder-open",
            type: "directory"
        }
    ],
    hi: [
        {
            name: "उत्तर गुजरात",
            short: "रेतीली और गोराडू मिट्टी।",
            icon: "fas fa-sun",
            detailed: {
                intro: "उत्तर गुजरात के क्षेत्रों में मुख्य रूप से रेतीली मिट्टी पाई जाती है।",
                features: "रेतीली और गोराडू (Sandy Loam) मिट्टी। जल धारण क्षमता कम।",
                crops: "बाजरा, आलू, अरंडी, सरसों।",
                location: "बनासकांठा, पाटन, मेहसाणा, साबरकांठा।"
            }
        },
        {
            name: "मध्य गुजरात",
            short: "उपजाऊ बेसर और गोराडू मिट्टी। 'सोने की खान'।",
            icon: "fas fa-leaf",
            detailed: {
                intro: "बेहद उपजाऊ क्षेत्र, जिसे चरौतर बेल्ट के रूप में जाना जाता है।",
                features: "बेसर और गोराडू मिट्टी। पोषक तत्वों से भरपूर।",
                crops: "तंबाकू, कपास, धान, गेहूं।",
                location: "खेड़ा, आणंद (चरौतर), अहमदाबाद, वड़ोदरा।"
            }
        },
        {
            name: "सौराष्ट्र",
            short: "मध्यम काली और पथरीली मिट्टी। मूंगफली के लिए उत्तम।",
            icon: "fas fa-mountain",
            detailed: {
                intro: "ज्वालामुखी से निर्मित लावा की मिट्टी, मूंगफली और कपास के लिए प्रसिद्ध।",
                features: "मध्यम काली, पथरीली और तटीय क्षेत्रों में खारी मिट्टी।",
                crops: "मूंगफली, कपास, केसर आम, जीरा।",
                location: "राजकोट, जूनागढ़, जामनगर, भावनगर, अमरेली."
            }
        },
        {
            name: "दक्षिण गुजरात",
            short: "भारी काली और चिकनी मिट्टी। अधिक वर्षा वाला क्षेत्र।",
            icon: "fas fa-cloud-showers-heavy",
            detailed: {
                intro: "भारी क्ले मिट्टी जो लंबे समय तक नमी बनाए रखती है, पानी वाली फसलों के लिए उपयुक्त।",
                features: "भारी काली, चिकनी और कानम मिट्टी।",
                crops: "गन्ना, धान, केला, आम (हापुस/केसर)।",
                location: "सूरत, नवसारी, वलसाड, भरूच, नर्मदा।"
            }
        },
        {
            name: "कच्छ",
            short: "रेतीली और खारी मिट्टी। खजूर के लिए प्रसिद्ध।",
            icon: "fas fa-cactus",
            detailed: {
                intro: "रेगिस्तानी और खारी मिट्टी, लेकिन बागवानी के रूप में उभरता क्षेत्र।",
                features: "रेतीली और खारी (Saline) मिट्टी।",
                crops: "खजूर (खारेक), केसर आम, अनार।",
                location: "कच्छ (भुज, मांडवी, मुंद्रा)।"
            }
        },
        {
            name: "जिला निर्देशिका",
            short: "गुजरात के सभी 33 जिलों की मिट्टी की जानकारी।",
            icon: "fas fa-folder-open",
            type: "directory"
        }
    ]
};

const gujaratDistricts = {
    en: [
        { name: "Ahmedabad", type: "Black & Sandy Loam", crops: "Rice, Bhalia Wheat, Cotton" },
        { name: "Amreli", type: "Medium Black", crops: "Groundnut, Cotton, Mango, Bajra" },
        { name: "Anand", type: "Besar/Goradu (Charotar)", crops: "Tobacco, Banana, Rice, Potato" },
        { name: "Aravalli", type: "Sandy Loam & Rocky", crops: "Groundnut, Cotton, Maize" },
        { name: "Banaskantha", type: "Sandy & Sandy Loam", crops: "Potato, Bajra, Castor, Mustard" },
        { name: "Bharuch", type: "Kanam (Deep Black)", crops: "Cotton, Pigeon Pea, Sugarcane, Banana" },
        { name: "Bhavnagar", type: "Black & Saline", crops: "Cotton, Onion, Groundnut" },
        { name: "Botad", type: "Medium Black", crops: "Cotton, Groundnut, Wheat" },
        { name: "Chhota Udepur", type: "Red & Rocky", crops: "Maize, Cotton, Pigeon Pea" },
        { name: "Dahod", type: "Red Sandy", crops: "Maize, Black Gram, Wheat" },
        { name: "Dang", type: "Forest/Laterite", crops: "Rice, Nagli, Mango" },
        { name: "Devbhumi Dwarka", type: "Black & Saline", crops: "Groundnut, Cotton, Coriander" },
        { name: "Gandhinagar", type: "Sandy Loam", crops: "Wheat, Cotton, Castor, Potato" },
        { name: "Gir Somnath", type: "Fertile Black", crops: "Kesar Mango, Groundnut, Coconut" },
        { name: "Jamnagar", type: "Black & Saline", crops: "Groundnut, Cotton, Bishop's Weed, Coriander" },
        { name: "Junagadh", type: "Black & Fertile", crops: "Groundnut, Mango, Wheat, Onion" },
        { name: "Kheda", type: "Sandy Loam & Besar", crops: "Tobacco, Rice, Potato" },
        { name: "Kutch", type: "Sandy & Saline", crops: "Dates, Mango, Bajra, Castor" },
        { name: "Mahisagar", type: "Sandy Loam & Rocky", crops: "Maize, Bajra, Cotton" },
        { name: "Mehsana", type: "Sandy Loam", crops: "Castor, Mustard, Fennel, Cumin" },
        { name: "Morbi", type: "Black & Sandy", crops: "Cotton, Groundnut, Cumin" },
        { name: "Narmada", type: "Black & Clayey", crops: "Sugarcane, Banana, Cotton" },
        { name: "Navsari", type: "Deep Black", crops: "Mango, Chikoo, Sugarcane, Rice" },
        { name: "Panchmahal", type: "Red Sandy", crops: "Maize, Rice, Pigeon Pea" },
        { name: "Patan", type: "Sandy & Saline", crops: "Cumin, Mustard, Castor, Bajra" },
        { name: "Porbandar", type: "Coastal Alluvial (Ghed)", crops: "Groundnut, Cumin, Coriander" },
        { name: "Rajkot", type: "Medium Black", crops: "Cotton, Groundnut, Cumin" },
        { name: "Sabarkantha", type: "Sandy Loam & Red", crops: "Groundnut, Cotton, Maize, Wheat" },
        { name: "Surat", type: "Deep Black & Alluvial", crops: "Sugarcane, Rice, Banana, Cotton" },
        { name: "Surendranagar", type: "Black & Sandy", crops: "Cotton, Cumin, Bajra" },
        { name: "Tapi", type: "Black & Forest Type", crops: "Sugarcane, Rice, Sorghum" },
        { name: "Vadodara", type: "Black & Sandy Loam", crops: "Cotton, Pigeon Pea, Tobacco, Banana" },
        { name: "Valsad", type: "Laterite & Coastal", crops: "Mango, Chikoo, Rice, Sugarcane" }
    ],
    gu: [
        { name: "અમદાવાદ", type: "કાળી અને ગોરાડુ", crops: "ડાંગર, ભાલિયા ઘઉં, કપાસ" },
        { name: "અમરેલી", type: "મધ્યમ કાળી", crops: "મગફળી, કપાસ, કેરી, બાજરી" },
        { name: "આણંદ", type: "બેસર/ગોરાડુ (ચરોતર)", crops: "તમ્બાકુ, કેળા, ડાંગર, બટાકા" },
        { name: "અરવલ્લી", type: "ગોરાડુ અને પથરાળ", crops: "મગફળી, કપાસ, મકાઈ" },
        { name: "બનાસકાંઠા", type: "રેતાળ અને ગોરાડુ", crops: "બટાકા, બાજરી, એરંડા, રાઈ" },
        { name: "ભરૂચ", type: "કાનમ (ભારે કાળી જમીન)", crops: "કપાસ, તુવેર, શેરડી, કેળા" },
        { name: "ભાવનગર", type: "કાળી અને ખારી", crops: "કપાસ, ડુંગળી, મગફળી" },
        { name: "બોટાદ", type: "મધ્યમ કાળી", crops: "કપાસ, મગફળી, ઘઉં" },
        { name: "છોટા ઉદેપુર", type: "લાલ અને પથરાળ", crops: "મકાઈ, કપાસ, તુવેર" },
        { name: "દાહોદ", type: "લાલ રેતાળ", crops: "મકાઈ, અડદ, ઘઉં" },
        { name: "ડાંગ", type: "જંગલ પ્રકારની / લેટરાઈટ", crops: "ડાંગર, નાગલી, કેરી" },
        { name: "દેવભૂમિ દ્વારકા", type: "કાળી અને ખારી", crops: "મગફળી, કપાસ, ધાણા" },
        { name: "ગાંધીનગર", type: "ગોરાડુ", crops: "ઘઉં, કપાસ, એરંડા, બટાકા" },
        { name: "ગીર સોમનાથ", type: "ફળદ્રુપ કાળી / બાગાયતી", crops: "કેસર કેરી, મગફળી, નારિયેળ" },
        { name: "જામનગર", type: "કાળી અને ખારી", crops: "મગફળી, કપાસ, અજમો, ધાણા" },
        { name: "જૂનાગઢ", type: "કાળી અને ફળદ્રુપ", crops: "મગફળી, કેરી, ઘઉં, ડુંગળી" },
        { name: "ખેડા", type: "ગોરાડુ અને બેસર", crops: "તમ્બાકુ, ડાંગર, બટાકા" },
        { name: "કચ્છ", type: "રેતાળ અને ખારી", crops: "ખારેક, કેરી, બાજરી, એરંડા" },
        { name: "મહીસાગર", type: "ગોરાડુ અને પથરાળ", crops: "મકાઈ, બાજરી, કપાસ" },
        { name: "મહેસાણા", type: "ગોરાડુ", crops: "એરંડા, રાઈ, સુવા, જીરું" },
        { name: "મોરબી", type: "કાળી અને રેતાળ", crops: "કપાસ, મગફળી, જીરું" },
        { name: "નર્મદા", type: "કાળી અને ચીકણી", crops: "શેરડી, કેળા, કપાસ" },
        { name: "નવસારી", type: "ભારે કાળી", crops: "કેરી, ચીકુ, શેરડી, ડાંગર" },
        { name: "પંચમહાલ", type: "લાલ રેતાળ", crops: "મકાઈ, ડાંગર, તુવેર" },
        { name: "પાટણ", type: "રેતાળ અને ખારી", crops: "જીરું, રાઈ, એરંડા, બાજરી" },
        { name: "પોરબંદર", type: "ઘેડ વિસ્તારની કાંપની જમીન", crops: "મગફળી, જીરું, ધાણા" },
        { name: "રાજકોટ", type: "મધ્યમ કાળી", crops: "કપાસ, મગફળી, જીરું" },
        { name: "સાબરકાંઠા", type: "ગોરાડુ અને લાલ", crops: "મગફળી, કપાસ, મકાઈ, ઘઉં" },
        { name: "સુરત", type: "ભારે કાળી અને કાંપવાળી", crops: "શેરડી, ડાંગર, કેળા, કપાસ" },
        { name: "સુરેન્દ્રનગર", type: "કાળી અને રેતાળ", crops: "કપાસ, જીરું, બાજરી" },
        { name: "તાપી", type: "કાળી અને જંગલ પ્રકારની", crops: "શેરડી, ડાંગર, જુવાર" },
        { name: "વડોદરા", type: "કાળી અને ગોરાડુ", crops: "કપાસ, તુવેર, તમ્બાકુ, કેળા" },
        { name: "વલસાડ", type: "લેટરાઈટ અને કિનારાની", crops: "કેરી, ચીકુ, ડાંગર, શેરડી" }
    ],
    hi: [
        { name: "अहमदाबाद", type: "काली और गोराडू", crops: "धान, भालिया गेहूं, कपास" },
        { name: "अमरेली", type: "मध्यम काली", crops: "मूंगफली, कपास, आम, बाजरा" },
        { name: "आणंद", type: "बेसर/गोराडू (चरौतर)", crops: "तंबाकू, केला, धान, आलू" },
        { name: "अरावली", type: "गोराडू और पथरीली", crops: "मूंगफली, कपास, मक्का" },
        { name: "बनासकांठा", type: "रेतीली और गोराडू", crops: "आलू, बाजरा, अरंडी, सरसों" },
        { name: "भरूच", type: "कानम (गहरी काली मिट्टी)", crops: "कपास, अरहर, गन्ना, केला" },
        { name: "भावनगर", type: "काली और खारी", crops: "कपास, प्याज, मूंगफली" },
        { name: "बोटाद", type: "मध्यम काली", crops: "कपास, मूंगफली, गेहूं" },
        { name: "छोटा उदेपुर", type: "लाल और पथरीली", crops: "मक्का, कपास, अरहर" },
        { name: "दाहोद", type: "लाल रेतीली", crops: "मक्का, उड़द, गेहूं" },
        { name: "डांग", type: "जंगल प्रकार / लैटेराइट", crops: "धान, नागली, आम" },
        { name: "देवभूमि द्वारका", type: "काली और खारी", crops: "मूंगफली, कपास, धनिया" },
        { name: "गांधीनगर", type: "गोराडू", crops: "गेहूं, कपास, अरंडी, आलू" },
        { name: "गीर सोमनाथ", type: "उपजाऊ काली / बागवानी", crops: "केसर आम, मूंगफली, नारियल" },
        { name: "जामनगर", type: "काली और खारी", crops: "मूंगफली, कपास, अजवाइन, धनिया" },
        { name: "जूनागढ़", type: "काली और उपजाऊ", crops: "मूंगफली, आम, गेहूं, प्याज" },
        { name: "खेड़ा", type: "गोराडू और बेसर", crops: "तंबाकू, धान, आलू" },
        { name: "कच्छ", type: "रेतीली और खारी", crops: "खजूर, आम, बाजरा, अरंडी" },
        { name: "महीसागर", type: "गोराडू और पथरीली", crops: "मक्का, बाजरा, कपास" },
        { name: "मेहसाणा", type: "गोराडू", crops: "अरंडी, सरसों, सुआ, जीरा" },
        { name: "मोरबी", type: "काली और रेतीली", crops: "कपास, मूंगफली, जीरा" },
        { name: "नर्मदा", type: "काली और चिकनी", crops: "गन्ना, केला, कपास" },
        { name: "नवसारी", type: "गहरी काली", crops: "आम, चीकू, गन्ना, धान" },
        { name: "पंचमहल", type: "लाल रेतीली", crops: "मक्का, धान, अरहर" },
        { name: "पाटन", type: "रेतीली और खारी", crops: "जीरा, सरसों, अरंडी, बाजरा" },
        { name: "पोरबंदर", type: "तटीय जलोढ़ (घेड)", crops: "मूंगफली, जीरा, धनिया" },
        { name: "राजकोट", type: "मध्यम काली", crops: "कपास, मूंगफली, जीरा" },
        { name: "साबरकांठा", type: "गोराडू और लाल", crops: "मूंगफली, कपास, मक्का, गेहूं" },
        { name: "सूरत", type: "गहरी काली और जलोढ़", crops: "गन्ना, धान, केला, कपास" },
        { name: "सुरेंद्रनगर", type: "काली और रेतीली", crops: "कपास, जीरा, बाजरा" },
        { name: "तापी", type: "काली और जंगल प्रकार", crops: "गन्ना, धान, ज्वार" },
        { name: "वडोदरा", type: "काली और गोराडू", crops: "कपास, अरहर, तंबाकू, केला" },
        { name: "वलसाड", type: "लैटेराइट और तटीय", crops: "आम, चीकू, धान, गन्ना" }
    ]
};

function showSoilInfo() {
    const modal = document.getElementById('soil-modal');
    const overlay = document.getElementById('modal-overlay');
    const grid = document.getElementById('soil-details-grid');
    // Update Header
    const backBtn = document.getElementById('soil-modal-back');
    backBtn.style.display = 'block';
    backBtn.onclick = closeSoilModal;
    document.getElementById('soil-modal-title').innerText = currentLang === 'en' ? 'Soil Intelligence' :
        currentLang === 'hi' ? 'मिट्टी की जानकारी' : 'જમીનની માહિતી';

    const currentSoilData = soilTranslations[currentLang] || soilTranslations['en'];

    grid.innerHTML = currentSoilData.map((soil, index) => `
        <div class="glass" onclick="showSoilDetail(${index})" style="padding: 1.5rem; text-align: center; border: 1px solid #eee; cursor: pointer;">
            <i class="${soil.icon}" style="font-size: 2.5rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
            <h4>${soil.name}</h4>
            <p>${soil.short}</p>
            <button class="cta-button" style="padding: 5px 15px; margin-top: 10px;">${currentLang === 'en' ? 'Learn More' : 'વધુ જાણો'}</button>
        </div>
    `).join('');

    overlay.classList.add('active');
    modal.classList.add('active');
}

function showSoilDetail(index) {
    const soil = (soilTranslations[currentLang] || soilTranslations['en'])[index];
    const grid = document.getElementById('soil-details-grid');
    const labels = {
        en: { intro: "Overview", features: "Soil Characteristics", crops: "Best Crops", location: "Regions", back: "Go Back" },
        gu: { intro: "વિગત", features: "જમીનની લાક્ષણિકતાઓ", crops: "મુખ્ય પાકો", location: "જિલ્લાઓ/વિસ્તાર", back: "પાછા જાઓ" },
        hi: { intro: "विवरण", features: "मिट्टी की विशेषताएं", crops: "मुख्य फसलें", location: "क्षेत्र", back: "वापस जाएं" }
    };
    const l = labels[currentLang] || labels['en'];

    // Update Header
    const backBtn = document.getElementById('soil-modal-back');
    backBtn.style.display = 'block';
    backBtn.onclick = showSoilInfo;
    document.getElementById('soil-modal-title').innerText = soil.name;

    if (soil.type === 'directory') {
        const districts = gujaratDistricts[currentLang];
        const englishDistricts = gujaratDistricts['en']; // Always use English type for color matching

        const getSoilColor = (type) => {
            const t = type.toLowerCase();
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

            // Check for Black soil
            const isBlack = t.includes('black') || t.includes('kanam') || t.includes('deep black');
            // Check for Loamy/Goradu soil
            const isLoam = t.includes('goradu') || t.includes('loam') || t.includes('besar') || t.includes('alluvial') || t.includes('fertile') || t.includes('ghed') || t.includes('charotar');
            // Check for Sandy soil
            const isSandy = t.includes('sandy') || t.includes('saline');
            // Check for Red soil
            const isRed = t.includes('red');
            // Check for Rocky/Laterite soil
            const isRocky = t.includes('rocky') || t.includes('laterite') || t.includes('clayey') || t.includes('coastal');
            // Check for Forest soil
            const isForest = t.includes('forest');

            if (isDark) {
                if (isBlack) return 'rgba(200, 200, 200, 0.25)';
                if (isRed) return 'rgba(244, 67, 54, 0.45)';
                if (isForest) return 'rgba(56, 142, 60, 0.5)';
                if (isRocky) return 'rgba(161, 136, 127, 0.5)';
                if (isLoam) return 'rgba(76, 175, 80, 0.45)';
                if (isSandy) return 'rgba(255, 193, 7, 0.45)';
            } else {
                if (isBlack) return 'rgba(55, 55, 55, 0.75)';
                if (isRed) return 'rgba(229, 57, 53, 0.55)';
                if (isForest) return 'rgba(27, 94, 32, 0.65)';
                if (isRocky) return 'rgba(141, 110, 99, 0.6)';
                if (isLoam) return 'rgba(76, 175, 80, 0.55)';
                if (isSandy) return 'rgba(255, 193, 7, 0.55)';
            }
            return 'var(--glass-bg)';
        };

        const legendItems = [
            { label: currentLang === 'en' ? 'Black' : currentLang === 'gu' ? 'કાળી' : 'काली', type: 'black' },
            { label: currentLang === 'en' ? 'Loamy' : currentLang === 'gu' ? 'ગોરાડુ' : 'गोराडू', type: 'loam' },
            { label: currentLang === 'en' ? 'Sandy' : currentLang === 'gu' ? 'રેતાળ' : 'रेतीली', type: 'sandy' },
            { label: currentLang === 'en' ? 'Red' : currentLang === 'gu' ? 'લાલ' : 'लाल', type: 'red' },
            { label: currentLang === 'en' ? 'Rocky' : currentLang === 'gu' ? 'પથરાળ' : 'पथरीली', type: 'rocky' },
            { label: currentLang === 'en' ? 'Forest' : currentLang === 'gu' ? 'જંગલ' : 'जंगल', type: 'forest' }
        ];

        const legendHTML = `
            <div class="glass" style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 1.5rem; padding: 15px; border: 1px solid var(--glass-border); border-radius: 12px; font-size: 0.95rem; background: var(--card-bg); box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                ${legendItems.map(item => `
                    <div style="display: flex; align-items: center; gap: 8px; padding: 4px 8px; border-radius: 6px; background: rgba(0,0,0,0.03);">
                        <div style="width: 20px; height: 20px; border-radius: 4px; background: ${getSoilColor(item.type)}; border: 1px solid rgba(0,0,0,0.2);"></div>
                        <span style="font-weight: 700; color: var(--text-color);">${item.label}</span>
                    </div>
                `).join('')}
            </div>
        `;

        grid.innerHTML = `
            <div style="grid-column: 1/-1; animation: fadeInUp 0.4s ease;">
                ${legendHTML}
                <input type="text" id="district-search" placeholder="${currentLang === 'en' ? 'Search Jilla...' : currentLang === 'gu' ? 'જિલ્લો શોધો...' : 'जिला खोजें...'}" 
                    style="width: 100%; padding: 12px; border-radius: 10px; border: 1px solid var(--glass-border); margin-bottom: 1.5rem; outline: none; background: var(--card-bg); color: var(--text-color);"
                    onkeyup="filterDistricts()">
                <div id="district-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
                    ${districts.map((d, idx) => {
            // Always use English type for reliable color matching
            const englishType = englishDistricts[idx] ? englishDistricts[idx].type : d.type;
            const bgColor = getSoilColor(englishType);
            const needsLightText = bgColor.includes('55, 55, 55') || bgColor.includes('141, 110, 99') || bgColor.includes('27, 94, 32') || bgColor.includes('229, 57, 53') || bgColor.includes('200, 200, 200') || bgColor.includes('161, 136, 127') || bgColor.includes('56, 142, 60');
            const textColor = needsLightText ? '#fff' : 'var(--text-color)';
            const headColor = needsLightText ? '#a5d6a7' : 'var(--primary-color)';
            return `
                        <div class="district-card" style="padding: 1rem; border-left: 5px solid ${headColor}; background: ${bgColor}; color: ${textColor}; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.12); transition: transform 0.3s, box-shadow 0.3s; cursor: default;" onmouseenter="this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 25px rgba(0,0,0,0.18)'" onmouseleave="this.style.transform='';this.style.boxShadow='0 4px 15px rgba(0,0,0,0.12)'">
                            <h5 style="color: ${headColor}; margin-bottom: 5px;"><i class="fas fa-map-marker-alt"></i> ${d.name}</h5>
                            <p style="font-size: 0.9rem;"><b>${l.features}:</b> ${d.type}</p>
                            <p style="font-size: 0.9rem;"><b>${l.crops}:</b> ${d.crops}</p>
                        </div>
                    `}).join('')}
                </div>
            </div>
        `;
        return;
    }

    grid.innerHTML = `
        <div style="grid-column: 1/-1; animation: fadeInUp 0.4s ease;">
            <div class="glass" style="padding: 2rem; margin-bottom: 1.5rem; border-left: 8px solid var(--primary-color);">
                <p>${soil.detailed.intro}</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <div class="glass" style="padding: 1rem; border-top: 4px solid var(--secondary-color);">
                    <h5 style="color: var(--primary-color);"><i class="fas fa-microchip"></i> ${l.features}</h5>
                    <p>${soil.detailed.features}</p>
                </div>
                <div class="glass" style="padding: 1rem; border-top: 4px solid var(--primary-color);">
                    <h5 style="color: var(--primary-color);"><i class="fas fa-seedling"></i> ${l.crops}</h5>
                    <p>${soil.detailed.crops}</p>
                </div>
                <div class="glass" style="padding: 1rem; border-top: 4px solid #3498db;">
                    <h5 style="color: #3498db;"><i class="fas fa-map-marker-alt"></i> ${l.location}</h5>
                    <p>${soil.detailed.location}</p>
                </div>
            </div>
        </div>
    `;
}

// Weather, Scanner, logic
const weatherTranslations = {
    en: {
        title: "Daily Weather Tracker",
        updated: "Last Updated",
        forecast: "3-Day Forecast",
        regions: [
            {
                name: "Saurashtra", temp: "31°C", cond: "Sunny", icon: "fas fa-sun", alert: "Groundnut stress risk. Keep soil moist.",
                weekly: [{ day: "Thu", t: "32°C", i: "fas fa-sun" }, { day: "Fri", t: "31°C", i: "fas fa-cloud-sun" }, { day: "Sat", t: "33°C", i: "fas fa-sun" }]
            },
            {
                name: "South Gujarat", temp: "34°C", cond: "Humid", icon: "fas fa-cloud", alert: "High humidity. Check Sugarcane for pests.",
                weekly: [{ day: "Thu", t: "33°C", i: "fas fa-cloud-rain" }, { day: "Fri", t: "32°C", i: "fas fa-cloud" }, { day: "Sat", t: "34°C", i: "fas fa-cloud-sun" }]
            },
            {
                name: "North Gujarat", temp: "29°C", cond: "Clear", icon: "fas fa-leaf", alert: "Cumin crop needs mild irrigation.",
                weekly: [{ day: "Thu", t: "30°C", i: "fas fa-sun" }, { day: "Fri", t: "29°C", i: "fas fa-wind" }, { day: "Sat", t: "31°C", i: "fas fa-sun" }]
            },
            {
                name: "Central Gujarat", temp: "32°C", cond: "Dry", icon: "fas fa-smog", alert: "Ideal for Tobacco harvest. Dry weather.",
                weekly: [{ day: "Thu", t: "32°C", i: "fas fa-sun" }, { day: "Fri", t: "33°C", i: "fas fa-sun" }, { day: "Sat", t: "32°C", i: "fas fa-sun" }]
            },
            {
                name: "Kutch", temp: "35°C", cond: "Heatwave", icon: "fas fa-temperature-high", alert: "Heatwave warning for Dates & Mango.",
                weekly: [{ day: "Thu", t: "36°C", i: "fas fa-sun" }, { day: "Fri", t: "37°C", i: "fas fa-fire" }, { day: "Sat", t: "35°C", i: "fas fa-sun" }]
            }
        ]
    },
    gu: {
        title: "દૈનિક હવામાન ટ્રેકર",
        updated: "છેલ્લે અપડેટ",
        forecast: "આગામી ૩ દિવસ",
        regions: [
            {
                name: "સૌરાષ્ટ્ર", temp: "31°C", cond: "તડકો", icon: "fas fa-sun", alert: "મગફળીમાં જોખમ. જમીનમાં ભેજ જાળવો.",
                weekly: [{ day: "ગુરુ", t: "32°C", i: "fas fa-sun" }, { day: "શુક્ર", t: "31°C", i: "fas fa-cloud-sun" }, { day: "શનિ", t: "33°C", i: "fas fa-sun" }]
            },
            {
                name: "દક્ષિણ ગુજરાત", temp: "34°C", cond: "ભેજવાળું", icon: "fas fa-cloud", alert: "ભેજવાળું વાતાવરણ. શેરડીમાં જીવાત તપાસો.",
                weekly: [{ day: "ગુરુ", t: "33°C", i: "fas fa-cloud-rain" }, { day: "શુક્ર", t: "32°C", i: "fas fa-cloud" }, { day: "શનિ", t: "34°C", i: "fas fa-cloud-sun" }]
            },
            {
                name: "ઉત્તર ગુજરાત", temp: "29°C", cond: "ચોખ્ખું", icon: "fas fa-leaf", alert: "જીરુંના પાકમાં હળવા પિયતની જરૂર છે.",
                weekly: [{ day: "ગુરુ", t: "30°C", i: "fas fa-sun" }, { day: "શુક્ર", t: "29°C", i: "fas fa-wind" }, { day: "શનિ", t: "31°C", i: "fas fa-sun" }]
            },
            {
                name: "મધ્ય ગુજરાત", temp: "32°C", cond: "સૂકું", icon: "fas fa-smog", alert: "તમ્બાકુની લણણી માટે અનુકૂળ સૂકું વાતાવરણ.",
                weekly: [{ day: "ગુરુ", t: "32°C", i: "fas fa-sun" }, { day: "શુક્ર", t: "33°C", i: "fas fa-sun" }, { day: "શનિ", t: "32°C", i: "fas fa-sun" }]
            },
            {
                name: "કચ્છ", temp: "35°C", cond: "હીટવેવ", icon: "fas fa-temperature-high", alert: "ખારેક અને કેરી માટે હીટવેવની આગાહી.",
                weekly: [{ day: "ગુરુ", t: "36°C", i: "fas fa-sun" }, { day: "શુક્ર", t: "37°C", i: "fas fa-fire" }, { day: "શનિ", t: "35°C", i: "fas fa-sun" }]
            }
        ]
    },
    hi: {
        title: "दैनिक मौसम ट्रैकर",
        updated: "अंतिम अपडेट",
        forecast: "अगले 3 दिन",
        regions: [
            {
                name: "सौराष्ट्र (Saurashtra)", temp: "31°C", cond: "धूप", icon: "fas fa-sun", alert: "मूंगफली के लिए जोखिम। मिट्टी में नमी बनाए रखें।",
                weekly: [{ day: "गुरु", t: "32°C", i: "fas fa-sun" }, { day: "शुक्र", t: "31°C", i: "fas fa-cloud-sun" }, { day: "शनि", t: "33°C", i: "fas fa-sun" }]
            },
            {
                name: "दक्षिण गुजरात (South)", temp: "34°C", cond: "आर्द्र", icon: "fas fa-cloud", alert: "उच्च आर्द्रता। गन्ने में कीटों की जाँच करें।",
                weekly: [{ day: "गुरु", t: "33°C", i: "fas fa-cloud-rain" }, { day: "शुक्र", t: "32°C", i: "fas fa-cloud" }, { day: "शनि", t: "34°C", i: "fas fa-cloud-sun" }]
            },
            {
                name: "उत्तर गुजरात (North)", temp: "29°C", cond: "साफ", icon: "fas fa-leaf", alert: "जीरे की फसल को हल्की सिंचाई की आवश्यकता है।",
                weekly: [{ day: "गुरु", t: "30°C", i: "fas fa-sun" }, { day: "शुक्र", t: "29°C", i: "fas fa-wind" }, { day: "शनि", t: "31°C", i: "fas fa-sun" }]
            },
            {
                name: "मध्य गुजरात (Central)", temp: "32°C", cond: "शुष्क", icon: "fas fa-smog", alert: "तंबाकू की कटाई के लिए आदर्श शुष्क मौसम।",
                weekly: [{ day: "गुरु", t: "32°C", i: "fas fa-sun" }, { day: "शुक्र", t: "33°C", i: "fas fa-sun" }, { day: "शनि", t: "32°C", i: "fas fa-sun" }]
            },
            {
                name: "कच्छ (Kutch)", temp: "35°C", cond: "लू", icon: "fas fa-temperature-high", alert: "खजूर और आम के लिए लू की चेतावनी।",
                weekly: [{ day: "गुरु", t: "36°C", i: "fas fa-sun" }, { day: "शुक्र", t: "37°C", i: "fas fa-fire" }, { day: "शनि", t: "35°C", i: "fas fa-sun" }]
            }
        ]
    }
};

// Weather Codes to Icon/Cond Map
// Weather Codes to Icon/Cond Map
function getWeatherStatus(code) {
    const isHindi = currentLang === 'hi';
    const isGujarati = currentLang === 'gu';

    // WMO Weather interpretation codes (WW)
    if (code === 0) return { icon: "fas fa-sun", label: isGujarati ? "સ્વચ્છ" : isHindi ? "साफ" : "Clear" };
    if (code >= 1 && code <= 3) return { icon: "fas fa-cloud-sun", label: isGujarati ? "આંશિક વાદળછાયું" : isHindi ? "आंशिक बादल" : "Partly Cloudy" };
    if (code >= 45 && code <= 48) return { icon: "fas fa-smog", label: isGujarati ? "ધુમ્મસ" : isHindi ? "कोहरा" : "Foggy" };
    if (code >= 51 && code <= 67) return { icon: "fas fa-cloud-rain", label: isGujarati ? "વરસાદ" : isHindi ? "बारिश" : "Rainy" };
    if (code >= 71 && code <= 77) return { icon: "fas fa-snowflake", label: isGujarati ? "બરફવર્ષા" : isHindi ? "बर्फबारी" : "Snow" };
    if (code >= 80 && code <= 82) return { icon: "fas fa-cloud-showers-heavy", label: isGujarati ? "ભારે વરસાદ" : isHindi ? "भारी बारिश" : "Showers" };
    if (code >= 95 && code <= 99) return { icon: "fas fa-bolt", label: isGujarati ? "વાવાઝોડું" : isHindi ? "आंधी" : "Thunderstorm" };
    return { icon: "fas fa-cloud", label: isGujarati ? "વાદળછાયું" : isHindi ? "बादल" : "Cloudy" };
}

async function fetchWeatherForRegion(lat, lon, regionName) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,relative_humidity_2m&daily=temperature_2m_max,weather_code&timezone=auto`);
        const data = await response.json();

        const current = data.current;
        const daily = data.daily;
        const status = getWeatherStatus(current.weather_code);

        // Weekly forecast (Next 3 days)
        const weekly = [];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        for (let i = 1; i <= 3; i++) {
            const d = new Date(daily.time[i]);
            const dayName = days[d.getDay()];
            const s = getWeatherStatus(daily.weather_code[i]);
            weekly.push({ day: dayName, t: `${Math.round(daily.temperature_2m_max[i])}°C`, i: s.icon });
        }

        // Generate dynamic alert based on conditions
        let alertMsg = "Normal conditions. Good for field work.";
        if (current.temperature_2m > 35) alertMsg = "High temperature warning. Irrigate crops in evening.";
        if (current.relative_humidity_2m > 80) alertMsg = "High humidity. Check for fungal infections.";
        if (current.weather_code >= 51) alertMsg = "Rain forecast. Delay pesticide spraying.";

        return {
            name: regionName,
            temp: `${Math.round(current.temperature_2m)}°C`,
            cond: status.label,
            icon: status.icon,
            alert: alertMsg,
            weekly: weekly
        };

    } catch (error) {
        console.error("Weather fetch failed", error);
        return null; // Return null to fallback or skip
    }
}

async function showWeatherInfo() {
    const modal = document.getElementById('weather-modal');
    const overlay = document.getElementById('modal-overlay');
    const grid = document.getElementById('weather-details-grid');
    const originalData = weatherTranslations[currentLang] || weatherTranslations['en'];

    // Define regions with coordinates
    const regionsCoords = [
        { name: "Saurashtra", lat: 22.30, lon: 70.80 },
        { name: "South Gujarat", lat: 21.17, lon: 72.83 },
        { name: "North Gujarat", lat: 24.17, lon: 72.43 },
        { name: "Central Gujarat", lat: 23.02, lon: 72.57 },
        { name: "Kutch", lat: 23.24, lon: 69.66 }
    ];

    // Show loading state
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;"><i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--primary-color);"></i><p>Updating Live Weather...</p></div>';

    // Open modal immediately
    overlay.classList.add('active');
    modal.classList.add('active');

    // Update Header
    const backBtn = document.getElementById('weather-modal-back');
    if (backBtn) {
        backBtn.style.display = 'block';
        backBtn.onclick = closeWeatherModal;
    }
    const titleEle = document.getElementById('weather-modal-title');
    if (titleEle) titleEle.innerText = originalData.title;

    // Fetch data
    const weatherPromises = regionsCoords.map(r => fetchWeatherForRegion(r.lat, r.lon, r.name));
    const weatherResults = await Promise.all(weatherPromises);

    // Filter out failed requests and merge with translation names if needed
    // For simplicity, we use English names from API map, but we could map them to localized names

    // Construct Grid
    const now = new Date();
    const timeStr = now.toLocaleDateString() + ' ' + now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

    let regionHTML = '';

    weatherResults.forEach((w, index) => {
        if (!w) {
            // Fallback to static data if fetch fails
            w = originalData.regions[index]; // Note: index alignment must match
        } else {
            // Try to use localized name if available
            if (originalData.regions[index]) {
                w.name = originalData.regions[index].name;
                // We could also try to localize 'cond' and 'alert' here using a map, but for now English/Dynamic is better than static
            }
        }

        regionHTML += `
            <div class="glass" style="padding: 1.5rem; text-align: left; border-top: 5px solid var(--primary-color);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <h5 style="color: var(--primary-color); font-size: 1.1rem;"><i class="fas fa-map-marked-alt"></i> ${w.name}</h5>
                        <p style="font-size: 0.8rem; opacity: 0.8;">${w.cond}</p>
                    </div>
                    <i class="${w.icon}" style="font-size: 2rem; color: var(--secondary-color);"></i>
                </div>
                <h2 style="font-size: 3rem; margin: 15px 0;">${w.temp}</h2>
                <div class="glass" style="padding: 0.8rem; background: rgba(var(--secondary-color-rgb), 0.1); margin-bottom: 1rem; border-radius: 10px;">
                    <p style="font-size: 0.85rem;"><i class="fas fa-exclamation-triangle" style="color: var(--secondary-color);"></i> ${w.alert}</p>
                </div>
                <div style="border-top: 1px solid var(--glass-border); padding-top: 10px;">
                    <p style="font-size: 0.8rem; font-weight: 800; margin-bottom: 8px;">3-Day Forecast</p>
                    <div style="display: flex; justify-content: space-between;">
                        ${w.weekly.map(wk => `
                            <div style="text-align: center;">
                                <span style="font-size: 0.7rem; opacity: 0.7; display: block;">${wk.day}</span>
                                <i class="${wk.i}" style="font-size: 1rem; margin: 4px 0; display: block; color: var(--primary-color);"></i>
                                <span style="font-size: 0.8rem; font-weight: 600;">${wk.t}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    const updateLabel = currentLang === 'en' ? 'Live Data Updated' : currentLang === 'gu' ? 'લાઇવ ડેટા અપડેટ થયો' : 'लाइव डेटा अपडेट किया गया';

    grid.innerHTML = `
        <div style="grid-column: 1/-1; margin-bottom: 1rem; font-size: 0.95rem; text-align: center; padding: 10px; background: rgba(255,255,255,0.8); border-radius: 50px; display: inline-block; justify-self: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <i class="fas fa-satellite-dish" style="color: var(--primary-color);"></i> 
            <span style="font-weight: 600; color: var(--text-color);">
                ${updateLabel}: ${timeStr}
            </span>
        </div>
        ${regionHTML}
    `;
}

const scannerTranslations = {
    en: {
        analyzing: "Analyzing Image...",
        confidence: "Confidence",
        solution: "Recommended Solution",
        resultLabel: "Detection Result",
        done: "Done",
        scanAgain: "Scan Another",
        instruction: "Upload an image of the affected crop area to start scanning.",
        selectPhoto: "Select Photo",
        pests: [
            { name: "Healthy Leaf", solution: "No pests detected. Your plant looks healthy! Continue regular watering and nutrients.", confidence: "99.1%", type: 'healthy' },
            { name: "Aphids", solution: "Use Neem oil spray (5ml per liter) or organic pesticide. Avoid excessive nitrogen fertilizer.", confidence: "94.2%", type: 'pest' },
            { name: "Leaf Miner", solution: "Remove affected leaves and use yellow sticky traps. Apply Neem-based insecticides.", confidence: "88.7%", type: 'pest' },
            { name: "Whitefly", solution: "Install yellow sticky traps. Spray water with mild soap or use Neem oil.", confidence: "91.5%", type: 'pest' },
            { name: "Bollworm", solution: "Encourage natural predators. Apply Bacillus thuringiensis (Bt) or appropriate organic pesticide.", confidence: "86.4%", type: 'pest' },
            { name: "Rust Fungi", solution: "Improve air circulation. Apply sulfur-based fungicide and avoid overhead watering.", confidence: "90.2%", type: 'pest' }
        ]
    },
    gu: {
        analyzing: "છબીનું વિશ્લેષણ કરી રહ્યા છીએ...",
        confidence: "ચોકસાઈ",
        solution: "ભલામણ કરેલ ઉપાય",
        resultLabel: "તપાસનું પરિણામ",
        done: "પૂર્ણ",
        scanAgain: "બીજું સ્કેન કરો",
        instruction: "સ્કેનિંગ શરૂ કરવા માટે અસરગ્રસ્ત પાકના વિસ્તારનો ફોટો અપલોડ કરો.",
        selectPhoto: "ફોટો પસંદ કરો",
        pests: [
            { name: "તંદુરસ્ત પાન (Healthy)", solution: "કોઈ જીવાત મળી નથી. તમારો છોડ તંદુરસ્ત છે! નિયમિત પાણી અને ખાતર આપવાનું ચાલુ રાખો.", confidence: "99.1%", type: 'healthy' },
            { name: "મોલો-મશી (Aphids)", solution: "લીમડાના તેલનો છંટકાવ (લિટર દીઠ 5 મિલી) અથવા જૈવિક કીટનાશકનો ઉપયોગ કરો. વધુ પડતા નાઇટ્રોજન ખાતરથી બચો.", confidence: "94.2%", type: 'pest' },
            { name: "પાન કોરીયું (Leaf Miner)", solution: "અસરગ્રસ્ત પાંદડા દૂર કરો અને પીળા સ્ટીકી ટ્રેપ્સનો ઉપયોગ કરો. લીમડાના તેલનો ઉપયોગ કરો.", confidence: "88.7%", type: 'pest' },
            { name: "સફેદ માખી (Whitefly)", solution: "પીળા સ્ટીકી ટ્રેપ્સ લગાવો. સાબુવાળા પાણીનો અથવા લીમડાના તેલનો છંટકાવ કરો.", confidence: "91.5%", type: 'pest' },
            { name: "ઈયળ (Bollworm)", solution: "પક્ષીઓ માટે બેસવાની વ્યવસ્થા કરો. લીમડાના અર્ક અથવા Bt નો ઉપયોગ કરો.", confidence: "86.4%", type: 'pest' },
            { name: "ગેરુનો રોગ (Rust)", solution: "છોડ વચ્ચે હવા ઉજાસ જાળવો. સલ્ફરયુક્ત દવાનો છંટકાવ કરો.", confidence: "90.2%", type: 'pest' }
        ]
    },
    hi: {
        analyzing: "छवि का विश्लेषण कर रहे हैं...",
        confidence: "सटीकता",
        solution: "अनुशंसित समाधान",
        resultLabel: "पहचान का परिणाम",
        done: "हो गया",
        scanAgain: "दूसरा स्कैन करें",
        instruction: "स्कैनिंग शुरू करने के लिए प्रभावित फसल क्षेत्र की छवि अपलोड करें।",
        selectPhoto: "फोटो चुनें",
        pests: [
            { name: "स्वस्थ पत्ता (Healthy)", solution: "कोई कीट नहीं पाया गया। आपका पौधा स्वस्थ है! नियमित सिंचाई और पोषण जारी रखें।", confidence: "99.1%", type: 'healthy' },
            { name: "माहू (Aphids)", solution: "नीम के तेल का स्प्रे (5 मिली प्रति लीटर) या जैविक कीटनाशक का उपयोग करें। अत्यधिक नाइट्रोजन उर्वरक से बचें।", confidence: "94.2%", type: 'pest' },
            { name: "लीफ माइनर (Leaf Miner)", solution: "प्रभावित पत्तियों को हटा दें और पीले चिपचिपे जाल का उपयोग करें। नीम आधारित कीटनाशकों का प्रयोग करें।", confidence: "88.7%", type: 'pest' },
            { name: "सफेद मक्खी (Whitefly)", solution: "पीले चिपचिपे जाल लगाएं। हल्के साबुन के पानी या नीम के तेल का छिड़काव करें।", confidence: "91.5%", type: 'pest' },
            { name: "सूंडी (Bollworm)", solution: "प्राकृतिक शत्रुओं को बढ़ावा दें। उपयुक्त जैविक कीटनाशक या नीम के अर्क का प्रयोग करें।", confidence: "86.4%", type: 'pest' },
            { name: "गेरूआ रोग (Rust)", solution: "हवा का संचार सुधारें। सल्फर आधारित कवकनाशी का प्रयोग करें।", confidence: "90.2%", type: 'pest' }
        ]
    }
};

let lastResultIndex = -1;

function openScannerModal() {
    document.getElementById('pest-scanner-modal').classList.add('active');
    document.getElementById('modal-overlay').classList.add('active');
    resetScanner();
}

function handlePestScan() {
    const fileRef = document.getElementById('pest-upload-real');
    if (!fileRef.files[0]) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('scanned-image-preview').src = e.target.result;
        document.getElementById('scanned-image-preview').style.display = 'block';
    };
    reader.readAsDataURL(fileRef.files[0]);

    const scannerData = scannerTranslations[currentLang] || scannerTranslations['en'];

    document.getElementById('scanner-upload-placeholder').style.display = 'none';
    document.getElementById('scan-loading').style.display = 'flex';
    document.getElementById('scan-status-text').innerText = scannerData.analyzing;
    document.getElementById('scanning-line').style.display = 'block';
    document.getElementById('scanner-result').style.display = 'none';

    setTimeout(() => {
        document.getElementById('scanning-line').style.display = 'none';
        document.getElementById('scan-loading').style.display = 'none';

        // Detect non-repeating random index
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * scannerData.pests.length);
        } while (randomIndex === lastResultIndex && scannerData.pests.length > 1);

        lastResultIndex = randomIndex;
        const randomPest = scannerData.pests[randomIndex];

        document.getElementById('pest-name').innerText = `${scannerData.resultLabel}: ${randomPest.name}`;
        document.getElementById('pest-confidence').innerText = `${scannerData.confidence}: ${randomPest.confidence}`;
        document.getElementById('pest-solution-title').innerText = `${scannerData.solution}:`;
        document.getElementById('pest-solution-text').innerText = randomPest.solution;

        // Change color for healthy plants
        const resultBox = document.querySelector('#scanner-result .glass');
        if (randomPest.type === 'healthy') {
            resultBox.style.borderColor = "#4caf50";
            document.getElementById('pest-name').style.color = "#4caf50";
        } else {
            resultBox.style.borderColor = "var(--primary-color)";
            document.getElementById('pest-name').style.color = "var(--primary-color)";
        }

        // Show back arrow to allow scanning again
        const backBtn = document.getElementById('scanner-modal-back');
        backBtn.style.display = 'block';
        backBtn.onclick = resetScanner;

        document.getElementById('scanner-result').style.display = 'block';

        // Clear file input so the same file can be scanned again
        fileRef.value = "";
    }, 2500);
}

function resetScanner() {
    const scannerData = scannerTranslations[currentLang] || scannerTranslations['en'];
    const backBtn = document.getElementById('scanner-modal-back');
    backBtn.style.display = 'block';
    backBtn.onclick = closeScannerModal;
    document.getElementById('scanner-upload-placeholder').style.display = 'block';
    document.getElementById('scanner-result').style.display = 'none';
    document.getElementById('scanned-image-preview').style.display = 'none';
    document.getElementById('scan-loading').style.display = 'none';
    document.getElementById('scanning-line').style.display = 'none';

    // Update placeholder text
    document.getElementById('scanner-instruction').innerText = scannerData.instruction;
    document.getElementById('btn-upload-text').innerText = scannerData.selectPhoto;
}

function closeSoilModal() { document.getElementById('soil-modal').classList.remove('active'); document.getElementById('modal-overlay').classList.remove('active'); }
function closeWeatherModal() { document.getElementById('weather-modal').classList.remove('active'); document.getElementById('modal-overlay').classList.remove('active'); }
function closeScannerModal() { document.getElementById('pest-scanner-modal').classList.remove('active'); document.getElementById('modal-overlay').classList.remove('active'); }
function closeGovtModal() { document.getElementById('govt-modal').classList.remove('active'); document.getElementById('modal-overlay').classList.remove('active'); }
function closeAllModals() { closeSoilModal(); closeWeatherModal(); closeScannerModal(); closeGovtModal(); }

function toggleChat() {
    const cw = document.getElementById('chat-window');
    cw.style.display = (cw.style.display === 'flex' ? 'none' : 'flex');
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const msgText = input.value.trim();
    if (!msgText) return;

    // User Message
    const msg = document.createElement('div');
    msg.className = 'msg-user glass';
    msg.innerText = msgText;
    const chatBox = document.getElementById('chat-messages');
    chatBox.appendChild(msg);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // Show typing indicator
    const typing = document.createElement('div');
    typing.id = 'bot-typing';
    typing.className = 'msg-bot glass';
    typing.innerText = '...';
    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: msgText })
        });
        const data = await response.json();

        // Remove typing indicator
        const typingEl = document.getElementById('bot-typing');
        if (typingEl) typingEl.remove();

        const botMsg = document.createElement('div');
        botMsg.className = 'msg-bot glass';
        // Handle markdown-style text simply if any, or just plain text
        botMsg.innerText = data.reply || "Connection error.";
        if (data.source === 'ai') {
            botMsg.style.borderLeft = "4px solid #aaffaa"; // Visual cue for AI
        }
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {
        console.error(error);
        const typingEl = document.getElementById('bot-typing');
        if (typingEl) typingEl.remove();

        const botMsg = document.createElement('div');
        botMsg.className = 'msg-bot glass';
        botMsg.innerText = "Error connecting to AI server.";
        chatBox.appendChild(botMsg);
    }
}

// Add event listener for Enter key 
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('chat-input');
    if (input) {
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') sendMessage();
        });
    }
});

setInterval(() => {
    const wp = document.querySelector('#market-widget span:last-child');
    if (wp) wp.innerHTML = `₹${2400 + Math.floor(Math.random() * 100)}/q`;
}, 5000);
