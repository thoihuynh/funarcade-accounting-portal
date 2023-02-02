import { Helmet } from 'react-helmet-async';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router';

import { HomepageWrap, TableWrapper } from './style';
import CustomBody from 'app/components/CustomBody';

import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import LanguageSelect from 'app/components/LanguageSelect';
import RectangleDropdown from 'app/components/icons/RectangleDropdown';
import { useEffect, useState } from 'react';
import { useQuery } from 'app/hooks/useQuery';
import SearchInput from 'app/components/SearchInput';
import PreviousIcon from 'app/components/icons/Previous';

function createData(id: string, name: string, point: string) {
  return { id, name, point };
}

const rows = [
  createData('1', 'Fake 1', '245,121'),
  createData('2', 'Fake 2', '645,111'),
  createData('3', 'Fake 3', '645,111'),
  createData('4', 'Fake 4', '645,111'),
  createData('5', 'Fake 5', '645,111'),
  createData('6', 'Fake 6', '645,111'),
  createData('7', 'Fake 7', '645,111'),
  createData('8', 'Fake 8', '645,111'),
  createData('9', 'Fake 9', '645,111'),
  createData('10', 'Fake 10', '645,111'),
];

const SearchListPage = () => {
  const navigate = useNavigate();
  let query = useQuery();

  const [searchInput, setSearchInput] = useState(query.get('name') || '');

  const [searchListData, setSearchListData] = useState<any>();

  const handleOnChangeSearchInput = (e: any) => {
    setSearchInput(e.target.value);
  };

  const handleChangeLink = () => {
    navigate({
      pathname: '/',
    });
  };

  useEffect(() => {
    if (searchInput) {
      const data = rows.filter(row =>
        row.name.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setSearchListData(data);
    }
  }, [searchInput]);

  useEffect(() => {
    const handleChangeInput = setTimeout(() => {
      if (searchInput) {
        navigate({
          pathname: '/user-list-search',
          search: `?name=${searchInput}`,
        });
      }
    }, 0);

    return () => clearTimeout(handleChangeInput);
  }, [searchInput]);

  return (
    <Container>
      <div className="d-flex break-crumb">
        <h3 className="link disabled-text" onClick={handleChangeLink}>
          Dashboard
        </h3>
        <PreviousIcon />
        <h3>User Name Search List</h3>
      </div>

      <div className="d-flex header-title">
        <div className="title">
          {searchListData?.length === 0
            ? 'No Result Founded'
            : 'User Name Search List'}
        </div>
        <div className="d-flex">
          <SearchInput
            value={searchInput}
            onChange={handleOnChangeSearchInput}
          />

          <LanguageSelect rightTextOrIcon={<RectangleDropdown />} />
        </div>
      </div>

      <HomepageWrap className="full_height_page">
        <Helmet>
          <title>User Name Search List</title>
          <meta name="description" content="Home page" />
        </Helmet>

        <CustomBody>
          <h3>
            {searchListData?.length > 0
              ? searchListData?.length + ' Result(s) Found'
              : 'Try another keyword.'}{' '}
          </h3>

          {searchListData?.length > 0 && (
            <TableWrapper>
              <Table>
                <TableBody>
                  {searchListData?.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Link
                          to={`/user-list-search/detail/${row.id}?name=${searchInput}`}
                        >
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell>Current Reward Points: {row.point}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableWrapper>
          )}
        </CustomBody>
      </HomepageWrap>
    </Container>
  );
};

export default SearchListPage;
