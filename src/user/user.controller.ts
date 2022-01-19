import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService, userRo } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags,ApiOperation, ApiQuery  } from '@nestjs/swagger'

@ApiTags('用户功能')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @ApiOperation({summary:'用户注册'})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({summary:'获取用户列表'})
  @Get()
  findAll(@Query() query):Promise<userRo> {
    return this.userService.findAll(query);
  }

  @ApiOperation({summary:'获取单个用户'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @ApiOperation({summary:'更新用户信息'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({summary:'删除用户'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
