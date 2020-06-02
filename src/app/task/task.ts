export interface Task{
    id: number;
    name: String;
    inside_project: boolean;
    description: String;
    create_date: Date;
    estimate: String;
    start_date: Date;
    end_date: Date;
}