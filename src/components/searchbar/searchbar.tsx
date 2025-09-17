import { useEffect, useRef, useState } from "react";
import searchCss from "./searchBarCss.module.scss";
import type { SearchComponentType } from "../../types/types";
import { indiaStates } from "../../data/indiaStates";

const SearchBar = ({
  sidebarOpen,
  onSearch,
  placeHolder,
  customClsform,
  customClsfocus,
  customClsinput,
  customClsbutton,
  icon,
  isPanelOpen
}: SearchComponentType) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredStates, setFilteredStates] = useState<typeof indiaStates>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  console.log("search---", search);
  console.log("filteredStates---", filteredStates);
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!search.trim()) {
      setError("Please enter a search location.");
      return;
    }
    try {
      await onSearch?.(search);
      setIsFocused(false);
    } catch (err) {
      console.log(err);
      setError("Error searching for place.");
    }
  };

  const handleFocus = () => {
    if (!isFocused) {
      setIsFocused(true);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && relatedTarget.closest("button")) {
      return;
    }
    setIsFocused(false);
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const filtered = indiaStates.filter((state) =>
        state.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredStates(filtered);
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [search]);

  return (
    <div  
    className={`${searchCss["frs-search__container"]} ${
        isPanelOpen ? searchCss["shifted"] : ""
      }`}
    ref={containerRef}>
      <form
        onSubmit={handleSearch}
        className={`${searchCss[`frs-search__${customClsform}`]} ${
          isFocused ? searchCss[`frs-search__form--${customClsfocus}`] : ""
        } ${sidebarOpen ? searchCss["frs-search__form--sidebar-open"] : ""}`}
      >
        <input
          type="text"
          id="searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeHolder}
          className={`${searchCss[`frs-search__${customClsinput}`]} ${
            isFocused ? searchCss[`frs-search__input--${customClsfocus}`] : ""
          }`}
        />
        <button
          type="submit"
          id="search-btn"
          className={`${searchCss[`frs-search__${customClsbutton}`]}`}
        >
          <img src={icon} alt="Search Icon" id="search-icon" />
        </button>
      </form>
      {error && <div className={searchCss["frs-search__error"]} id="search__error">{error}</div>}
      {/* Dropdown list */}
      {/* Display the filtered states below the search bar */}
      {isFocused && search && (
        <div className={searchCss["frs-search__results"]}>
          {filteredStates.length > 0 ? (
            filteredStates.map((state) => (
              <div
                key={state.code}
                className={searchCss["frs-search__result-item"]}
                id="search-result"
              >
                {state.name}
              </div>
            ))
          ) : (
            <div className={searchCss["frs-search__no-results"]} id="no-results">
              No states found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
