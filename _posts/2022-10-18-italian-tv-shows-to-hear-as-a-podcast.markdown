---
layout: post
title:  "List of some Italian TV shows to hear as a podcast"
---
<h3 class="day-1">Monday</h3>
- [Il cavallo e la torre](https://www.raiplay.it/programmi/ilcavalloelatorre)
- [L'aria che tira](https://www.la7.it/laria-che-tira)
- [Omnibus](https://www.la7.it/omnibus)
- [Otto e mezzo](https://www.la7.it/otto-e-mezzo)
- [Presadiretta](https://www.raiplay.it/programmi/presadiretta)

<h3 class="day-2">Tuesday</h3>
- [Cartabianca](https://www.raiplay.it/programmi/cartabianca)
- [Dimartedì](https://www.la7.it/dimartedi)
- [Il cavallo e la torre](https://www.raiplay.it/programmi/ilcavalloelatorre)
- [L'aria che tira](https://www.la7.it/laria-che-tira)
- [Omnibus](https://www.la7.it/omnibus)
- [Otto e mezzo](https://www.la7.it/otto-e-mezzo)

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().getDay();
    const yesterday = today > 0 ? (today - 1) : 6;
    const h3 = document.querySelector(`.day-${yesterday}`);
    h3.innerHTML = `👉 ${h3.innerHTML}`;
  });
</script>
