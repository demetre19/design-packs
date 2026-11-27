/*
  SAMPLE operational records for content sections, cards and UI atoms. Everything here is invented design content
  that illustrates the shape of real records (sites, visits, checklists, products, rosters). Replace with client data.
*/

export const sites = [
  { id: "WC-0412", name: "Level 4, 80 Market St", suburb: "South Melbourne", type: "Office", people: 42, days: ["Mon", "Wed", "Fri"], team: ["Rosa M.", "Tuan N."], since: "Mar 2023" },
  { id: "WC-0388", name: "Harbour clinic, rooms 1 to 6", suburb: "Richmond", type: "Medical", people: 18, days: ["Mon", "Tue", "Wed", "Thu", "Fri"], team: ["Priya K."], since: "Aug 2022" },
  { id: "WC-0451", name: "Little Acorns early learning", suburb: "Brunswick", type: "Childcare", people: 60, days: ["Mon", "Tue", "Wed", "Thu", "Fri"], team: ["Samir A.", "Lena W."], since: "Jan 2024" },
  { id: "WC-0467", name: "Studio floor, 12 Gwynne St", suburb: "Cremorne", type: "Office", people: 24, days: ["Tue", "Thu"], team: ["Rosa M."], since: "Jun 2025" },
];

export const checklist = [
  { zone: "Entry and reception", items: ["Glass doors, both faces", "Reception desk, cleared surfaces only", "Mat vacuumed and lifted"], time: "18:42" },
  { zone: "Open-plan floor", items: ["Desks wiped around work left out", "Bins emptied, liners replaced", "Carpet vacuumed edge to edge"], time: "19:15" },
  { zone: "Kitchenette", items: ["Sink and taps descaled", "Benches and splashback", "Appliance fronts and handles"], time: "20:02" },
  { zone: "Bathrooms", items: ["Basins, mirrors, fittings", "Toilets disinfected, inside and out", "Consumables restocked"], time: "20:38" },
  { zone: "Touchpoints", items: ["Door handles and push plates", "Light switches and lift buttons", "Keypads and shared phones"], time: "21:05" },
];

export const products = [
  { code: "EUC-01", name: "Surface cleaner", base: "Eucalyptus oil", dilution: "1:40", use: "Desks, benches, fronts", sds: "SDS-2026-014" },
  { code: "EUC-02", name: "Glass and mirror", base: "Eucalyptus oil", dilution: "1:20", use: "Glass, partitions, mirrors", sds: "SDS-2026-015" },
  { code: "CIT-04", name: "Washroom descaler", base: "Citric acid", dilution: "1:10", use: "Basins, taps, tiles", sds: "SDS-2026-021" },
  { code: "EUC-07", name: "Floor concentrate", base: "Eucalyptus oil", dilution: "1:80", use: "Hard floors", sds: "SDS-2026-018" },
];

export const visits = [
  { date: "Mon 24 Nov", site: "WC-0412", in: "18:30", out: "21:12", done: 42, of: 42, by: "RM", tree: "T-04218" },
  { date: "Wed 26 Nov", site: "WC-0412", in: "18:34", out: "21:09", done: 41, of: 42, by: "TN", tree: "T-04231", note: "Kitchen bin liner stock low; two left in cupboard." },
  { date: "Fri 28 Nov", site: "WC-0412", in: "18:29", out: "21:20", done: 42, of: 42, by: "RM", tree: "T-04247" },
];

export const cleaners = [
  { name: "Rosa M.", since: 2017, languages: ["English", "Spanish"], sites: 6, seed: "wc-rosa" },
  { name: "Tuan N.", since: 2020, languages: ["English", "Vietnamese"], sites: 4, seed: "wc-tuan" },
  { name: "Priya K.", since: 2019, languages: ["English", "Tamil"], sites: 5, seed: "wc-priya" },
];
