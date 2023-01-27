const menu = [
  {
    id: asian,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: asian,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: asian,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: korean,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: korean,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: korean,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: japanese,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: japanese,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: japanese,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

document.getElementById("all").addEventListener("click", function(){
  document.getElementById("yemek1").style.display = "block";
  document.getElementById("yemek2").style.display = "block";
  document.getElementById("yemek3").style.display = "block";
  document.getElementById("yemek4").style.display = "block";
  document.getElementById("yemek5").style.display = "block";
  document.getElementById("yemek6").style.display = "block";
  document.getElementById("yemek7").style.display = "block";
  document.getElementById("yemek8").style.display = "block";
  document.getElementById("yemek9").style.display = "block";
});

document.getElementById("korean").addEventListener("click", function(){
  document.getElementById("yemek1").style.display = "block";
  document.getElementById("yemek2").style.display = "block";
  document.getElementById("yemek3").style.display = "block";
  document.getElementById("yemek4").style.display = "none";
  document.getElementById("yemek5").style.display = "none";
  document.getElementById("yemek6").style.display = "none";
  document.getElementById("yemek7").style.display = "none";
  document.getElementById("yemek8").style.display = "none";
  document.getElementById("yemek9").style.display = "none";
});

document.getElementById("asian").addEventListener("click", function(){
  document.getElementById("yemek1").style.display = "none";
  document.getElementById("yemek2").style.display = "none";
  document.getElementById("yemek3").style.display = "none";
  document.getElementById("yemek4").style.display = "block";
  document.getElementById("yemek5").style.display = "block";
  document.getElementById("yemek6").style.display = "block";
  document.getElementById("yemek7").style.display = "none";
  document.getElementById("yemek8").style.display = "none";
  document.getElementById("yemek9").style.display = "none";
});

document.getElementById("japanese").addEventListener("click", function(){
  document.getElementById("yemek1").style.display = "none";
  document.getElementById("yemek2").style.display = "none";
  document.getElementById("yemek3").style.display = "none";
  document.getElementById("yemek4").style.display = "none";
  document.getElementById("yemek5").style.display = "none";
  document.getElementById("yemek6").style.display = "none";
  document.getElementById("yemek7").style.display = "block";
  document.getElementById("yemek8").style.display = "block";
  document.getElementById("yemek9").style.display = "block";
});