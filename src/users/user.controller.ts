import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { AppService } from '../app.service';

@Controller('user')
export class UserController {
  private userDtos: UserDto[] = [
    {
      id: 1,
      name: 'Some really long name',
      created_at: new Date(),
      is_active: true,
    },
    {
      id: 2,
      name: 'Some really long name',
      created_at: new Date(),
      is_active: true,
    },
    {
      id: 3,
      name: 'Some really long name',
      created_at: new Date(),
      is_active: true,
    },
    {
      id: 4,
      name: 'Some really long name',
      created_at: new Date(),
      is_active: true,
    },
    {
      id: 5,
      name: 'Some really long name',
      created_at: new Date(),
      is_active: false,
    },
  ];

  public constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object[] {
    console.log({ movies: this.userDtos });
    return this.userDtos;
  }

  @Post()
  async createMovie() {
    await this.appService.createUser();
  }

  @Patch(':id')
  updateMovie(@Param('id') id: string, @Body() body: UserDto) {
    const movie = this.userDtos.find((movie) => movie.id === parseInt(id));
    const movieUpdated = {
      ...movie,
      ...body,
    };
    this.userDtos = this.userDtos.map((movie) => {
      if (movie.id === parseInt(id)) movie = movieUpdated;
      return movie;
    });
    return;
  }

  @Patch()
  bulkUpdateMovie(@Body('changes') changes: UserDto[]) {
    for (const movie of changes) {
      this.userDtos = this.userDtos.map((movieCurrent) =>
        movieCurrent.id === movie.id ? movie : movieCurrent,
      );
    }
    return;
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    this.userDtos = this.userDtos.filter((movie) => movie.id !== parseInt(id));
    return;
  }
}
