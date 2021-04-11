/* Index
const { data, pokemons, loading, error, page, previousPage, nextPage } = useFetchAll();
<Pagination page={ page } preview={ previousPage } next={ nextPage } />
*/

/* useFetchOne
const [page, setPage] = useState(1);
const [previousPage, setPreviousPage] = useState(null);
const [nextPage, setNextPage] = useState(null);

setPreviousPage(response.data.previous)
setNextPage(response.data.next)

page, previousPage, nextPage
*/