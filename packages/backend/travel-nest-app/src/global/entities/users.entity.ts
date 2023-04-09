import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  //wth2052@gmail.com
  @Column()
  email: string;

  @Column()
  password: string;
  //1995-01-01
  @Column()
  birthday: string;
  //경기도 의정부시 --동 --로 123-1 123-123
  @Column()
  address: string;
}
