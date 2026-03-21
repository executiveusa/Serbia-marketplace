(function(){
  const lang = localStorage.getItem('lang') || 'sr';
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.textContent = lang === 'sr' ? 'EN' : 'SR';
    btn.addEventListener('click', () => {
      const next = lang === 'sr' ? 'en' : 'sr';
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
      localStorage.setItem('userRole', role);
      localStorage.setItem('orgName', org || 'Nova Organizacija');
      location.href = role === 'grower' ? '/onboarding/grower/' : '/onboarding/buyer/';
    });
  }

  const onboard = document.querySelector('#onboardingForm');
  if (onboard) {
    onboard.addEventListener('submit', (e) => {
      e.preventDefault();
      localStorage.setItem('profileComplete', 'true');
      location.href = '/dashboard/';
    });
  }
})();
