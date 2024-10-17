import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async findAll() {
    return await this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.taskService.findOne(id);
  }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.create(createTaskDto);
  }

  @Put(':id')
  async update(@Body() updateTaskDto: UpdateTaskDto, @Param('id') id: number) {
    return await this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.taskService.delete(id);
  }
}
