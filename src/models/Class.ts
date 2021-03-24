import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export default class Class {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
      length: 100,
      unique: true,
      nullable: false
    })
    name: string

    @Column({
      nullable: false
    })
    duration: number

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date
}
