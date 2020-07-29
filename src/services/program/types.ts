
export interface Program {
    _id: string,
    year: number,
    name: string,
    code: number,
    creationDate: string,
    evaluation: {
        description: string;
        value: number;
    },
    ministry: {
        _id: string,
        creationDate: string;
        name: string,
        code: number;
    },
    publicService: {
        _id: string,
        creationDate: string;
        name: string;
        code: number;
    }
}