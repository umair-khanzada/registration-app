import React from 'react';
import TagsInput from 'react-tagsinput';
import AutoSuggest from 'react-autosuggest';

const autoCompleteRenderInput = ({addTag, ...props}) => {

  const handleOnChange = (e, {newValue, method}) => {
    if (method === 'enter') {
      e.preventDefault()
    } else {
      props.onChange(e)
    }
  };

  const {value, data, filterby} = props,
    inputValue = (value && value.trim().toLowerCase()) || '';
  console.log("data in auto", data)
  console.log("key in auto", filterby)

  let suggestions = data.filter((obj) => {
    return obj[filterby].toLowerCase().includes(inputValue);
  });

  return (
    <AutoSuggest
      ref={props.ref}
      suggestions={suggestions}
      shouldRenderSuggestions={(value) => value && value.trim().length > 0}
      getSuggestionValue={(suggestion) => suggestion.id}
      renderSuggestion={(suggestion) => <span>{suggestion[filterby]}</span>}
      inputProps={{...props, onChange: handleOnChange}}
      onSuggestionSelected={(e, {suggestion}) => {
        addTag(suggestion[filterby])
      }}
      onSuggestionsClearRequested={() => {}}
      onSuggestionsFetchRequested={() => {}}
    />
  )
};

const Tags = (props) => {
  const {data, filterby} = props;
  console.log("key in tags", filterby)
  return (
    <TagsInput renderInput={autoCompleteRenderInput}
      inputProps={{data, filterby}} {...props} onlyUnique />
  )
};

export default Tags;