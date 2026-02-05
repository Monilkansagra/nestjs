import { Controller, All, Req, Get,Post,Delete,HttpCode,Redirect, Header, Param } from '@nestjs/common';
import  type  { Request } from 'express'; // Required to read the request method

@Controller('universal')
export class UniversalController {

  
  @All('demo')
  handleEveryRequest(@Req() req: Request) {
    
    console.log(`Received a ${req.method} request!`);

    return {
      status: 'Success',
      message: 'I accept all HTTP methods!',
      method_received: req.method, 
      path: req.url
    };
  }

  @Get('custom-get')
  @HttpCode(200) 
  getTeapot() {
    return { 
      message: "I am a teapot (200)", 
      note: "This proves you can change GET status codes too!" 
    };
  }

  @Post('custom-post')
  @HttpCode(202) 
  createSomething() {
    return { message: 'Created request accepted (202)' };
  }

  @Delete('custom-delete')
  @HttpCode(204) 
  deleteSomething() {
    return; 
  }

  @Get('go-to-docs')
  @Redirect('https://docs.nestjs.com', 302)
  docsRedirect() {
    return; 
  }

  @Get('custom-header')
  @Header('X-My-Custom-Header', 'NestJS-Is-Awesome') 
  getHeaderDemo() {
    return { message: 'Check the "Headers" tab in Postman!' };
  }

  @Get('ab*cd')
  getWildcard() {
    return { message: 'You hit the wildcard route!' };
  }

  @Get('print-id/:id')
  printId(@Param('id') id: string) {
    console.log(`Received ID: ${id}`); 
    return { message: `I received ID: ${id}` };
  }
@Get('primes/:start/:end')
  getPrimes(@Param('start') startStr: string, @Param('end') endStr: string) {
    const start = parseInt(startStr);
    const end = parseInt(endStr);

   
    const primes: number[] = []; 

    for (let num = start; num <= end; num++) {
      if (num < 2) continue;
      
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      
      
      if (isPrime) primes.push(num);
    }
    return { range: `${start} to ${end}`, prime_numbers: primes };
  }

  @Get('page/:pageNo')
  getPageRecords(@Param('pageNo') pageStr: string) {
    const page = parseInt(pageStr);
    const pageSize = 5;
    const startRecord = (page - 1) * pageSize + 1;
    const endRecord = page * pageSize;

    return {
      page: page,
      records: `${startRecord} - ${endRecord}`
    };
}
}