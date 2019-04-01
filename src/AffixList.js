import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import SimpleKeyboard from "./SimpleKeyboard"; 

class AffixList extends Component {
	 constructor() {
	    super();
	    this.weblink = this.weblink.bind(this);
	    this.state = {
    		data: [], 
    		loading: true, 
		    salishSelected: false,
		    nicodemusSelected: true,
		    englishSelected: true,
		    linkSelected: false,
	    };
	  }

	weblink(link, page) {
		return (
			link === '' ? page : <a href={link} target="_blank" rel="noopener noreferrer">{page}</a>
		);
	}

	 handleSalishChange(value) {
	    this.setState({ salishSelected: !this.state.salishSelected });
	  };

	 handleNicodemusChange(value) {
	    this.setState({ nicodemusSelected: !this.state.nicodemusSelected });
	  };

	handleEnglishChange(value) {
	    this.setState({ englishSelected: !this.state.englishSelected });
	  };

	handleLinkChange(value) {
	    this.setState({ linkSelected: !this.state.linkSelected });
	  };
  async componentDidMount() {
    try {
      const response = await fetch(`http://localhost:4000/affixes`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ loading: false, data: json });
    } catch (error) {
      console.log("This is my Error: " + error);
      this.setState({ error: error });
    }
  }
	render() {

  	const { salishSelected, nicodemusSelected, englishSelected, linkSelected } = this.state;

 	const Checkbox = props => (
  		<input type="checkbox" {...props} />
		)

 	const getColumnWidth = (rows, accessor, headerText) => {
	  const maxWidth = 600
	  const magicSpacing = 15
	  const cellLength = Math.max(
	    ...rows.map(row => (`${row[accessor]}` || '').length),
	    headerText.length,
	  )
	  return Math.min(maxWidth, cellLength * magicSpacing)
	};


	  const columns = [{
	    Header: 'Type',
	    accessor: 'type',
	    width: getColumnWidth(this.state.data, 'type', 'Type'),
		filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    return row[filter.id] === filter.value;
                },
	    Filter: ({ filter, onChange }) =>
	            <select
	              onChange={event => onChange(event.target.value)}
	              style={{ width: "100%" }}
	              value={filter ? filter.value : "all"}
	            >
	              <option value="all">Show All</option>
	              <option value="Directional">Directional</option>
	              <option value="Locative">Locative</option>
	            </select>,
	  	},
	  {
	    Header: 'Salish',
	    accessor: 'salish',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["salish"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
        show: salishSelected,
	  	},
	  {
	    Header: 'Nicodemus',
	    accessor: 'nicodemus',
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["nicodemus"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
        show: nicodemusSelected,
	  	}, 
	  {
	    Header: 'English',
	    accessor: 'english',
	    style: { 'white-space': 'unset' }, 
	    filterMethod: (filter, rows) =>
        	matchSorter(rows, filter.value, { keys: ["english"], threshold: matchSorter.rankings.CONTAINS }),
            filterAll: true,
        show: englishSelected,
	  	}, 
	  {
	    Header: 'Link',
	    accessor: 'link',
	    Cell: ({row, original}) => ( this.weblink(original.link, original.page) ),
	    show: linkSelected,
	  }
	  ];

	const CheckboxAffix = () => (
		<div className="checkBoxMenu">
		  <label className="checkBoxLabel">Salish</label>
		  <input 
		  	name="salish"
            type="checkbox"
            checked={this.state.salishSelected}
            onChange={this.handleSalishChange.bind(this)}
          />
          <label className="checkBoxLabel">Nicodemus</label>
          <input
            name="nicodemus"
            type="checkbox"
            checked={this.state.nicodemusSelected}
            onChange={this.handleNicodemusChange.bind(this)}
          />
          <label className="checkBoxLabel">English</label>
          <input
            name="english"
            type="checkbox"
            checked={this.state.englishSelected}
            onChange={this.handleEnglishChange.bind(this)}
          />
          <label className="checkBoxLabel">Link</label>
          <input
            name="link"
            type="checkbox"
            checked={this.state.linkSelected}
            onChange={this.handleLinkChange.bind(this)}
          />
		</div>
	  );


    const dataOrError = this.state.error ?
      <div style={{ color: 'red' }}>Oops! Something went wrong!</div> :
      <ReactTable
        data={this.state.data}
        loading={this.state.loading}
        columns={columns}
        filterable
        defaultPageSize={10}
        className="-striped -highlight"
        className="left"
        filterable="true"
        filterAll="true"
      />;

	  return (
      <div className='ui content'>
		<p></p>
		<SimpleKeyboard />
		<p></p>
		<CheckboxAffix />
        <p></p>
		{dataOrError}
		</div>
	  );
	}
}

export default AffixList;
