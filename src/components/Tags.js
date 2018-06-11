import React from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';
import AutoSuggest from 'react-autosuggest';

const autoCompleteRenderInput = ({addTag, ...props}) => {
  console.log("props in auto", props)
 
  let suggestions;
  const {value, data, label, type} = props,
    inputValue = (value && value.trim().toLowerCase()) || '';

  if(type === 'string'){
    suggestions = data.filter((str) => {
      return str.toLowerCase().includes(inputValue);
    });
  } else {
    suggestions = data.filter((obj) => {
      return obj[label].toLowerCase().includes(inputValue);
    });
  }

  const handleOnChange = (e, {newValue, method}) => {
    if (method === 'enter') {
      e.preventDefault()
    } else {
      props.onChange(e)
    }
  };

  const renderSuggestion = (suggestion) => {
    return type === 'string' ? 
      <span>{suggestion}</span> : 
      <span>{suggestion[label]}</span>
  }

  const onSuggestionSelected = (e, {suggestion}) => {
    addTag(suggestion) 
  }

  return (
    <AutoSuggest
      suggestions={suggestions}
      shouldRenderSuggestions={(value) => value && value.trim().length > 0}
      getSuggestionValue={(suggestion) => suggestion.id}
      renderSuggestion={renderSuggestion}
      inputProps={{...props, onChange: handleOnChange}}
      onSuggestionSelected={onSuggestionSelected}
      onSuggestionsClearRequested={() => {}}
      onSuggestionsFetchRequested={() => {}}
    />
  )
};

// TODO: Feature need to be added.
// (1) Add select form autocomplete only,
// (2) get only one value rather than full object when type is object. 
const Tags = (props) => {
  const {data, label, type} = props;
  function defaultRenderTag (props) {
    let {tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other} = props
    console.log("tag", tag)
    return (
      <span key={key} {...other}>
        {getTagDisplayValue(type === 'string' ? tag : tag[label])}
        {!disabled &&
          <a className={classNameRemove} onClick={(e) => onRemove(key)} />
        }
      </span>
    )
  }

  return (
    <TagsInput renderInput={autoCompleteRenderInput} renderTag={defaultRenderTag}
      inputProps={{data, label, type}} {...props} onlyUnique />
  )
};

Tags.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object)
  ]).isRequired,
  type: PropTypes.oneOf(['string', 'object']), //Note: type define the typeof data either array of object or array of string.
  label: PropTypes.string,
};


Tags.defaultProps = {
  label: 'name',
  type: 'object'
};

export default Tags;