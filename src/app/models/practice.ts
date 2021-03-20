export class Practice {
    private _title: string;
    private _content: string;
    private _exersiceDate: string;
    private _tag: string;
    private _id: string;

    constructor() {
        this._title = "";
        this._content = "";
        this._exersiceDate = "";
        this._tag = "";
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    get exersiceDate(): string {
        return this._exersiceDate;
    }

    get tag(): string {
        return this._tag;
    }

    get id(): string {
        return this._id;
    }

    set title(title: string) {
        this._title = title;
    }

    set content(content: string) {
        this._content = content;
    }

    set exersiceDate(exersiceDate: string) {
        this._exersiceDate = exersiceDate;
    }

    set tag(tag: string) {
        this._tag = tag;
    }

    set id(id: string) {
        this._id = id;
    }

}
