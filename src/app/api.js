import axios from "axios";

export const api = {
  dogs: {
    async getDogs(name) {
      return await axios.get(`https://dog.ceo/api/breed/${name}/images/random`);
    },
  },
};
