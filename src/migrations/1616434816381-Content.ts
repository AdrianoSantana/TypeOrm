import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Content1616434816381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table(
                {
                    name: 'content',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                            default: 'uuid_generate_v4()'
                        },
                        {
                            name: 'linkContent',
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
        await queryRunner.dropTable('content')
    }

}
