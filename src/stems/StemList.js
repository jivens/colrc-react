import React, {
	Component
} from 'react';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import SimpleKeyboard from "../utilities/SimpleKeyboard";

class StemList extends Component {

	constructor() {
		super();
		this.state = {
			data: [],
			loading: true,
			reichardSelected: false,
			doakSelected: false,
			salishSelected: false,
			nicodemusSelected: true,
			englishSelected: true,
			noteSelected: false,
		};
	}

	handleReichardChange(value) {
		this.setState({
			reichardSelected: !this.state.reichardSelected
		});
	};

	handleDoakChange(value) {
		this.setState({
			doakSelected: !this.state.doakSelected
		});
	};

	handleSalishChange(value) {
		this.setState({
			salishSelected: !this.state.salishSelected
		});
	};

	handleNicodemusChange(value) {
		this.setState({
			nicodemusSelected: !this.state.nicodemusSelected
		});
	};

	handleEnglishChange(value) {
		this.setState({
			englishSelected: !this.state.englishSelected
		});
	};

	handleNoteChange(value) {
		this.setState({
			noteSelected: !this.state.noteSelected
		});
	};


	async componentDidMount() {
		try {
			const response = await fetch(`http://localhost:4000/stems`);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			const json = await response.json();
			this.setState({
				loading: false,
				data: json
			});
		} catch (error) {
			console.log("This is my Error: " + error);
			this.setState({
				error: error
			});
		}
	}

	render() {

		const {
			reichardSelected,
			doakSelected,
			salishSelected,
			nicodemusSelected,
			englishSelected,
			noteSelected
		} = this.state;


		const getColumnWidth = (rows, accessor, headerText) => {
			const maxWidth = 600
			const magicSpacing = 22
			const cellLength = Math.max(
				...rows.map(row => (`${row[accessor]}` || '').length),
				headerText.length,
			)
			return Math.min(maxWidth, cellLength * magicSpacing)
		};

		const columns = [{
			Header: 'Type',
			accessor: 'category',
			width: getColumnWidth(this.state.data, 'category', 'Type'),
			filterMethod: (filter, row) => {
				if (filter.value === "all") {
					return true;
				}
				return row[filter.id] === filter.value;
			},
			Filter: ({
					filter,
					onChange
				}) =>
				<
				select
			onChange = {
				event => onChange(event.target.value)
			}
			style = {
				{
					width: "100%"
				}
			}
			value = {
				filter ? filter.value : "all"
			} >
			<
			option value = "all" > Show All < /option> <
			option value = "verb" > Verbs < /option> <
			option value = "noun" > Nouns < /option> <
			option value = "other" > Other < /option> <
			/select>,
		}, {
			Header: 'Reichard',
			accessor: 'reichard',
			filterMethod: (filter, rows) =>
				matchSorter(rows, filter.value, {
					keys: ["reichard"],
					threshold: matchSorter.rankings.CONTAINS
				}),
			filterAll: true,
			show: reichardSelected,
		}, {
			Header: 'Doak',
			accessor: 'doak',
			filterMethod: (filter, rows) =>
				matchSorter(rows, filter.value, {
					keys: ["doak"],
					threshold: matchSorter.rankings.CONTAINS
				}),
			filterAll: true,
			show: doakSelected,
		}, {
			Header: 'Salish',
			accessor: 'salish',
			filterMethod: (filter, rows) =>
				matchSorter(rows, filter.value, {
					keys: ["salish"],
					threshold: matchSorter.rankings.CONTAINS
				}),
			filterAll: true,
			show: salishSelected,
		}, {
			Header: 'Nicodemus',
			accessor: 'nicodemus',
			filterMethod: (filter, rows) =>
				matchSorter(rows, filter.value, {
					keys: ["nicodemus"],
					threshold: matchSorter.rankings.CONTAINS
				}),
			filterAll: true,
			show: nicodemusSelected,
		}, {
			Header: 'English',
			accessor: 'english',
			style: {
				'white-space': 'unset'
			},
			filterMethod: (filter, rows) =>
				matchSorter(rows, filter.value, {
					keys: ["english"],
					threshold: matchSorter.rankings.CONTAINS
				}),
			filterAll: true,
			show: englishSelected,
		}, {
			Header: 'Note',
			accessor: 'note',
			style: {
				'white-space': 'unset'
			},
			filterMethod: (filter, rows) =>
				matchSorter(rows, filter.value, {
					keys: ["note"],
					threshold: matchSorter.rankings.CONTAINS
				}),
			filterAll: true,
			show: noteSelected,
		}];

		const CheckboxStem = () => ( <
			div className = "checkBoxMenu" >
			<
			label className = "checkBoxLabel" > Reichard < /label> <
			input name = "reichard"
			type = "checkbox"
			checked = {
				this.state.reichardSelected
			}
			onChange = {
				this.handleReichardChange.bind(this)
			}
			/> <
			label className = "checkBoxLabel" > Doak < /label> <
			input name = "doak"
			type = "checkbox"
			checked = {
				this.state.doakSelected
			}
			onChange = {
				this.handleDoakChange.bind(this)
			}
			/> <
			label className = "checkBoxLabel" > Salish < /label> <
			input name = "salish"
			type = "checkbox"
			checked = {
				this.state.salishSelected
			}
			onChange = {
				this.handleSalishChange.bind(this)
			}
			/> <
			label className = "checkBoxLabel" > Nicodemus < /label> <
			input name = "nicodemus"
			type = "checkbox"
			checked = {
				this.state.nicodemusSelected
			}
			onChange = {
				this.handleNicodemusChange.bind(this)
			}
			/> <
			label className = "checkBoxLabel" > English < /label> <
			input name = "english"
			type = "checkbox"
			checked = {
				this.state.englishSelected
			}
			onChange = {
				this.handleEnglishChange.bind(this)
			}
			/> <
			label className = "checkBoxLabel" > Note < /label> <
			input name = "Note"
			type = "checkbox"
			checked = {
				this.state.noteSelected
			}
			onChange = {
				this.handleNoteChange.bind(this)
			}
			/> <
			/div>
		);

		const dataOrError = this.state.error ?
			<
			div style = {
				{
					color: 'red'
				}
			} > Oops!Something went wrong! < /div> : <
			ReactTable
		data = {
			this.state.data
		}
		loading = {
			this.state.loading
		}
		columns = {
			columns
		}
		defaultPageSize = {
			5
		}
		className = "-striped -highlight left"
		filterable = "true"
		filterAll = "true" /
			> ;
		return ( <div className = 'ui content'>
			<p> < /p> 
			<SimpleKeyboard / >
			<p> Stem type as listed by Reichard, 'Other' = 'Adverbs, Interjections, Conjunctions' </p> 
			<CheckboxStem / > 
			{dataOrError} 
			<p> </p> 
			</div>
		);
	}
}



export default StemList;
