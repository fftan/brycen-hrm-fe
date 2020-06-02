export class Employee {
    id: number;
    username: string;
    full_name: string;
    id_card: number;
    birthday: Date;
    gender: boolean;
    phone: string;
    email: string;
    position: string;
    skill: number;
    status: number;
    department: number;
    role: number;
}

export class EmpSkill {
    id: number;
    employee: Object;
    skill: Object;
}