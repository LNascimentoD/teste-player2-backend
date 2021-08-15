import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createAddressTable1628956410665 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'address',
        columns: [
          {
            name: 'id',
            type: 'binary(16)',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          { name: 'cep', type: 'varchar' },
          { name: 'logradouro', type: 'varchar' },
          { name: 'number', type: 'varchar' },
          { name: 'city', type: 'varchar' },
          { name: 'state', type: 'varchar' },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('address');
  }
}
