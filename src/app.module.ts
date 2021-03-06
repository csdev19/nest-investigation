import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './modules/user/user.entity';
import { AuthModule } from './modules/auth/auth.module';
import { NoteModule } from './modules/note/note.module';
import { Note } from './modules/note/note.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_DB_HOST,
      port: +process.env.PG_DB_PORT,
      username: process.env.PG_DB_USERNAME,
      password: process.env.PG_DB_PASSWORD,
      database: process.env.PG_DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: [User, Note],
    }),
    UsersModule,
    AuthModule,
    NoteModule,
  ],
})
export class AppModule {}
