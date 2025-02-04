import bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

const comparePassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
}

export default { hashPassword, comparePassword };