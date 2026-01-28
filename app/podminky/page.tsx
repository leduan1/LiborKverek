import Header from '@/app/components/Header'

export const metadata = {
  title: 'Smluvní podmínky a ochrana osobních údajů | Libor Kverek',
  description: 'Smluvní podmínky a zásady ochrany osobních údajů (GDPR) pro služby Libora Kverka.',
}

export default function PodminkyPage() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
            Smluvní podmínky a zásady ochrany osobních údajů
          </h1>

          {/* Smluvní podmínky */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Smluvní podmínky
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Úvodní ustanovení</h3>
                <p>
                  Tyto smluvní podmínky upravují práva a povinnosti mezi poskytovatelem služeb Liborem Kverkem, IČO: [doplnit],
                  se sídlem [doplnit adresu] (dále jen &quot;Poskytovatel&quot;) a klientem (dále jen &quot;Klient&quot;), který využívá
                  služby online coachingu, jídelníčků a tréninkových plánů.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Předmět služeb</h3>
                <p className="mb-3">Poskytovatel nabízí následující služby:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Online coaching včetně jídelníčku, tréninkového plánu a pravidelných kontrol</li>
                  <li>Individuální jídelníček na míru</li>
                  <li>Individuální tréninkový plán na míru</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Uzavření smlouvy</h3>
                <p>
                  Smlouva mezi Poskytovatelem a Klientem je uzavřena odesláním vyplněného kontaktního formuláře
                  a následným potvrzením ze strany Poskytovatele. Odesláním formuláře Klient potvrzuje, že se
                  seznámil s těmito smluvními podmínkami a souhlasí s nimi.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Cena a platební podmínky</h3>
                <p className="mb-3">
                  Ceny služeb jsou uvedeny na webových stránkách Poskytovatele. Platba probíhá měsíčně předem
                  na základě vystavené faktury. Poskytovatel si vyhrazuje právo na změnu cen, přičemž stávající
                  Klienti budou o změně informováni minimálně 30 dní předem.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Práva a povinnosti Klienta</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Klient je povinen poskytnout pravdivé a úplné informace o svém zdravotním stavu</li>
                  <li>Klient je povinen informovat Poskytovatele o jakýchkoli zdravotních omezeních nebo změnách</li>
                  <li>Klient je povinen dodržovat doporučení Poskytovatele a aktivně komunikovat</li>
                  <li>Klient nesmí sdílet obdržené materiály s třetími osobami</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6. Práva a povinnosti Poskytovatele</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Poskytovatel se zavazuje poskytnout služby v dohodnutém rozsahu a kvalitě</li>
                  <li>Poskytovatel je povinen reagovat na dotazy Klienta v přiměřené lhůtě</li>
                  <li>Poskytovatel je povinen chránit osobní údaje Klienta v souladu s GDPR</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">7. Odpovědnost a zdravotní upozornění</h3>
                <p>
                  Poskytované služby mají informativní a edukativní charakter a nenahrazují lékařskou péči.
                  Klient je povinen před zahájením jakéhokoli cvičebního nebo stravovacího programu konzultovat
                  svůj zdravotní stav s lékařem. Poskytovatel nenese odpovědnost za případné zdravotní komplikace
                  vzniklé v důsledku nedodržení doporučení nebo zatajení zdravotních informací.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">8. Ukončení spolupráce</h3>
                <p>
                  Obě strany mohou spolupráci ukončit písemným oznámením. V případě ukončení ze strany Klienta
                  během probíhajícího měsíce nemá Klient nárok na vrácení již uhrazené částky za daný měsíc.
                  Poskytovatel si vyhrazuje právo ukončit spolupráci v případě závažného porušení těchto podmínek.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">9. Závěrečná ustanovení</h3>
                <p>
                  Tyto smluvní podmínky jsou platné a účinné od jejich zveřejnění na webových stránkách.
                  Poskytovatel si vyhrazuje právo tyto podmínky jednostranně měnit. Právní vztahy neupravené
                  těmito podmínkami se řídí právním řádem České republiky.
                </p>
              </div>
            </div>
          </section>

          {/* Zásady ochrany osobních údajů */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Zásady ochrany osobních údajů (GDPR)
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Správce osobních údajů</h3>
                <p>
                  Správcem osobních údajů je Libor Kverek, IČO: [doplnit], se sídlem [doplnit adresu],
                  e-mail: [doplnit e-mail] (dále jen &quot;Správce&quot;).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Rozsah zpracovávaných údajů</h3>
                <p className="mb-3">Správce zpracovává následující osobní údaje:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Identifikační údaje:</strong> jméno, příjmení, věk</li>
                  <li><strong>Kontaktní údaje:</strong> e-mailová adresa, telefonní číslo</li>
                  <li><strong>Údaje o zdravotním stavu:</strong> výška, hmotnost, zdravotní omezení, cíle (pouze se souhlasem)</li>
                  <li><strong>Údaje o spolupráci:</strong> vybraná služba, délka spolupráce, komunikace</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Účel zpracování</h3>
                <p className="mb-3">Osobní údaje jsou zpracovávány za těmito účely:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Poskytování objednaných služeb (právní základ: plnění smlouvy)</li>
                  <li>Komunikace s Klientem (právní základ: plnění smlouvy)</li>
                  <li>Vytvoření individuálního plánu (právní základ: souhlas)</li>
                  <li>Plnění zákonných povinností, např. účetnictví (právní základ: zákonná povinnost)</li>
                  <li>Zasílání obchodních sdělení (právní základ: souhlas nebo oprávněný zájem)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Doba uchování údajů</h3>
                <p>
                  Osobní údaje jsou uchovávány po dobu trvání spolupráce a následně po dobu nezbytnou
                  pro plnění zákonných povinností (zejména účetní a daňové předpisy - 10 let).
                  Údaje zpracovávané na základě souhlasu jsou uchovávány do odvolání souhlasu.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Příjemci osobních údajů</h3>
                <p className="mb-3">Osobní údaje mohou být předány:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Poskytovatelům IT služeb a hostingu</li>
                  <li>Účetním a daňovým poradcům</li>
                  <li>Orgánům státní správy v zákonem stanovených případech</li>
                </ul>
                <p className="mt-3">
                  Osobní údaje nejsou předávány do třetích zemí mimo EU/EHP.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6. Práva subjektu údajů</h3>
                <p className="mb-3">Jako subjekt údajů máte právo:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Právo na přístup:</strong> získat informace o zpracování vašich údajů</li>
                  <li><strong>Právo na opravu:</strong> požádat o opravu nepřesných údajů</li>
                  <li><strong>Právo na výmaz:</strong> požádat o smazání údajů (&quot;právo být zapomenut&quot;)</li>
                  <li><strong>Právo na omezení zpracování:</strong> požádat o omezení zpracování</li>
                  <li><strong>Právo na přenositelnost:</strong> získat údaje ve strukturovaném formátu</li>
                  <li><strong>Právo vznést námitku:</strong> proti zpracování založeném na oprávněném zájmu</li>
                  <li><strong>Právo odvolat souhlas:</strong> kdykoli odvolat udělený souhlas</li>
                  <li><strong>Právo podat stížnost:</strong> u Úřadu pro ochranu osobních údajů (www.uoou.cz)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">7. Zabezpečení údajů</h3>
                <p>
                  Správce přijal vhodná technická a organizační opatření k zajištění ochrany osobních údajů
                  před neoprávněným přístupem, změnou, ztrátou nebo zničením. Přístup k osobním údajům
                  mají pouze oprávněné osoby vázané povinností mlčenlivosti.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">8. Cookies</h3>
                <p>
                  Webové stránky používají cookies pro zajištění základní funkčnosti a analýzu návštěvnosti.
                  Více informací o používání cookies a možnostech jejich nastavení naleznete v nastavení
                  vašeho prohlížeče.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">9. Kontakt</h3>
                <p>
                  V případě jakýchkoli dotazů ohledně zpracování osobních údajů nebo pro uplatnění vašich
                  práv nás kontaktujte na e-mailové adrese: [doplnit e-mail].
                </p>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Tyto zásady ochrany osobních údajů jsou platné a účinné od [doplnit datum].
                  <br />
                  Poslední aktualizace: [doplnit datum]
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
