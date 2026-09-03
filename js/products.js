/* ===== Tradi Mira — Product catalogue =====
   To add a real photo: set  img: "assets/images/your-photo.jpg"
   Leave img empty ("") to show a colored placeholder tile.
   Prices are in Moroccan Dirham (د.م). Edit freely. */

const CATEGORIES = [
  { id: "kaftan",   name: "قفاطين وتكاشط",   icon: "👗", color: "linear-gradient(160deg,#e94f6b,#f0a04b)" },
  { id: "accessoires", name: "إكسسوارات",     icon: "💎", color: "linear-gradient(160deg,#2ec4b6,#118a7e)" },
  { id: "khotoba",  name: "لوازم الخطوبة",    icon: "💍", color: "linear-gradient(160deg,#d4a53a,#b8860b)" },
  { id: "tissus",   name: "أقمشة وحرير",      icon: "🧵", color: "linear-gradient(160deg,#8e7cc3,#5b4a9c)" },
];

const PRODUCTS = [
  // --- Kaftans & traditional dresses ---
  { id: 1, name: "قفطان أصفر مطرّز بلمسة أمازيغية", cat: "kaftan", price: 1200, old: 1500, tag: "الأكثر مبيعاً", img: "", ph: "👗", color:"linear-gradient(160deg,#f0c419,#d4a53a)",
    desc: "قفطان فاخر بتطريز يدوي وألوان دافئة، مثالي للمناسبات." },
  { id: 2, name: "تكشيطة تقليدية بالخيط الذهبي", cat: "kaftan", price: 1650, old: null, tag: "جديد", img: "", ph: "👘", color:"linear-gradient(160deg,#6d214f,#b33771)",
    desc: "تكشيطة راقية بتفاصيل ذهبية وحزام مطرّز." },
  { id: 3, name: "فستان أمازيغي احتفالي", cat: "kaftan", price: 980, old: 1200, tag: null, img: "", ph: "👗", color:"linear-gradient(160deg,#2ec4b6,#0e6ea0)",
    desc: "فستان ملوّن بنقوش أمازيغية أصيلة للحفلات." },
  { id: 4, name: "جلابة نسائية مطرّزة", cat: "kaftan", price: 750, old: null, tag: null, img: "", ph: "🧥", color:"linear-gradient(160deg,#e94f6b,#c0392b)",
    desc: "جلابة أنيقة بخامة مريحة وتطريز يدوي دقيق." },

  // --- Accessories ---
  { id: 5, name: "طقم إكسسوارات بالصنج والخيوط الأخضر", cat: "accessoires", price: 320, old: 400, tag: "الأكثر مبيعاً", img: "assets/images/p5-accessoires.jpg", ph: "💎", color:"linear-gradient(160deg,#16a085,#f0a04b)",
    desc: "طقم زينة تقليدي بخيوط خضراء وصنج ذهبي وقماش مزركش." },
  { id: 6, name: "شربات (خيوط زينة) ملوّنة", cat: "accessoires", price: 140, old: null, tag: null, img: "", ph: "🎀", color:"linear-gradient(160deg,#2ec4b6,#e94f6b)",
    desc: "خيوط زينة أمازيغية متعددة الألوان للتزيين." },
  { id: 7, name: "حزام مطرّز بالصنج الذهبي", cat: "accessoires", price: 260, old: 320, tag: null, img: "", ph: "🧣", color:"linear-gradient(160deg,#d4a53a,#8e6c1a)",
    desc: "حزام تقليدي يبرز جمال القفطان والتكشيطة." },
  { id: 8, name: "طقم زينة وردي بالصنج", cat: "accessoires", price: 300, old: null, tag: "جديد", img: "", ph: "🌸", color:"linear-gradient(160deg,#f78fb3,#e94f6b)",
    desc: "طقم ناعم بلون وردي وتفاصيل لامعة." },

  // --- Engagement / wedding ---
  { id: 9, name: "طقم الخطوبة الفاخر بلمسة أمازيغية", cat: "khotoba", price: 850, old: 1000, tag: "مميز", img: "", ph: "💍", color:"linear-gradient(160deg,#d4a53a,#b8860b)",
    desc: "طقم متكامل لتزيين صينية الخطوبة بأناقة." },
  { id: 10, name: "زينة كؤوس العروس (القطعة)", cat: "khotoba", price: 90, old: null, tag: null, img: "assets/images/p10-zina-kous.jpg", ph: "🥂", color:"linear-gradient(160deg,#c0392b,#8e2216)",
    desc: "زينة يدوية للكؤوس بألوان الراية الأمازيغية الأصيلة." },
  { id: 11, name: "سلة هدايا مزيّنة تقليدية", cat: "khotoba", price: 420, old: 520, tag: null, img: "", ph: "🎁", color:"linear-gradient(160deg,#e67e22,#d4a53a)",
    desc: "سلة أنيقة مزيّنة بالخيوط والصنج للمناسبات." },
  { id: 12, name: "خنجر تقليدي مع حبال ذهبية وحمراء", cat: "khotoba", price: 680, old: null, tag: "حصري", img: "assets/images/p12-khanjar.jpg", ph: "🗡️", color:"linear-gradient(160deg,#7f8c8d,#2c3e50)",
    desc: "خنجر مغربي تقليدي بمقبض منقوش مع حبال وشراشيب ذهبية وحمراء." },

  // --- Fabrics ---
  { id: 13, name: "قماش حرير بنقوش ذهبية", cat: "tissus", price: 220, old: 280, tag: "تخفيض", img: "", ph: "🧵", color:"linear-gradient(160deg,#5b4a9c,#8e7cc3)",
    desc: "قماش فاخر بلمعة ذهبية للخياطة الراقية (المتر)." },
  { id: 14, name: "حايك تقليدي أحمر بالخيوط الملوّنة", cat: "tissus", price: 190, old: null, tag: null, img: "assets/images/p14-hayk-ahmar.jpg", ph: "🪡", color:"linear-gradient(160deg,#c0392b,#e67e22)",
    desc: "حايك أمازيغي أصيل بخطوط ملوّنة وشراشيب يدوية (القطعة)." },
  { id: 15, name: "قماش رمادي مطرّز بالترتر", cat: "tissus", price: 240, old: 290, tag: "جديد", img: "assets/images/p15-tissu-gris.jpg", ph: "✨", color:"linear-gradient(160deg,#7f8c9b,#b0bec5)",
    desc: "قماش شفاف فاخر مطرّز بالترتر اللامع ونقوش زهرية (المتر)." },
  { id: 16, name: "قماش تقليدي بخيوط ملوّنة", cat: "tissus", price: 175, old: 220, tag: null, img: "", ph: "🎨", color:"linear-gradient(160deg,#16a085,#d4a53a)",
    desc: "قماش أمازيغي أصيل بخطوط وألوان تراثية (المتر)." },
];
