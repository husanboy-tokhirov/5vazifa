//#1
// let name = "Jack Smith";
// let newName = "";
// let lastCharacter = name.at(name.lenght - 1);
// if(lastCharacter === lastCharacter.toUpperCase()){
//     for(let i = 0; i < name.length - 1; i++){
//         newName += name[i];
//     }
//     newName += lastCharacter.toLowerCase();
// }
// if (lastCharacter === lastCharacter.toLowerCase()){
//     for(let i = 0; i < name.length - 1; i++){
//         newName += name[i];
//     }
//     newName += lastCharacter.toUpperCase();
// }
// document.write(name, " ", newName);

// //#2
// let people =prompt("Assalomu aleykum BRATIM budjetingizni kiriting sog'lig'ingizni aytib beraman:");
// switch (people) {
//     case "500.000":
//         document.write("Sizning sog'lig'ingiz qoniqarli sizni Germaniyaga jo'natamiz");
//         break;
//     case "700.000":
//         document.write("Sizning sog'lig'ingiz yaxshi sizni Hindistonga jo'natamiz");
//         break;
//     case "900.000":
//         document.write("Sizning sog'lig'ingiz a'lo sizni Rossiyaga jo'natamiz");
//         break;
//     default:
//         document.write("Siz sog'lom odamsiz ishizzi qiling");
//         break;
// }

//#3
// let sonA = +prompt("a ni kiriting: ");
// let sonB = +prompt("b ni kiriting: ");
// let sonC = +prompt("c ni kiriting: ");
// if(sonA **2 + sonB ** 2 === numC ** 2){
//     document.write("To'g'ri burchakli uchburchak")
// }
// else{
//     document.write("To'g'ri burchakli uchburchak emas")
// }

//#4
// let num = prompt("Ixtiyoriy son tanleng: ");
// let result = Math.floor(Math.random() * 10);
// if (num == result) {
//     document.write("Siz yutdingiz");
// }
// else {
//     document.write("Winner");
// }

// #5
// let listening = +prompt("Listening bahoyingizni kiriting;");

// let reading = +prompt("Reading bahoyingizni kiriting;");

// let writing = +prompt("Writing bahoyingizni kiriting;");

// let speaking = +prompt("Speaking bahoyingizni kiriting;");

// let ball = Math.floor((listening + reading + writing + speaking) / 4);
// switch (ball) {
//     case 5:
//         document.write("Siz listeningdan 5 baho oldingiz");
//         break;
//     case 4:
//         document.write("Siz readingdan 4 baho oldingiz");
//         break;
//     case 3:
//         document.write("Siz writingdan 3 baho oldingiz");
//         break;
//     case 2:
//         document.write("Siz speakingdan 2 baho oldingiz");
//         break;
//         default:
//         document.write("Siz yaxshi baho ololmadiz qaytadan topshiring");
// }

// #7
// let sentence = "Hello World";
// let count = 1;
// for(let i = 0; i < sentence.length; i++){
//     if(sentence[i] === " "){
//         count++;
//     }
// }
// document.write(count);

//#8
// let word = prompt("So'z kiriting");
// for (let i = 0; i < word.length; i++) {
//     document.write(word.length);
// }

//#9
// let firstname = "John";
// for(let i = 1; i <= firstname.length; i++){
//     document.write(i)
// }

//#10
// let firstname = "Husanboy";
// let sum = 0;
// for(let i = 0; i < firstname.length; i++){
//     sum += firstname.charCodeAt(i)
// }
// document.write(sum)

//#11  +  //#12
// let alphabet = {};
// for (let i = 65; i <= 90; i++) {
//     alphabet[i] = String.fromCharCode(i);
// }
// let sum = 0;
// for (let key in alphabet) {
//     if (key % 2 !== 0) {
//         sum += +key;
//     }
// }
// document.write(sum);

//#13
// let year = prompt("Yil kiriting: ");
// let week =Math.floor((year * 365) / 7);
// alert (week);

// //Qo'shimcha
// let alphabet ={};
// let str1 = prompt("Alphabet1: ");
// let str2 = prompt("Alphabet2: ");
// let n1 = str1.charCodeAt(0);
// let n2 = str2.charCodeAt(0);
// for(let i = n1; i <= n2; i++){
//     alphabet[i] = String.fromCharCode(i);
// }
// document.write(alphabet);
