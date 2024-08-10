import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import UserService from "../services/user.service";

export async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { accessToken, refreshToken } = req.cookies;

  // Access token exist ?
  if (accessToken) {
    try {
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY as string);
    } catch (error) {
      // Refresh token exist ?
      if (!refreshToken) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Generate new accessToken
      try {
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY as string);
        const validRefTok = await UserService.getAuth(refreshToken);

        // Exist
        if (!validRefTok) {
          return res.status(401).json({ message: "Unauthorized" });
        }

        const payload = jwt.decode(refreshToken) as {
          id: string;
          name: string;
          email: string;
        };

        const newAccessToken = jwt.sign(
          {
            id: payload.id,
            name: payload.name,
            email: payload.email,
          },
          process.env.JWT_ACCESS_KEY as string,
          { expiresIn: "15m" },
        );

        // set to cookie
        return res.cookie("accessToken", newAccessToken, { httpOnly: true });
      } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
      }
    }
  }
  next();
}
