
console.log('Generate Random Deity');

//↓↓Factory Function Generates Deity↓↓\\
generateDeity = (name, age, align, type) => {
  return {
    name: name,
    title: titleGen(align),
    age: age,
    align: align,
    type: type,
    description() {
      let message = `${this.name} the ${this.title} is a ${this.align} ${this.type} from the ${this.age}.`;
      return message;
    }
  }
}

//↓↓Random Generator Functions For Factory Perameters↓↓\\
nameGen = () => {
  const nameStart = ['Var','Kreg', 'Drask', 'Bel', 'Ness', 'Hov', 'Olg', 'Zed', 'Demmu', 'Ammit', 'Ceph', 'Nef', 'Mal'];
  const nameEnd = ['ander', 'andra', 'mana', 'drani', 'rappan', 'pathi', 'ravas', 'sin', 'grey', 'knod', 'binn', 'lor'];
  let fullName = nameStart[Math.floor(Math.random()*nameStart.length)] + nameEnd[Math.floor(Math.random()*nameEnd.length)];
  return fullName;
}

titleGen = (alignment) => {
  const titleStart = 'Deity of ';
  const titleGood = ['Transition', 'Destinies', 'Salvation', 'Divine Retribution', 'Divine Punishment', 'Restoration', 'Sanctuary'];
  const titleNeutral = ['Storms', 'the Eclipse', 'Eternity', 'Seasons', 'Wealth and Prosperity'];
  const titleEvil = ['War and Power', 'Deception', 'Vengance', 'Carnage', 'Falsity', 'the Depths', 'Turmoil', 'Wrath'];
  let fullTitle = '';
   if (alignment === 'Lawful Good' || alignment === 'Neutral Good' || alignment === 'Chaotic Good') {
      fullTitle = titleStart + titleGood[Math.floor(Math.random()*titleGood.length)];
    } else if (alignment === 'Lawful Evil' || alignment === 'Neutral Evil' || alignment === 'Chaotic Evil') {
      fullTitle = titleStart + titleEvil[Math.floor(Math.random()*titleEvil.length)];
    } else {
      fullTitle = titleStart + titleNeutral[Math.floor(Math.random()*titleNeutral.length)];
    }
  return fullTitle;
}

ageGen = () => {
  const nameStart = ['Age of ', 'Era of ', 'Aeon of '];
  const nameEnd = ['Dreams', 'Growth', 'Blessings', 'Vitality', 'War', 'Rebirth', 'Heroes', 'Savagery', 'Perdition', 'Guidance', 'Strife', 'Shadows', 'Paradise', 'Glory', 'Chaos'];
  let fullAge = nameStart[Math.floor(Math.random()*nameStart.length)] + nameEnd[Math.floor(Math.random()*nameEnd.length)];
  return fullAge;
}

alignGen = () => {
  const alignStart = ['Lawful ', 'Neutral ', 'Chaotic ']; 
  const alignEnd = ['Good', 'Neutral', 'Evil'];
  let alignment = alignStart[Math.floor(Math.random()*alignStart.length)] + alignEnd[Math.floor(Math.random()*alignEnd.length)];
  if (alignment === 'Neutral Neutral') {alignment = 'True Neutral'};
  return alignment;
}

typeGen = () => {
  const subType = ['Air ', 'Water ', 'Fire ', 'Earth ', 'Chaos ', 'Cold ', 'Archon ', 'Angel ', 'Swarm ', 'Shapechanger ', 'Incoporeal '];
  const bodyType = ['Abberation', 'Beast', 'Celestial', 'Construct', 'Dragon', 'Elemental', 'Fey', 'Fiend', 'Giant', 'Plant', 'Undead'];
  let fullType = subType[Math.floor(Math.random()*subType.length)] + bodyType[Math.floor(Math.random()*bodyType.length)];
  return fullType;
}

let deity = generateDeity(nameGen(), ageGen(), alignGen(), typeGen()); //store new random deity object

console.log(deity);
console.log(deity.description());


//console.log(generateDeity(nameGen(), ageGen(), alignGen(), typeGen()));


