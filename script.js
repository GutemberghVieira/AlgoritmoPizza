
alert("Olá futuro desenvolvedor, sabemos que o Algoritmo e a lógica de programação são um tanto difíceis, por isso desenvolvi um pequeno programa que vai ajuda-lo a entender melhor as sequencias finitas de passos de algoritmos e a lógica de programação que são as regras que o software segue!");

alert("Você quer comprar uma pizza para você e mais 6 amigos e precisa reparti-la em partes iguais para todos");

alert('O entregador chegou vá recebe-lo');

alert("Olá senhor aqui está sua pizza, são 10R$");

alert("Pague o entregador");

const pague = Number(prompt("."));

if(pague >= 10){

if(pague === 10)
{
alert(`Você deu ${pague}R$  não recebe troco ${pague - 10}R$`);
}
else 
{
alert(`Você deu ${pague}R$ recebe ${pague - 10}R$ de troco`);    
}

alert("A Pizza foi comprada"); 
alert("Leve a pizza para dentro");

const portaAberta = prompt('A Porta está aberta?')

if(portaAberta === "Sim" || portaAberta === 'sim')
{
alert("Porta Aberta passe para dentro");
alert("Retire a pizza da caixa");
alert("Retire a embalagem")   

const Fatias = Number(prompt("De 0 a 3 pergunte aos seus amigos quantas fatias eles querem comer"))

if(Fatias <= 3){

if(Fatias === 1)
{
alert(`O número de fatias pedido foram ${Fatias} você terá que repartir em 6 partes iguais para cada um`)
alert("Meus parabéns chegou ao final do programa se você não entendeu muito bem pode dar uma olhada arquivo de texto você pode encontrar no repositório do meu github, lá estão os algoritmos e as regras que o programa seguem");
alert('Programa terminado');    

}
else if(Fatias === 2)
{
alert(`O número de fatias pedido foram ${Fatias} você terá que repartir em 12 partes iguais para cada um`);
alert("Meus parabéns chegou ao final do programa se você não entendeu muito bem pode dar uma olhada arquivo de texto você pode encontrar no repositório do meu github, lá estão os algoritmos e as regras que o programa seguem");
alert('Programa terminado');    
}    
else if(Fatias === 3)     
{
alert(`O número de fatias pedido foram ${Fatias} você terá que repartir em 18 partes iguais para cada um`);
alert("Meus parabéns chegou ao final do programa se você não entendeu muito bem pode dar uma olhada no arquivo de texto você pode encontra-lo no repositório do meu github, lá estão os algoritmos e as regras que o programa seguem");
alert('Programa terminado');    
}

}
else 
{
alert("O número máximo de fatias são 3");
alert('Programa Terminado')
}

}
else if(portaAberta === "Não" || portaAberta === 'não')
{
alert("Porta Fechada, seus amigos não vão comer a pizza");    
alert("Programa terminado");
}
else 
{
alert("Palavra invalida só pode escrever ((s)Sim ou (n)Não)");    
alert('Programa terminado')
}

}
else if(pague < 10)
{
alert("Você não tem dinheiro, o entregador irá embora");   
alert("Programa terminado"); 
}
else 
{
alert("Caractere invalido só pode números");    
}




