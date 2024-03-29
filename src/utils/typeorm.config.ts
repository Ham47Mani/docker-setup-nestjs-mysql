import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// TypeOrm configuration options
export const typeOrmCOnfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE_NAME || 'nest_mysql',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true
}

