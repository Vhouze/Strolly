export class Lieux {
    constructor(id, title, color, description,latitude, longitude ){
        this.id = id;
        this.title = title;
        this.color= color;
        this.description= description;
        this.latitude = latitude;
        this.longitude = longitude;

    }
};

export class Mood {
    constructor(id, title, image ){
        this.id = id;
        this.title = title;
        this.image= image;
    }
};


export class FavMood {
    constructor(id, title, emoji ){
        this.id = id;
        this.title = title;
        this.emoji= emoji;
    }
};

