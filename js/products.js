/* ===== Tradi Mira — Product catalogue =====
   Photos are wired to assets/images/tradi-NN.jpg
   Edit names / prices / tags freely. Prices in Moroccan Dirham (د.م). */

const CATEGORIES = [
  { id: "chrrabat",    name: "شرّابات وزينة الحايك", icon: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)" },
  { id: "tissus",      name: "أقمشة وحايك",         icon: "🧵", color: "linear-gradient(160deg,#8e7cc3,#5b4a9c)" },
  { id: "khotoba",     name: "لوازم الخطوبة والحلي", icon: "💍", color: "linear-gradient(160deg,#d4a53a,#b8860b)" },
  { id: "accessoires", name: "إكسسوارات وخلائل",    icon: "💎", color: "linear-gradient(160deg,#2ec4b6,#118a7e)" },
];

const PRODUCTS = [
  { id: 1, name: "حايك أمازيغي ملوّن بالشراشيب", cat: "tissus", price: 450, old: null, tag: "الأكثر مبيعاً", img: "assets/images/tradi-01.jpg", ph: "🧵", color: "linear-gradient(160deg,#8e7cc3,#5b4a9c)", desc: "قماش/حايك تقليدي بجودة عالية." },
  { id: 2, name: "قماش أورغانزا رمادي مطرّز بالترتر", cat: "tissus", price: 240, old: 290, tag: "جديد", img: "assets/images/tradi-02.jpg", ph: "🧵", color: "linear-gradient(160deg,#8e7cc3,#5b4a9c)", desc: "قماش/حايك تقليدي بجودة عالية." },
  { id: 3, name: "خنجر مغربي تقليدي بشرّابة حمراء", cat: "khotoba", price: 680, old: null, tag: "حصري", img: "assets/images/tradi-03.jpg", ph: "💍", color: "linear-gradient(160deg,#d4a53a,#b8860b)", desc: "قطعة تقليدية فاخرة للمناسبات والهدايا." },
  { id: 4, name: "حايك أصفر بالخيوط التقليدية", cat: "tissus", price: 380, old: null, tag: null, img: "assets/images/tradi-04.jpg", ph: "🧵", color: "linear-gradient(160deg,#8e7cc3,#5b4a9c)", desc: "قماش/حايك تقليدي بجودة عالية." },
  { id: 5, name: "شرّابة ذهبية فاخرة", cat: "chrrabat", price: 180, old: null, tag: null, img: "assets/images/tradi-05.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
  { id: 6, name: "طقم إكسسوارات برتقالي بالشراشيب", cat: "chrrabat", price: 220, old: null, tag: "جديد", img: "assets/images/tradi-06.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
  { id: 7, name: "طقم قماش مع خلالة ذهبية أمازيغية", cat: "accessoires", price: 320, old: null, tag: null, img: "assets/images/tradi-07.jpg", ph: "💎", color: "linear-gradient(160deg,#2ec4b6,#118a7e)", desc: "إكسسوار أمازيغي أصيل بصناعة يدوية." },
  { id: 8, name: "حقيبة يد مطرّزة حمراء بالرموز الأمازيغية", cat: "accessoires", price: 260, old: null, tag: "مميز", img: "assets/images/tradi-08.jpg", ph: "💎", color: "linear-gradient(160deg,#2ec4b6,#118a7e)", desc: "إكسسوار أمازيغي أصيل بصناعة يدوية." },
  { id: 9, name: "عقد الكهرمان التقليدي", cat: "khotoba", price: 550, old: 650, tag: null, img: "assets/images/tradi-09.jpg", ph: "💍", color: "linear-gradient(160deg,#d4a53a,#b8860b)", desc: "قطعة تقليدية فاخرة للمناسبات والهدايا." },
  { id: 10, name: "طقم شرّابات وردي بالصنج", cat: "chrrabat", price: 240, old: null, tag: null, img: "assets/images/tradi-10.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
  { id: 11, name: "طقم شرّابات فيروزي", cat: "chrrabat", price: 240, old: null, tag: null, img: "assets/images/tradi-11.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
  { id: 12, name: "طقم شرّابات سماوي", cat: "chrrabat", price: 240, old: null, tag: null, img: "assets/images/tradi-12.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
  { id: 13, name: "طقم شرّابات ذهبي", cat: "chrrabat", price: 260, old: null, tag: "الأكثر مبيعاً", img: "assets/images/tradi-13.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
  { id: 14, name: "طقم شرّابات فوشيا بالصنج", cat: "chrrabat", price: 250, old: null, tag: null, img: "assets/images/tradi-14.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
  { id: 15, name: "طقم شرّابات وردي فاتح", cat: "chrrabat", price: 240, old: null, tag: null, img: "assets/images/tradi-15.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
  { id: 16, name: "طقم شرّابات ذهبي فاخر", cat: "chrrabat", price: 260, old: null, tag: null, img: "assets/images/tradi-16.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
  { id: 17, name: "شرّابات متعددة الألوان (بوكيه)", cat: "chrrabat", price: 160, old: null, tag: "جديد", img: "assets/images/tradi-17.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
  { id: 18, name: "زينة كؤوس العروس بألوان الراية", cat: "khotoba", price: 90, old: null, tag: null, img: "assets/images/tradi-18.jpg", ph: "💍", color: "linear-gradient(160deg,#d4a53a,#b8860b)", desc: "قطعة تقليدية فاخرة للمناسبات والهدايا." },
  { id: 19, name: "عقد الكهرمان بالشراشيب الحمراء", cat: "khotoba", price: 600, old: null, tag: null, img: "assets/images/tradi-19.jpg", ph: "💍", color: "linear-gradient(160deg,#d4a53a,#b8860b)", desc: "قطعة تقليدية فاخرة للمناسبات والهدايا." },
  { id: 20, name: "قماش أبيض مطرّز بحاشية ذهبية", cat: "tissus", price: 300, old: null, tag: null, img: "assets/images/tradi-20.jpg", ph: "🧵", color: "linear-gradient(160deg,#8e7cc3,#5b4a9c)", desc: "قماش/حايك تقليدي بجودة عالية." },
  { id: 21, name: "خلالة فضية أمازيغية بالحلي", cat: "accessoires", price: 450, old: null, tag: "حصري", img: "assets/images/tradi-21.jpg", ph: "💎", color: "linear-gradient(160deg,#2ec4b6,#118a7e)", desc: "إكسسوار أمازيغي أصيل بصناعة يدوية." },
  { id: 22, name: "قماش برتقالي شفاف بخطوط ذهبية", cat: "tissus", price: 190, old: null, tag: null, img: "assets/images/tradi-22.jpg", ph: "🧵", color: "linear-gradient(160deg,#8e7cc3,#5b4a9c)", desc: "قماش/حايك تقليدي بجودة عالية." },
  { id: 23, name: "قماش أخضر مطرّز بنقوش أمازيغية", cat: "tissus", price: 210, old: null, tag: null, img: "assets/images/tradi-23.jpg", ph: "🧵", color: "linear-gradient(160deg,#8e7cc3,#5b4a9c)", desc: "قماش/حايك تقليدي بجودة عالية." },
  { id: 24, name: "حايك بنفسجي مقلّم بالشراشيب", cat: "tissus", price: 420, old: null, tag: null, img: "assets/images/tradi-24.jpg", ph: "🧵", color: "linear-gradient(160deg,#8e7cc3,#5b4a9c)", desc: "قماش/حايك تقليدي بجودة عالية." },
  { id: 25, name: "طقم شرّابات عنابي بالصنج", cat: "chrrabat", price: 250, old: null, tag: null, img: "assets/images/tradi-25.jpg", ph: "🎀", color: "linear-gradient(160deg,#e94f6b,#f0a04b)", desc: "طقم شرّابات وزينة يدوية للحايك والقفطان." },
];
