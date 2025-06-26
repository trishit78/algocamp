import { PrismaClient } from "./generated/prisma";

const prisma  = new PrismaClient();

async function insertUser(username:string,password:string,firstname:string,lastname:string) {
    const res = await prisma.user.create({
        data:{
            email:username,
            password,
            firstname,
            lastname
        },
        select:{
            id:true,
            password:true
        }
    })
    console.log(res);
}

insertUser('trishit@gmail.com','trishit','trishit','lastname');