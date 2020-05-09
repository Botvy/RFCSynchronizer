import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RFC {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public githubID: number;

    @Column()
    public title: string;

    @Column({
        type: 'text',
    })
    public content: string;
}
