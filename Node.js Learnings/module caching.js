class modulecaching {
    constructor (name){

        this.name = name;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }


}

//module.exports = new modulecaching("Kunika");

module.exports = modulecaching;