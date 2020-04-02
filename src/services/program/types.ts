
export interface Program {
    _id: string,
    year: number,
    name: string,
    code: string,
    creationDate: string,
    evaluation: {
        description: string,
        value: number
    },
    ministry: {
        _id: string,
        creationDate: string,
        name: string,
        code: string
    },
    publicService: {
        _id: string,
        creationDate: string,
        name: string,
        code: string
    }
}