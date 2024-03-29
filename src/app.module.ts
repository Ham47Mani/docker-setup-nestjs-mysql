import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmCOnfig } from './utils/typeorm.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmCOnfig), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
