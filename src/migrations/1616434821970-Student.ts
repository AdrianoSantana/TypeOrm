import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Student1616434821970 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table(
                {
                    name: 'student',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                            default: 'uuid_generate_v4()'
                        },
                        {
                            name: 'name',
                            type: 'varchar'
                        },
                        {
                            name: 'created_At',
                            type: 'timestamp',
                            default: 'now()'
                        },
                        {
                            name: 'updated_At',
                            type: 'timestamp',
                            default: 'now()'
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('student')
    }

}
