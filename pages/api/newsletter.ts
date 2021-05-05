import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  name: string;
  success: boolean;
  message: string;
  data?: unknown;
};

const { MC_URL, MC_API_KEY, MC_LIST_ID } = process.env;

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const url = `${MC_URL}lists/${MC_LIST_ID}`;
  const parsedBody = JSON.parse(req.body);

  try {
    return fetch(url, {
      method: "POST",
      headers: {
        Authorization: `auth ${MC_API_KEY}`,
      },
      body: req.body,
    })
      .then((res) => res.json())
      .then((data) => {
        return res.status(200).json({
          success: true,
          message: `Successfully added ${parsedBody.members
            .map((member, idx) => member.email_address)
            .join(", ")} to the list`,
          name: parsedBody.firstName,
          data,
        });
      });
  } catch (err) {
    console.error(err);
  }
  return res.status(400).json({
    success: false,
    message: `Error adding ${parsedBody.email} to the list`,
    name: parsedBody.firstName,
  });
};
