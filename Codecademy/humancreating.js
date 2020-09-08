const humans = {
    _appearance = {
        skincolor: [],
        eyecolor: ['blue', 'dark blue', 'aqua blue', 'brown', 'dark brown'],
        haircolor: [],
        eyebrowcolor: [],
        hairstyle: [],
        bodyfat: [],
        weight: []
    },
    get skincolor(){
        return this.skincolor;
      },
    set skincolor(skincolor){
        this.skincolor.push(skincolor);
      },
}