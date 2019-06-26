import { Module, HttpModule } from '@nestjs/common'
import { CustomerService } from './customer.service'
import { CustomerResolver } from './customer.resolver'
import { CommonService } from '@modules/common'

@Module({
  imports: [HttpModule],
  providers: [CustomerService, CustomerResolver, CommonService]
})
export class CustomerModule {}
