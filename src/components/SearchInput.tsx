import React, {
  useState,
  useEffect,
  useRef,
  FormEvent,
  ChangeEvent,
} from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../data/gameQueryStore";
import { useNavigate } from "react-router-dom";

const SearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const debounceTimeout = useRef<number | null>(null);
  const onSearch = useGameQueryStore((s: any) => s.setSearchText);
  const navigate = useNavigate();

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      console.log(inputValue);
      onSearch(inputValue);
    }, 500);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [inputValue]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/");
    onSearch(inputValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          value={inputValue}
          onChange={handleChange}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
