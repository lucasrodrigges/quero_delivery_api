import responses from "../constants/responses";
import UserModel from "../models/User";
import CustomError from "../types/CustomError";
import bcrypt from "../utils/bcrypt";
import jose from "../utils/jose";

const login = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    const {message, status } = responses.NOT_FOUND;
    throw new CustomError(message, status);
  }

  if (!await bcrypt.comparePassword(password, user.password)) {
    const {message, status } = responses.UNAUTHORIZED;
    throw new CustomError(message, status);
  }

  const token = await jose.encrypt({
    user: {
      name: user.name,
      email: user.email,
      id: user._id
    }
  });

  return {
    token,
  }
}

const AuthService = {
  login,
}

export default AuthService