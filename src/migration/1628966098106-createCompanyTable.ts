import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
  } from 'typeorm';
  
  export class createCompanyTable1628966098106 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'companies',
          columns: [
            {
              name: 'id',
              type: 'binary(16)',
              isPrimary: true,
              generationStrategy: 'uuid',
            },
            { name: 'cnpj', type: 'varchar' },
            { name: 'corporateName', type: 'varchar' },
            { name: 'fantasyName', type: 'varchar' },
            { name: 'address_id', type: 'binary(16)' },
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
  
      await queryRunner.createForeignKey(
        'companies',
        new TableForeignKey({
          name: 'CompanyAddress',
          columnNames: ['address_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'address',
          onUpdate: 'CASCADE',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('companies', 'CompanyAddress');
      await queryRunner.dropTable('companies');
    }
  }
  