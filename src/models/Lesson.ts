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

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date
}