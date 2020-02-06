import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  travelTo(vehicule: string) {
    return `Have a good trip on your ${vehicule}`;
  }
}
