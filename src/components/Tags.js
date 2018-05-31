import React from 'react';
import TagsInput from 'react-tagsinput';
import AutoSuggest from 'react-autosuggest';

const autoCompleteRenderInput = ({addTag, ...props}) => {
  console.log("props in auto", props)
  const handleOnChange = (e, {newValue, method}) => {
    if (method === 'enter') {
      e.preventDefault()
    } else {
      props.onChange(e)
    }
  };

  const {value, data, label} = props,
    inputValue = (value && value.trim().toLowerCase()) || '';
  console.log("data in auto", data)
  console.log("key in auto", label)

  let suggestions = data.filter((obj) => {
    return obj[label].toLowerCase().includes(inputValue);
  });


  return (
    <AutoSuggest
      suggestions={suggestions}
      shouldRenderSuggestions={(value) => value && value.trim().length > 0}
      getSuggestionValue={(suggestion) => suggestion.id}
      renderSuggestion={(suggestion) => <span>{suggestion[label]}</span>}
      inputProps={{...props, onChange: handleOnChange}}
      onSuggestionSelected={(e, {suggestion}) => {
        console.log("suggestion on selected", suggestion)
        addTag(suggestion[label])
      }}
      onSuggestionsClearRequested={() => {}}
      onSuggestionsFetchRequested={() => {}}
    />
  )
};

const Tags = (props) => {
  const {data, label} = props;
  return (
    <TagsInput renderInput={autoCompleteRenderInput}
      inputProps={{data, label}} {...props} onlyUnique />
  )
};

export default Tags;