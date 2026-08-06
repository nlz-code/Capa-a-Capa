const products = [
  ['Llavero España Campeones 2026','Llaveros',5,['llavero de españa/imagen1.jpeg','llavero de españa/imagen2.jpeg','llavero de españa/imagen3.jpeg'],'https://es.wallapop.com/item/llavero-espana-campeones-del-mundo-2026-1287892632'],
  ['Caja Cromos Mundial 2026 FIFA','Organización',5.5,['cromos mundial/imagen1.jpeg','cromos mundial/imagen2.jpeg','cromos mundial/imagen3.jpeg','cromos mundial/imagen4.jpeg'],'https://es.wallapop.com/item/caja-cromos-mundial-2026-fifa-1287888948'],
  ['Figura Yoshi 3D','Figuras',18,['yoshi/imagen1.jpeg','yoshi/imagen2.jpeg','yoshi/imagen3.jpeg','yoshi/imagen4.jpeg'],'https://es.wallapop.com/item/figura-yoshi-3d-1287869580'],
  ['Figura Deadpool 3D','Figuras',13,['deadpool/imagen1.jpeg','deadpool/imagen2.jpeg','deadpool/imagen3.jpeg','deadpool/imagen4.jpeg'],'https://es.wallapop.com/item/figura-deadpool-3d-1287477454'],
  ['Lámpara Marc Márquez 93','Decoración',15,['marquez/imagen1.jpeg','marquez/imagen2.jpeg','marquez/imagen3.jpeg','marquez/imagen4.jpeg'],'https://es.wallapop.com/item/lampara-marc-marquez-93-1287703048'],
  ['Calendario MotoGP 2026','Decoración',12.5,['MotoGP/imagen1.jpeg','MotoGP/imagen2.jpeg','MotoGP/imagen3.jpeg'],'https://es.wallapop.com/item/calendario-circuitos-motogp-2026-1287130788'],
  ['Soporte mando Bullet Bill','Accesorios',4.5,['bullet bill/imagen1.jpeg','bullet bill/imagen2.jpeg','bullet bill/imagen3.jpeg','bullet bill/imagen4.jpeg','bullet bill/imagen5.jpeg','bullet bill/imagen6.jpeg'],'https://es.wallapop.com/item/soporte-mando-bullet-bill-1287474873'],
  ['Llavero Snoopy enfermero','Llaveros',3,['snoopy enfermero/imagen1.jpeg','snoopy enfermero/imagen2.jpeg'],'https://es.wallapop.com/item/llavero-snoopy-enfermero-1288604428'],
  ['Soporte mando PS5 Call of Duty Warzone','Accesorios',4.5,['mando call of duty/imagen1.jpeg','mando call of duty/imagen2.jpeg','mando call of duty/imagen3.jpeg','mando call of duty/imagen4.jpeg','mando call of duty/imagen5.jpeg'],'https://es.wallapop.com/item/soporte-mando-ps5-call-of-duty-warzone-1288603265'],
  ['Soporte mando Pokéball','Accesorios',4,['pokeball/imagen1.jpeg','pokeball/imagen2.jpeg','pokeball/imagen3.jpeg','pokeball/imagen4.jpeg','pokeball/imagen5.jpeg'],'https://es.wallapop.com/item/soporte-mando-pokeball-1287474874']
].map(([name, category, price, images, url]) => ({ name, category, price, images, url, index: 0 }));

const euro = n => n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
const grid = document.querySelector('#product-grid');
const filters = document.querySelector('#filters');
const search = document.querySelector('#search');
let category = 'Todo';

function renderFilters() {
  filters.innerHTML = ['Todo', ...new Set(products.map(p => p.category))]
    .map(c => `<button class="filter ${c === category ? 'active' : ''}" data-category="${c}">${c}</button>`).join('');
}

function render() {
  const list = products.filter(p => (category === 'Todo' || p.category === category) && p.name.toLowerCase().includes(search.value.toLowerCase()));
  document.querySelector('#product-total').textContent = `${list.length} ${list.length === 1 ? 'pieza' : 'piezas'} disponibles`;
  grid.innerHTML = list.map(p => `<article class="product"><div class="product-media"><img src="${p.images[p.index]}" alt="${p.name}"><span class="tag">${p.category}</span>${p.images.length > 1 ? `<div class="gallery-controls"><button data-name="${p.name}" data-step="-1" aria-label="Foto anterior">‹</button><button data-name="${p.name}" data-step="1" aria-label="Foto siguiente">›</button></div>` : ''}</div><div class="product-body"><span class="product-category">Impresión 3D</span><h3>${p.name}</h3><div class="product-bottom"><span class="price">${p.price === null ? 'Ver precio en Wallapop' : euro(p.price)}</span><a class="buy-wallapop" href="${p.url}" target="_blank" rel="noreferrer">Comprar en Wallapop ↗</a></div></div></article>`).join('');
  document.querySelector('#empty-state').hidden = Boolean(list.length);
}

document.addEventListener('click', e => {
  if (e.target.dataset.category) { category = e.target.dataset.category; renderFilters(); render(); }
  if (e.target.dataset.name) {
    const p = products.find(x => x.name === e.target.dataset.name);
    p.index = (p.index + Number(e.target.dataset.step) + p.images.length) % p.images.length;
    render();
  }
});
search.addEventListener('input', render);
renderFilters();
render();
