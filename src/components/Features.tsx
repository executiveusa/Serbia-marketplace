export default function Features() {
  return (
    <section className="py-16 md:py-24" style={{ background: 'var(--surface)' }}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <h2
          className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center"
          style={{ color: 'var(--text)' }}
        >
          Kako radi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Card 1 */}
          <article
            className="p-6 md:p-8 rounded-xl border"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--line)',
            }}
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
              1. Kreirajte profil
            </h3>
            <p style={{ color: 'var(--muted)' }}>
              Izaberite ulogu, organizaciju i ključne podatke.
            </p>
          </article>

          {/* Card 2 */}
          <article
            className="p-6 md:p-8 rounded-xl border"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--line)',
            }}
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
              2. Objavite ponudu ili zahtev
            </h3>
            <p style={{ color: 'var(--muted)' }}>
              Sezonalnost, količina, dinamika isporuke i varijetet.
            </p>
          </article>

          {/* Card 3 */}
          <article
            className="p-6 md:p-8 rounded-xl border"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--line)',
            }}
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>
              3. Uparite se i komunicirajte
            </h3>
            <p style={{ color: 'var(--muted)' }}>
              Dobijate rangirana uparivanja i poruke u aplikaciji.
            </p>
          </article>
        </div>

        <p
          className="text-center text-sm font-medium"
          style={{ color: 'var(--muted)' }}
        >
          MVP sa fokusom na poverenje i operativnu jednostavnost.
        </p>
      </div>
    </section>
  );
}
