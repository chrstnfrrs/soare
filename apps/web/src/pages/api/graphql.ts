import jwt from 'jsonwebtoken';
import { getToken } from 'next-auth/jwt';
import { $fetch } from 'ohmyfetch';

export default async (req, res) => {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const tokenInfo = token?.user || {};
    const authToken = jwt.sign(tokenInfo, process.env.GRAPHQL_SECRET);

    const { data } = await $fetch('/graphql', {
      baseURL: process.env.API_URL,
      body: req.body,
      mode: 'no-cors', // no-cors, *cors, same-origin
      method: 'POST',
      headers: {
        Accept: 'application/json',
        authorization: `Bearer ${authToken}`,
      },
    });

    res.status(200).json({ data, error: false });
  } catch (error) {
    res.status(200).json({ data: {}, error });
  }
};
