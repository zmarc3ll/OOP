class Allat{
    #labakSzama;
    #nev;

    constructor(nev,labakSzama){
        this.#nev=nev;
        this.#labakSzama=labakSzama;
    }

    hangotad(){
        throw new Error('hangot ad fuggvény absztrakt');
    }
}

class Aranyhal extends Allat{

    constructor(nev){
        super(nev,0);
    }
    hangotad(){
        console.log('')
    }
}

class Kutya extends Allat{

    constructor(nev){
        super(nev,4)
    }
    hangotad(){
        console.log('vau')
    }
}

let kutya=new Kutya('Bodri');
let hal=new Aranyhal('nemo');
kutya.hangotad();
hal.hangotad();