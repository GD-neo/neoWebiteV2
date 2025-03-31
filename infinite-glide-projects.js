document.addEventListener("DOMContentLoaded", function () {
  // Company names (unchanged)
  const allCompanies = [
    "ABZ Mellendorf",
    "Alpenhof Murnau, Murnau am Staffelsee",
    "Ambassador Frankfurt",
    "Ambassador München",
    "Amedia Hamburg",
    "Ascot Zürich",
    "Ballhaus München",
    "Bavaria Towers München",
    "Best Western Plus Hotel Bremerhaven",
    "Best Western Polisina Ochsenfurt",
    "Burgklause Hotel Fehmarn",
    "Capri by Fraser Frankfurt",
    "Château de Vignée Belgien",
    "Citadines City Centre Frankfurt",
    "Citadines Hamburg",
    "Comfort Hotel Monheim",
    "Concorde Opéra Paris",
    "Daimler Sindelfingen",
    "Das Rheinische Quartier Elsdorf",
    "Derag Livinghotel De Medici Düsseldorf",
    "Dormero Stuttgart",
    "Europäischer Hof Hamburg",
    "Golf Resort Budersand Sylt",
    "Golden Tulip Berlin",
    "Grand City Hotel Duisburg",
    "Grand City Hotel Hamburg",
    "GHotel Hannover",
    "GHotel Koblenz",
    "Gut Kump Hamm",
    "Humboldt-Institut Berlin",
    "IG Metall Bildungszentrum Sprockhövel",
    "Innside by Mélia Düsseldorf",
    "Kempinski Grand Hotel des Bains St. Moritz",
    "Hotel am Konzerthaus Wien",
    "Lanser Hof Tegernsee",
    "Lindenhof Fehmarn",
    "Lindner Park Hotel Hagenbeck Hamburg",
    "Le Méridien Grand Hotel Nürnberg",
    "Lindner Congress Hotel",
    "LVR-Klinikum Köln-Merheim",
    "LVR-Klinik Forensik Köln",
    "Main-Arkaden Frankfurt",
    "Marriott Hamburg",
    "Marriott Zürich",
    "Mars Confectionery Viersen",
    "Mercure Leipzig",
    "Mercure Salzburg",
    "Mercure Bristol Sindelfingen",
    "Mercure Orbis Perlach",
    "Motel One Dresden",
    "Motel One Düsseldorf",
    "Motel One Köln",
    "Motel One Wien",
    "New Wave Hotel Nordeney",
    "NIU Hotel Hamburg",
    "Novotel Frankfurt",
    "Novotel Krefeld",
    "Park Inn Köln",
    "Pentahotel Brüssel",
    "Pentahotel Liège",
    "Pentahotel Paris",
    "Pentahotel Prag",
    "Pentahotel Trier",
    "Pentahotel Wiesbaden",
    "Polaroid Film Monheim",
    "Pullman München",
    "Räterpark München",
    "Radison Blu Baden Baden",
    "Reichshof Hamburg Renaissance",
    "Hotel Zürich",
    "Ritter Hotel Durbach",
    "Robinson Hotel Kleinarl",
    "Österreich Ruhrturm Essen",
    "Scandic Hotel Frankfurt",
    "Scandic Hotel München",
    "Schloss Kranichstein Darmstadt",
    "Sheraton Essen",
    "Stage 47 Hotel Essen",
    "Steigenberger Airport Hotel Berlin",
    "Steigenberger Berlin",
    "Steigenberger Duisburger Hof",
    "Steigenberger Intercity Hotel Berlin",
    "Steigenberger Intercity Hotel Bonn",
    "Steigenberger Airport Hotel Frankfurt",
    "Swissotel Zürich",
    "The Garden Berlin",
    "The Westin Grand München",
    "Thomaskirchhof Hotel Leipzig",
    "Upstalsboom Parkhotel Emden",
    "Upstalsboom Hotel Seebad Heringsdorf",
    "Walhalla Hotel Zürich",
    "Weisses Kreuz Hotel Innsbruck",
    "Harzresort Torfhaus",
    "Hotel Kurhaus Wyk auf Föhr",
    "Hotel TUI Blue Sylt",
  ].sort();

  // Split into 5 rows
  const companies1 = allCompanies.slice(0, 19);
  const companies2 = allCompanies.slice(19, 38);
  const companies3 = allCompanies.slice(38, 57);
  const companies4 = allCompanies.slice(57, 76);
  const companies5 = allCompanies.slice(76, 92);

  // Function to populate and duplicate items
  function populateRow(rowId, companies) {
    const row = document.getElementById(rowId);
    const items = companies
      .map((company) => `<span class="scroll-item">${company}</span>`)
      .join("");
    row.innerHTML = items + items; // Explicitly duplicate for seamless loop
    // Force reflow to ensure animation starts
    void row.offsetWidth;
  }

  // Populate all rows
  populateRow("row1", companies1);
  populateRow("row2", companies2);
  populateRow("row3", companies3);
  populateRow("row4", companies4);
  populateRow("row5", companies5);
});
