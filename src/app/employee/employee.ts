export class Employee {
    id: Number;
    username: string;
    full_name: string;
    id_card: number;
    birthday: Date;
    gender: boolean;
    phone: string;
    email: string;
    position: string;
    skill: number;
    status: string;
    department: string;
    role: number;
}

export class EmpSkill {
    id: number;
    employee: Object;
    skill: Object;
    level: number;
}