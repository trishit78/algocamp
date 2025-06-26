import { Client } from "pg";

const client = new Client({
  connectionString:"postgresql://neondb_owner:npg_42aduClXiOTU@ep-delicate-water-a1job0q7-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});


async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
                CREATE TABLE users(
                    id serial primary key,
                    username varchar(50) unique not null,
                    email varchar(255) unique not null,
                    password varchar(255) not null,
                    created_at timestamp with time zone default current_timestamp
                );
        `)
        console.log(result);
    
}
//createUsersTable();


// async function getUsers() {
//     await client.connect();
//     const res = await client.query(`DESC users`)
//     console.log(res);
// }
async function insertData(username:string,email:string,password:string) {   
    try {
        await client.connect();
        const insertQuery = "INSERT INTO users(username,email,password) values($1,$2,$3)";  //sql injection
        const values = [username,email,password]
        const res = await client.query(insertQuery,values);
        console.log(res);

    } catch (error) {
        console.log(error)
    }
    finally{
        await client.end();
    }
}

//insertData("nosql","ref@gmail.com","3242542");

async function getUser(email:string) {
    await client.connect();
    const query = 'select * from users where email=$1';  // sql injection
    const result = await client.query(query,[email]);
    if(result.rows.length > 0){
        console.log('Users found:', result.rows[0]);
        return result.rows[0];
    }else{
        console.log('No user found with the given email');
        return null;
    }
}

getUser('abc@gmail.com')