import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class Lesson {
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    length: 100,
    unique: true,
    nullable: false
  })
  description: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}