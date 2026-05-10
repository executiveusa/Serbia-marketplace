export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(20,20,20,.5), rgba(20,20,20,.55)), url("https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="text-sm md:text-base font-medium mb-6 uppercase tracking-widest"
            style={{ color: '#dbcfbc' }}
          >
            Vojvodina • Novi Sad
          </p>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
            style={{ color: '#f8f5ef' }}
          >
            Povezujemo ozbiljne proizvođače iz Vojvodine sa restoranima u Novom Sadu.
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
            style={{ color: '#eee5d8' }}
          >
            Premium B2B mreža za ponavljajuću nabavku svežih namirnica: jasnoća ponude, proverljivi profili i manje haosa u sourcing procesu.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="/signup/"
              className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--forest)', background: '#2f4a34' }}
            >
              Za proizvođače
            </a>
            <a
              href="/signup/"
              className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #e9dfcf',
                color: '#f8f5ef',
              }}
            >
              Za restorane
            </a>
          </div>

          {/* Trust Bar */}
          <div
            className="flex flex-wrap gap-6 md:gap-8 pt-6 border-t"
            style={{
              borderColor: 'rgba(255,255,255,.35)',
              color: '#e6ddcf',
            }}
          >
            <span className="text-sm md:text-base font-medium">✔ Provereni profili</span>
            <span className="text-sm md:text-base font-medium">✔ Uparivanje sa objašnjenjem</span>
            <span className="text-sm md:text-base font-medium">✔ Interna B2B komunikacija</span>
          </div>
        </div>
      </div>
    </section>
  );
}
