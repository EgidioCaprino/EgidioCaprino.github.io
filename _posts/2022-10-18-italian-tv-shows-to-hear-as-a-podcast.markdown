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

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().getDay();
    const yesterday = today > 0 ? (today - 1) : 6;
    const h3 = document.querySelector(`.day-${yesterday}`);
    h3.innerHTML = `👉 ${h3.innerHTML}`;
  });
</script>
