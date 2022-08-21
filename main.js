console.log('Generate Random Deity');

//↓↓Factory Function Generates Deity↓↓\\
generateDeity = (name, age, align, type) => {
  return {
    name: name,
    age: age,
    align: align,
    type: type,
  }
}

nameGen = () => {
  let fullName = "";
  const nameStart = ['Var','Kreg', 'Drask', 'Bel', 'Ness', 'Hov', 'Olg', 'Zed', 'Demmu', 'Ammit', 'Ceph', 'Nef', 'Mal'];
  const nameEnd = ['ander', 'andra', 'mana', 'drani', 'rappan', 'pathi', 'ravas', 'sin', 'grey', 'knod', 'binn', 'lor'];
  fullName = nameStart[Math.floor(Math.random()*nameStart.length)] + nameEnd[Math.floor(Math.random()*nameEnd.length)];
  return fullName;
}



console.log(generateDeity(nameGen(), 1, 'neutral', 'dragon'));