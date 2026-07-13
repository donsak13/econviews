# Economic Views — Οδηγίες εγκατάστασης

## Τι περιέχει ο φάκελος

- `index.html` — Αρχική σελίδα
- `articles.html` — Λίστα άρθρων
- `article-sample.html` — Δείγμα άρθρου (το πρότυπο για κάθε νέο άρθρο)
- `services.html` — Υπηρεσίες + φόρμα consult
- `about.html` — Σχετικά
- `assets/style.css` — Όλο το στυλ
- `assets/lang.js` — Εναλλαγή γλώσσας EN/ΕΛ + μενού κινητού

Η γλώσσα εναλλάσσεται με το κουμπί ΕΛ/EN πάνω δεξιά. Προεπιλογή: Αγγλικά.

## Βήμα 1 — Δες το τοπικά

Άνοιξε το `index.html` με διπλό κλικ σε οποιονδήποτε browser. Δουλεύει χωρίς server.

## Βήμα 2 — GitHub

1. Λογαριασμός στο github.com (δωρεάν)
2. New repository → όνομα π.χ. `economic-views` → Public → Create
3. "uploading an existing file" → σύρε ΟΛΑ τα αρχεία (μαζί με τον φάκελο assets) → Commit

## Βήμα 3 — Cloudflare Pages

1. Λογαριασμός στο dash.cloudflare.com (δωρεάν)
2. Workers & Pages → Create → Pages → Connect to Git
3. Επίλεξε το repository `economic-views`
4. Build settings: άφησέ τα ΟΛΑ κενά (δεν χρειάζεται build) → Save and Deploy
5. Σε ~1 λεπτό το site είναι live στο `economic-views.pages.dev`

Κάθε φορά που ανεβάζεις αλλαγή στο GitHub, το site ενημερώνεται αυτόματα.

## Βήμα 4 — Φόρμα consult (Formspree)

1. Λογαριασμός στο formspree.io (δωρεάν, 50 μηνύματα/μήνα)
2. New form → πάρε το ID (μοιάζει με `xabcdefg`)
3. Στο `services.html` αντικατέστησε το `YOUR_FORM_ID` στη γραμμή:
   `action="https://formspree.io/f/YOUR_FORM_ID"`
4. Τα αιτήματα θα έρχονται στο email σου.

## Βήμα 5 — Custom domain (προαιρετικό αλλά συνιστάται)

Αγόρασε domain (~10€/χρόνο, π.χ. από Cloudflare Registrar ή papaki.gr) και
στο Cloudflare Pages → Custom domains → πρόσθεσέ το. SSL αυτόματο, δωρεάν.

## Πώς προσθέτεις νέο άρθρο

1. Αντίγραψε το `article-sample.html` → μετονόμασέ το π.χ. `article-2026-08-01.html`
2. Άλλαξε τίτλο, ημερομηνία, και τα δύο σώματα κειμένου (lang-en / lang-el)
3. Πρόσθεσε μια καταχώρηση στη λίστα του `articles.html` (αντίγραψε ένα υπάρχον `<div class="post">`)
4. Ανέβασε στο GitHub → live αυτόματα

Ή απλά στείλε μου το κείμενο και σου ετοιμάζω το αρχείο.

## Τι να αλλάξεις πριν το δημοσιεύσεις

- [ ] "Theodosios K." → πλήρες όνομα/brand (σε όλα τα αρχεία — βρες/αντικατέστησε)
- [ ] `contact@example.com` → πραγματικό email (σε όλα τα αρχεία)
- [ ] `YOUR_FORM_ID` στο services.html
- [ ] Κείμενο στο about.html — προσαρμογή στα μέτρα σου
- [ ] Τα δείγματα άρθρων — αντικατάσταση με πραγματικά
