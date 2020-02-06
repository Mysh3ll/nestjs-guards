import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";

@Injectable()
export class EcoloGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log("inside EcoloGuard");
    const greenVehicules = this.reflector.get<string[]>(
      "greenVehicules",
      context.getHandler()
    );
    const request = context.switchToHttp().getRequest();
    console.log("EcoloGuard / greenVehicules", greenVehicules);
    return greenVehicules.includes(request.body.vehicule);

  }
}
