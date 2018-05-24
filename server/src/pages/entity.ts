import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Page extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:true})
  firstName: string

  @Column('text', {nullable:true})
  lastName: string

  @Column('text', {nullable:true})
  email: string

  @Column('text', {nullable:true})
  phone: number

  @Column('text', {nullable:true})
  title: string
  
  @Column('text', {nullable:true})
  description: string

  @Column('text', {nullable:true})
  price: number

}
