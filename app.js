const products = [
  ['Llavero España Campeones 2026','Llaveros',5,['llavero de españa/imagen1.jpeg','llavero de españa/imagen2.jpeg','llavero de españa/imagen3.jpeg'],'https://es.wallapop.com/item/llavero-espana-campeones-del-mundo-2026-1287892632'],
  ['Caja Cromos Mundial 2026 FIFA','Organización',5.5,['cromos mundial/imagen1.jpeg','cromos mundial/imagen2.jpeg','cromos mundial/imagen3.jpeg','cromos mundial/imagen4.jpeg'],'https://es.wallapop.com/item/caja-cromos-mundial-2026-fifa-1287888948'],
  ['Figura Yoshi 3D','Figuras',18,['yoshi/imagen1.jpeg','yoshi/imagen2.jpeg','yoshi/imagen3.jpeg','yoshi/imagen4.jpeg'],'https://es.wallapop.com/item/figura-yoshi-3d-1287869580'],
  ['Figura Deadpool 3D','Figuras',13,['deadpool/imagen1.jpeg','deadpool/imagen2.jpeg','deadpool/imagen3.jpeg','deadpool/imagen4.jpeg'],'https://es.wallapop.com/item/figura-deadpool-3d-1287477454'],
  ['Figura Vault-Tec Fallout 3D','Figuras',8,['figura vault tec fallout/imagen1.jpeg','figura vault tec fallout/imagen2.jpeg','figura vault tec fallout/imagen3.jpeg','figura vault tec fallout/imagen4.jpeg'],'https://es.wallapop.com/item/figura-vault-tec-fallout-3d-1288814699'],
  ['Figura Walter White 3D','Figuras',22,['figura walter white/imagen1.jpeg','figura walter white/imagen2.jpeg','figura walter white/imagen3.jpeg','figura walter white/imagen4.jpeg','figura walter white/imagen5.jpeg'],'https://es.wallapop.com/item/figura-walter-white-3d-1289190571'],
  ['Figura Doc Brown Regreso al Futuro','Figuras',25,['figura doc brown/imaen1.jpeg','figura doc brown/imagen2.jpeg','figura doc brown/imagen3.jpeg','figura doc brown/imagen4.jpeg'],'https://es.wallapop.com/item/figura-doc-brown-regreso-al-futuro-1289380629'],
  ['Figura Gengar Pokémon morado','Figuras',18,['Figura Gengar Pokémon Morado/imagen1.jpeg','Figura Gengar Pokémon Morado/imagen2.jpeg','Figura Gengar Pokémon Morado/imagen3.jpeg','Figura Gengar Pokémon Morado/imagen4.jpeg'],'https://es.wallapop.com/item/figura-gengar-pokemon-morado-1291614025'],
  ['Figura Charmeleon 20 cm','Figuras',20,['Figura Charmeleon/imagen1.jpeg','Figura Charmeleon/imagen2.jpeg','Figura Charmeleon/imagen3.jpeg','Figura Charmeleon/imagen4.jpeg'],'https://es.wallapop.com/item/figura-charmeleon-20cm-1293502309'],
  ['Árbol expositor de joyas','Organización',12,['arbol joyas/imagen1.jpeg','arbol joyas/imagen2.jpeg','arbol joyas/imagen3.jpeg'],'https://es.wallapop.com/item/arbol-expositor-de-joyas-1289470120'],
  ['Lámpara Marc Márquez 93','Decoración',15,['marquez/imagen1.jpeg','marquez/imagen2.jpeg','marquez/imagen3.jpeg','marquez/imagen4.jpeg'],'https://es.wallapop.com/item/lampara-marc-marquez-93-1287703048'],
  ['Calendario MotoGP 2026','Decoración',12.5,['MotoGP/imagen1.jpeg','MotoGP/imagen2.jpeg','MotoGP/imagen3.jpeg'],'https://es.wallapop.com/item/calendario-circuitos-motogp-2026-1287130788'],
  ['Soporte mando Bullet Bill','Accesorios',4.5,['bullet bill/imagen1.jpeg','bullet bill/imagen2.jpeg','bullet bill/imagen3.jpeg','bullet bill/imagen4.jpeg','bullet bill/imagen5.jpeg','bullet bill/imagen6.jpeg'],'https://es.wallapop.com/item/soporte-mando-bullet-bill-1287474873'],
  ['Llavero Snoopy enfermero','Llaveros',3,['snoopy enfermero/imagen1.jpeg','snoopy enfermero/imagen2.jpeg'],'https://es.wallapop.com/item/llavero-snoopy-enfermero-1288604428'],
  ['Llavero Pokéball','Llaveros',3,['llavero pokeball/imagen1.jpeg','llavero pokeball/imagen2.jpeg'],'https://es.wallapop.com/item/llavero-pokeball-1290503883'],
  ['Soporte mando PS5 Call of Duty Warzone','Accesorios',4.5,['mando call of duty/imagen1.jpeg','mando call of duty/imagen2.jpeg','mando call of duty/imagen3.jpeg','mando call of duty/imagen4.jpeg','mando call of duty/imagen5.jpeg'],'https://es.wallapop.com/item/soporte-mando-ps5-call-of-duty-warzone-1288603265'],
  ['Soporte mando Spiderman','Accesorios',5,['Soporte Mando Spiderman/imagen1.jpeg','Soporte Mando Spiderman/imagen2.jpeg','Soporte Mando Spiderman/imagen3.jpeg'],'https://es.wallapop.com/item/soporte-mando-spiderman-1291616887'],
  ['Soporte para mando y cascos inspirado en GTA VI','Accesorios',28,['Soporte para mando y cascos inspirado en GTA VI/imagen1.jpeg','Soporte para mando y cascos inspirado en GTA VI/imagen2.jpeg','Soporte para mando y cascos inspirado en GTA VI/imagen3.jpeg','Soporte para mando y cascos inspirado en GTA VI/imagen4.jpeg','Soporte para mando y cascos inspirado en GTA VI/imagen5.jpeg','Soporte para mando y cascos inspirado en GTA VI/imagen6.jpeg'],'https://es.wallapop.com/item/soporte-para-mando-y-cascos-inspirado-en-gta-vi-1291909825'],
  ['Soporte móvil/tablet minimalista','Accesorios',7,['soporte movil/imagen1.jpeg','soporte movil/imagen2.jpeg','soporte movil/imagen3.jpeg','soporte movil/imagen4.jpeg','soporte movil/imagen5.jpeg','soporte movil/imagen6.jpeg','soporte movil/imagen7.jpeg','soporte movil/imagen8.jpeg'],'https://es.wallapop.com/item/soporte-movil-tablet-minimalista-capa-a-capa-1290144171'],
  ['Soporte para juegos Nintendo Switch','Accesorios',7,['soporte  juegos nintendo/imagen1.jpeg','soporte  juegos nintendo/imagen2.jpeg','soporte  juegos nintendo/imagen3.jpeg','soporte  juegos nintendo/imagen4.jpeg'],'https://es.wallapop.com/item/soporte-para-juegos-nintendo-switch-1290489676'],
  ['Soporte para ordenador portátil','Accesorios',8,['soporte ordenador portátil/imagen1.jpeg','soporte ordenador portátil/imagen2.jpeg','soporte ordenador portátil/imagen3.jpeg','soporte ordenador portátil/imagen4.jpeg','soporte ordenador portátil/imagen5.jpeg','soporte ordenador portátil/imagen6.jpeg'],'https://es.wallapop.com/item/soporte-para-ordenador-portatil-1291609057'],
  ['Soporte mando PS5 personalizado','Personalizados','Precio a consultar',['personalizaciones/mando malaga paco/imagen1.jpeg','personalizaciones/mando malaga paco/imagen2.jpeg','personalizaciones/mando malaga paco/imagen3.jpeg','personalizaciones/mando malaga paco/imagen4.jpeg'],'https://es.wallapop.com/item/soporte-mando-ps5-personalizado-malaga-cf-1289709145'],
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
  grid.innerHTML = list.map(p => `<article class="product"><div class="product-media"><img src="${p.images[p.index]}" alt="${p.name}"><span class="tag">${p.category}</span>${p.images.length > 1 ? `<div class="gallery-controls"><button data-name="${p.name}" data-step="-1" aria-label="Foto anterior">‹</button><button data-name="${p.name}" data-step="1" aria-label="Foto siguiente">›</button></div>` : ''}</div><div class="product-body"><span class="product-category">Impresión 3D</span><h3>${p.name}</h3><div class="product-bottom"><span class="price">${p.price === null ? 'Ver precio en Wallapop' : typeof p.price === 'number' ? euro(p.price) : p.price}</span><a class="buy-wallapop" href="${p.url}" target="_blank" rel="noreferrer">${p.category === 'Personalizados' ? 'Ver ejemplo ↗' : 'Comprar en Wallapop ↗'}</a></div></div></article>`).join('');
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
