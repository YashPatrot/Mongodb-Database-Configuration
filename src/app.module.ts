/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StudentSchema } from './schema/student.schema';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';

@Module({
  imports:[MongooseModule.forRoot('mongodb://localhost:3333/studentdb'),
MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])],
  controllers: [AppController,StudentController],
  providers: [AppService,StudentService],
})
export class AppModule {}