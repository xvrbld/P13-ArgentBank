import axios from "axios";

export async function SignUp() {
  try {
    const {
      data: { data },
    } = await axios.post(`http://localhost:3000/signup`);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function SignIn(email: string, password: string) {
  try {
    const response = await axios.post(
      `http://localhost:3001/api/v1/user/login`,
      {
        email,
        password,
      }
    );
    return response.data.body.token;
  } catch (error) {
    console.log(error);
  }
}

export async function Profile(token: string | null) {
  try {
    const response = await axios.post(
      `http://localhost:3001/api/v1/user/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT in Authorization header
        },
      }
    );

    return response.data.body;
  } catch (error) {
    console.log(error);
    throw error; // re-throw the error so that the caller can handle it
  }
}
