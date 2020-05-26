let info1 = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    chave: "Sim",
  };

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    chave: "Sim",
  };

  for(let item in info1){
      if (info1[item] == "Sim" && info2[item] == "Sim"){
          console.log("Ambos recorrentes")
      } else console.log(info1[item]," e ",info2[item])
  } 
  
