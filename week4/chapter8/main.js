const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event){
    event.preventDefault();

    let isValidated = validate();
    if(isValidated){
        alert(isValidated);
    }else{
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
        hero.city = form.city.value;
        hero.origin = form.origin.value;
        
        alert(JSON.stringify(hero));
        return hero;
    }

    
}

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        
        return 'Your name is not allowed to start with X!';
    }else{
        return false;
    }

}
