import jwt, { Secret } from 'jsonwebtoken';

const createJwt = (id: string, email: string) => {
  const result = jwt.sign({ email, id }, process.env.SECRET as Secret);
  return result;
};

export default createJwt;