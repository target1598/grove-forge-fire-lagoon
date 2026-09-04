export const COMPANY = {
  nameHe: "טרגט מוטורס",
  nameEn: "Target Motors",
  legalHe: "טרגט מוטורס מ.ר 2016 בע״מ",
  phoneDisplay: "077-8053655",
  phoneTel: "tel:0778053655",
  whatsapp: "972778053655",
  addressHe: "ירמיהו 68, ירושלים",
  addressEn: "68 Yirmiyahu St, Jerusalem",
  hoursHe: "א׳–ה׳ 9:30–18:30 · ו׳ 9:30–11:20",
  hoursEn: "Sun–Thu 9:30–18:30 · Fri 9:30–11:20",
  instagram: "https://www.instagram.com/targetmotors_cars/",
  facebook: "https://www.facebook.com/TargetMotors/",
  maps: "https://maps.google.com/?q=Yirmiyahu+68+Jerusalem",
};

export function whatsappHref(text: string) {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
}
