import { jwtVerify, SignJWT } from "jose";

const {AUTH_SECRET} = process.env;
const key = new TextEncoder().encode(AUTH_SECRET!);

 const encrypt = async (payload: any) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(key);
}

 const decrypt = async (input: string): Promise<any> => {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
 }


 export default {encrypt, decrypt}