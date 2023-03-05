// Bilgiler



let ogrenciadı1 = "irem";
let ogrenci1dogumyili = 2003;
let ogrenci1vize = 60;
let ogrenci1final = 70;

let ogrenciadı2 = "furkan";
let ogrenci2dogumyili = 1999;
let ogrenci2vize = 100;
let ogrenci2final = 50;

//Kaç yaşındalar?

function calculateAge(birthDay, birthMonth, birthYear)
{
  todayDate = new Date();
  todayYear = todayDate.getFullYear();
  todayMonth = todayDate.getMonth();
  todayDay = todayDate.getDate();
  age = todayYear - birthYear;
 
  if (todayMonth < birthMonth - 1)
  {
    age--;
  }
 
  if (birthMonth - 1 == todayMonth && todayDay < birthDay)
  {
    age--;
  }
  return age;
}

console.log("İrem bugün itibarıyla " + calculateAge(15,08,2003) + " yaşında." );
console.log("Furkan bugün itibarıyla " + calculateAge(23,07,1999) + " yaşında." );

// Kim daha büyük?

let ogrenci1yas = calculateAge(15,08,2003);
let ogrenci2yas= calculateAge(23,07,1999);

if(ogrenci1yas > ogrenci2yas){
    console.log("İrem Furkan'dan daha büyük." )
}
 else {
    console.log("Furkan İrem'den daha büyük.")
}


//Dersten geçebildiler mi?

let basarili = 60;
let ogrenci1ortalama = (ogrenci1vize*30/100)+ (ogrenci1final*70/100);
let ogrenci2ortalama = (ogrenci2vize*30/100)+ (ogrenci2final*70/100);

if(ogrenci1ortalama >= basarili){
    console.log("İrem dersi geçti")
} 
else{
    console.log("İrem dersten kaldı")
}

if(ogrenci2ortalama >= basarili){
    console.log("Furkan dersi geçti")
} 
else{
    console.log("Furkan dersten kaldı")
}

//Final notu 60'dan düşük olan geçemiyor olsaydı?

if(ogrenci1ortalama >= basarili && ogrenci1final>60){
    console.log("İrem dersi geçti")
} 
else{
    console.log("İrem dersten kaldı")
}

if(ogrenci2ortalama >= basarili && ogrenci2final>60){
    console.log("Furkan dersi geçti")
} 
else{
    console.log("Furkan dersten kaldı")
}
