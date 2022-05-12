const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event){
    event.preventDefault();

    const hero = {hero: form.heroName.value, realName: form.realName.value};
    
    hero.powers = [];
    for (let i = 0; i < form.powers.length; i++){
        let power = form.powers[i];
        if (power.checked){
            hero.powers.push(power.value);
        }
    }

    hero.category = form.category.value;
    hero.age = form.age.value;
    
    alert(JSON.stringify(hero));
    return hero;
}