let valami={
    nev: "username",
    _eletkor: 23,

    kiir() {
        console.log(this.nev);
    },
    get eletkor() {
        return this.eletkor;
    }

};

class User{
    #eletkor=0;

    constructor(nev,eletkor){
        this.nev=nev;
        this.eletkor=eletkor;
    }

    get eletkor(){
        return this.#eletkor;
    }

    set eletkor(eletkor){
        if(typeof eletkor==='number' && eletkor >=0){
            this.#eletkor=eletkor;
        } else{
            throw new Error("Eletkor nemnegativ egesz kell, hogy legyen")
        }
    }

    kiir(){
        console.log(user.nev, user.eletkor);
    }

    login(username,pass){
        return false;
    }

    #privatMetodus() {

    }

    static atlagEletkor(users) {
        let sum = 0;
        for (let u of users) {
            sum += u.eletkor;
        }

        return sum / users.lenght;
    }
}

let user=new User("user2",19);
let userek = [
    user,
    new User("user3",70),
    new User("user4",45),
];

let atlag = User.atlagEletkor(userek);
console.log(atlag);

console.log(valami instanceof User);
console.log(user instanceof User);
//console.log(user.nev, user.eletkor);
//user.#eletkor="kutya";  <-- szintakszis hiba

function gombKattintas(){
    user.kiir();
}

//document.getElementById('gomb').addEventListener('click', gombKattintas);
