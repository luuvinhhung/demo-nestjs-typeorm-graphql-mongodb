import { 
  Entity, 
  ObjectIdColumn, 
  Column, 
  OneToOne, 
  JoinColumn, 
  CreateDateColumn,
UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'customers' })
export class Customer {
  @ObjectIdColumn()
  _id: string

  @Column()
  avatar: string

  @Column()
  type: string

  @Column()
  code: string

  @Column()
  name: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  dateOfBirth: number

  @Column()
  moblie: string

  @Column()
  address: string

  @Column()
  email: string

  @Column()
  gender: string

  @Column()
  weight: number

  @Column()
  guardian: string

  @Column()
  guardianID: string

  @Column()
  healthInsuranceNumber: string

  @Column()
  healthInsuranceExpired: string

  @Column()
  taxCode: string

  @Column()
  jobName: string

  @Column()
  positionName: string

  @Column()
  companyName: string

  @Column()
  medicalHistory: string

  @Column()
  isHealthBloodPressure: boolean

  @Column()
  isInfectiousDiseases: boolean

  @Column()
  isDiabetes: boolean

  @Column()
  isProlongedBleeding: boolean

  @Column()
  isStomachAche: boolean

  @Column()
  isBothKidney: boolean

  @Column()
  isPregnant: boolean

  @Column()
  isAllergyAsthma: boolean

  @Column()
  isTakingMedicine: boolean

  @Column()
  otherDiseases: boolean

  @Column()
  groups: string[]

  @Column()
  PIC: string

  @Column()
  billAddress: string

  @Column()
  isActive: boolean

  @Column()
  isCustomer: boolean

  // @Column()
  // createdAt: number
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: String;

  @Column()
  createdBy: ByUser

  // @Column()
  // updatedAt: number
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: String;

  @Column()
  updatedBy: ByUser

  constructor(customer) {
    if (customer) {
      Object.assign(this, customer)
    }
  }
}

interface ByUser {
  _id: string
  username: string
  fullName: string
}
