export class Employee {
    id: number;
    username: string;
    full_name: string;
    id_card: number;
    birthday: number;
    gender: boolean;
    phone: string;
    email: string;
    position: string;
    skill: number;
    status: any;
    department: any;
    role: any;
}

export class EmpSkill {
    id: number;
    employee: Object;
    skill: Object;
    level: number;
}