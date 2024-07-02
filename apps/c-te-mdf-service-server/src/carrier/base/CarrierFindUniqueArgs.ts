/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CarrierWhereUniqueInput } from "./CarrierWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CarrierFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => CarrierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CarrierWhereUniqueInput)
  @Field(() => CarrierWhereUniqueInput, { nullable: false })
  where!: CarrierWhereUniqueInput;
}

export { CarrierFindUniqueArgs as CarrierFindUniqueArgs };
