(() => {
  const links = {
    llavero: 'https://es.wallapop.com/item/llavero-espana-campeones-del-mundo-2026-1287892632',
    cromos: 'https://es.wallapop.com/item/caja-cromos-mundial-2026-fifa-1287888948',
    yoshi: 'https://es.wallapop.com/item/figura-yoshi-3d-1287869580',
    deadpool: 'https://es.wallapop.com/item/figura-deadpool-3d-1287477454',
    marquez: 'https://es.wallapop.com/item/lampara-marc-marquez-93-1287703048',
    motogp: 'https://es.wallapop.com/item/calendario-circuitos-motogp-2026-1287130788',
    bullet: 'https://es.wallapop.com/item/soporte-mando-bullet-bill-1287474873',
    pokeball: 'https://es.wallapop.com/item/soporte-mando-pokeball-1287474874'
  };
  const names = {
    llavero: 'Llavero España Campeones 2026', cromos: 'Caja Cromos Mundial 2026 FIFA',
    yoshi: 'Figura Yoshi 3D', deadpool: 'Figura Deadpool 3D', marquez: 'Lámpara Marc Márquez 93',
    motogp: 'Calendario MotoGP 2026', bullet: 'Soporte mando Bullet Bill', pokeball: 'Soporte mando Pokéball'
  };
  const idFromName = name => Object.keys(names).find(id => names[id] === name);
  const decorate = () => document.querySelectorAll('.product').forEach(card => {
    if (card.querySelector('.wallapop-link')) return;
    const id = idFromName(card.querySelector('h3')?.textContent);
    if (!id) return;
    const link = document.createElement('a');
    link.className = 'wallapop-link';
    link.href = links[id];
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = 'Comprar en Wallapop ↗';
    link.setAttribute('aria-label', `Comprar ${names[id]} en Wallapop`);
    card.querySelector('.product-bottom').insertBefore(link, card.querySelector('.quick-add'));
  });
  const style = document.createElement('style');
  style.textContent = '.wallapop-link{color:#172033;font-size:11px;font-weight:700;text-decoration:none;border-bottom:1px solid #172033;padding-bottom:2px}.wallapop-link:hover{color:#ed6c4b;border-color:#ed6c4b}.product-bottom{gap:8px}.quick-add{flex:0 0 auto}';
  document.head.append(style);
  decorate();
  new MutationObserver(decorate).observe(document.querySelector('#product-grid'), {childList:true,subtree:true});
})();
