import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
  
@Entity('address')
class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    cep: string;
  
    @Column()
    logradouro: string;
  
    @Column()
    number: string;
  
    @Column()
    city: string;
  
    @Column()
    state: string;
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}
  
export default Address;