import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Address from './Address';
  
@Entity('companies')
class Company {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    cnpj: string;

    @Column()
    corporateName: string;

    @Column()
    fantasyName: string;
  
    @OneToOne(type => Address)
    @JoinColumn({ name: 'address_id', referencedColumnName: 'id' })
    address: Address;
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}
  
export default Company;