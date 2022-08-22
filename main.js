


console.log('Generate Random Deity');

//↓↓Factory Function Generates Deity↓↓\\
generateDeity = (name, age, align, type) => {
  return {
    name: name,
    age: age,
    align: align,
    type: type,
    description() {
      let message = `${this.name} the ${this.type} is a ${this.align} deity from the ${this.age}.`;
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
  const subType = ['Air ', 'Water ', 'Fire ', 'Earth ', 'Chaotic ', 'Cold ', 'Archon ', 'Angel ', 'Swarm ', 'Shapechanger ', 'Incoporeal '];
  const bodyType = ['Abberation', 'Beast', 'Celestial', 'Construct', 'Dragon', 'Elemental', 'Fey', 'Fiend', 'Giant', 'Plant', 'Undead'];
  let fullType = subType[Math.floor(Math.random()*subType.length)] + bodyType[Math.floor(Math.random()*bodyType.length)];
  return fullType;
}

let deity = generateDeity(nameGen(), ageGen(), alignGen(), typeGen()); //store new random deity object

//↓↓Create create an array of deity objects↓↓\\


//console.log(generateDeity(nameGen(), ageGen(), alignGen(), typeGen()));

console.log(deity);
console.log(deity.description());


