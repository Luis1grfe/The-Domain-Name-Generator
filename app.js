let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domain =['.com','.cl','.us','.me','.co','.info'];
function generator(){
    
   var pronounAux = Math.floor(Math.random() * pronoun.length);
   var adjAux = Math.floor(Math.random() * adj.length);
   var nounAux = Math.floor(Math.random() * noun.length);
   var domainAux = Math.floor(Math.random() * domain.length);
   var print = console.log(pronoun[pronounAux]+adj[adjAux]+noun[nounAux]+domain[domainAux]);

   return print;
}
generator();