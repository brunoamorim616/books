import useSWR from "swr";
import { NYTApi } from "../config/apiConfigurations";

interface List {}

const fetcher = (url: string) => NYTApi.get(url).then((res) => res.data);

function useBooksListsNames() {
  const { data, error, isLoading } = useSWR(
    `/books/v3/lists/names?api-key=NAObvAVH38HcHgne8JdpuuGGKCMlgKxu`,
    fetcher
  );

  const booksListNames = [];
  console.log("data", data);

  if (data.results) booksListNames.push(data.results);

  return { booksListNames, isLoading, error };
}

export default useBooksListsNames;
