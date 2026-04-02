(function () {
  function getCurrentLang() {
    const htmlLang = (document.documentElement.lang || '').trim().toLowerCase();
    if (htmlLang === 'sr' || htmlLang === 'en') return htmlLang;

    const path = (location.pathname || '').toLowerCase();
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/sr')) return 'sr';

    const saved = localStorage.getItem('lang');
    return saved === 'en' ? 'en' : 'sr';
  }

  const currentLang = getCurrentLang();
  localStorage.setItem('lang', currentLang);

  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    const next = currentLang === 'sr' ? 'en' : 'sr';
    btn.textContent = next.toUpperCase();
    btn.setAttribute('aria-label', next === 'sr' ? 'Prebaci na srpski' : 'Switch to English');

    btn.addEventListener('click', () => {
      localStorage.setItem('lang', next);
      location.href = next === 'sr' ? '/sr/' : '/en/';
    });
  });

  const authForm = document.querySelector('#authForm');
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const role = document.querySelector('#role').value;
      const org = document.querySelector('#org').value;
      sessionStorage.setItem('userRole', role);
      sessionStorage.setItem('orgName', org || 'Nova Organizacija');
      location.href = role === 'grower' ? '/onboarding/grower/' : '/onboarding/buyer/';
    });
  }

  const onboard = document.querySelector('#onboardingForm');
  if (onboard) {
    onboard.addEventListener('submit', (e) => {
      e.preventDefault();
      sessionStorage.setItem('profileComplete', 'true');
      location.href = '/dashboard/';
    });
  }
})();
