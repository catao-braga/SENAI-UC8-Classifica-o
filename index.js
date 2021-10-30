let alunos = ["Appu", "Guilherme", "Gabriel", "João", "José"];
let obj_a = [];
let out = [];

let construct = (nome, nota) => {
  return {
    nome: nome,
    nota: nota,
  };
};

for (names of alunos) {
  obj_a.push(construct(names, Math.round(Math.random() * 10)));  
}



for (objs of obj_a)
{
    out.push((objs.nota));
}

console.log(obj_a)
console.log(out);
console.log(out.sort((a, b) => b -a));