import axios from "axios";
import { useLoaderData } from "react-router-dom";
const cocktailSeacrhUr =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async () => {
  const searchTerm = '';
  const response = await axios.get(`${cocktailSeacrhUr}${searchTerm}`);
   console.log(response)
  return { drink: response.data.drinks, searchTerm};
}

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <h1>Landing</h1>;
};
export default Landing;
