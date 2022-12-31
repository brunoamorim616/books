import useSWR from "swr";
import { NYTApi } from "../config/apiConfigurations";
import useBooksListsNames from "./useBooksListsNames";

const fetcher = (url: string) => NYTApi.get(url).then((res) => res.data);

function useBooks() {
  const { data, error, isLoading } = useSWR(
    `/books/v3/lists/overview.json?api-key=NAObvAVH38HcHgne8JdpuuGGKCMlgKxu`,
    fetcher
  );
  const { booksListNames } = useBooksListsNames();
  const results = [];

  if (data.results.lists.length > 0) {
    results.push(data.results.lists);
  }

  return { results, isLoading, error };
}

export default useBooks;
