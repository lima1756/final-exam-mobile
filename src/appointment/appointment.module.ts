import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { AppointmentSchema } from './appointment.schema';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Appointment', schema: AppointmentSchema }]),
    ],
    providers: [AppointmentService],
    controllers: [AppointmentController]
  })
export class AppointmentModule {}
