import CommonField from '../common/CommonField';
import SearchIcon from 'app/components/icons/SearchIcon';

interface Props {
  value: string;
  disabled?: boolean;
  onChange?: any;
}

const SearchInput = (props: Props) => {
  const { value, disabled, onChange } = props;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <CommonField
      type="text"
      className={`search-input ${disabled ? 'disabled' : ''} ${
        value ? 'border-input' : ''
      }`}
      name="search-input"
      rightTextOrIcon={<SearchIcon />}
      value={value}
      placeholder="Username"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchChange(e);
      }}
      disabled={disabled}
    />
  );
};

export default SearchInput;
