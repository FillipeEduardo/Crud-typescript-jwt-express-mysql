import jwt, { Secret } from 'jsonwebtoken';

const createJwt = (email: string) => {
  const result = jwt.sign({ email }, process.env.SECRET as Secret);
  return result;
};

export default createJwt;