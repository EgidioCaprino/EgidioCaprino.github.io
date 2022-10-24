---
layout: post
title:  "List of some Italian TV shows to hear as a podcast"
---
<h3 class="day-1">Monday</h3>
- [Coffee break](https://www.la7.it/coffee-break)
- [Il cavallo e la torre](https://www.raiplay.it/programmi/ilcavalloelatorre)
- [L'aria che tira](https://www.la7.it/laria-che-tira)
- [Omnibus](https://www.la7.it/omnibus)
- [Otto e mezzo](https://www.la7.it/otto-e-mezzo)
- [Presadiretta](https://www.raiplay.it/programmi/presadiretta)

<h3 class="day-2">Tuesday</h3>
- [Cartabianca](https://www.raiplay.it/programmi/cartabianca)
- [Coffee break](https://www.la7.it/coffee-break)
- [Dimartedì](https://www.la7.it/dimartedi)
- [Il cavallo e la torre](https://www.raiplay.it/programmi/ilcavalloelatorre)
- [L'aria che tira](https://www.la7.it/laria-che-tira)
- [Omnibus](https://www.la7.it/omnibus)
- [Otto e mezzo](https://www.la7.it/otto-e-mezzo)
- [Porta a porta](https://www.raiplay.it/programmi/portaaporta)

<h3 class="day-3">Wednesday</h3>
- [Coffee break](https://www.la7.it/coffee-break)
- [Il cavallo e la torre](https://www.raiplay.it/programmi/ilcavalloelatorre)
- [L'aria che tira](https://www.la7.it/laria-che-tira)
- [Omnibus](https://www.la7.it/omnibus)
- [Otto e mezzo](https://www.la7.it/otto-e-mezzo)
- [Una giornata particolare](https://www.la7.it/una-giornata-particolare)

<h3 class="day-4">Thursday</h3>
- [Coffee break](https://www.la7.it/coffee-break)
- [Il cavallo e la torre](https://www.raiplay.it/programmi/ilcavalloelatorre)
- [L'aria che tira](https://www.la7.it/laria-che-tira)
- [Omnibus](https://www.la7.it/omnibus)
- [Otto e mezzo](https://www.la7.it/otto-e-mezzo)
- [Piazza Pulita](https://www.la7.it/piazzapulita)

<h3 class="day-5">Friday</h3>
- [Coffee break](https://www.la7.it/coffee-break)
- [Il cavallo e la torre](https://www.raiplay.it/programmi/ilcavalloelatorre)
- [L'aria che tira](https://www.la7.it/laria-che-tira)
- [Omnibus](https://www.la7.it/omnibus)
- [Otto e mezzo](https://www.la7.it/otto-e-mezzo)
- [Accordi e Disaccordi](https://www.discoveryplus.com/it/show/accordi-e-disaccordi)

<h3 class="day-6">Saturday</h3>
- [In Onda](https://www.la7.it/in-onda)

<h3 class="day-0">Sunday</h3>
- [In Onda](https://www.la7.it/in-onda)
- [Non è l'arena](https://www.la7.it/nonelarena)

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().getDay();
    const yesterday = today > 0 ? (today - 1) : 6;
    const h3 = document.querySelector(`.day-${yesterday}`);
    h3.innerHTML = `👉 ${h3.innerHTML}`;
  });
</script>
