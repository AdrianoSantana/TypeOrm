import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class Content {

  @PrimaryGeneratedColumn()
  id: string

  @Column({
    nullable: false
  })
  linkContent: string

  @CreateDateColumn()
  createdAt: string
  
  @UpdateDateColumn()
  updatedAt: string
}
