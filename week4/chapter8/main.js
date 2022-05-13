const form = document.forms['hero'];
// form.addEventListener('submit', makeHero, false);
form["heroName"].addEventListener('keyup', validateInline, false);

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
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

form.hero.Name.addEventListener('keyup',disableSumbit,false);