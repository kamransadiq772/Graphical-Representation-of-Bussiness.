export const data = [
    {
		title: 'Operation Wise Scanning',
		filters: ['lineCode', 'sectionCode'],
		route: '/lineSectionWise/',
		charts: [
			{
				type: 'Card',
				title: 'Line No',
				icon: 'Lines',
				grid_x: 4,
				grid_y: 2,
				dataKey: 'LineDescription'
			},
			{
				type: 'Card',
				title: 'Section',
				icon: 'Assembly',
				grid_x: 4,
				grid_y: 2,
				dataKey: 'SectionDescription'
			},
			{
				type: 'Card',
				title: 'Today Production',
				icon: 'Pents',
				grid_x: 4,
				grid_y: 2,
				dataKey: 'TodayProduction'
			},
			{
				type: 'BarChart',
				title: '',
				result_format: ['TotalPieces', 'OperationCode', 'OperationDescription', 'OperationSequence'],
				grid_x: 12,
				grid_y: 10,
				xLabel: 'Operation',
				xAngle: -23,
				yLabel: 'Pieces',
				// legend: true,
				bars: [{ label: 'TotalPieces' }]
			}
		]
	},
	{
		title: 'QC Progress Report',
		filters: ['lineCode', 'sectionCode'],
		route: '/lineSectionWise/',
		charts: [
			{
				type: 'Card',
				title: 'Line No',
				icon: 'Lines',
				grid_x: 4,
				grid_y: 2,
				dataKey: 'LineDescription'
			},
			{
				type: 'Card',
				title: 'Section',
				icon: 'Assembly',
				grid_x: 4,
				grid_y: 2,
				dataKey: 'SectionDescription'
			},
			{
				type: 'Card',
				title: 'Today DHU',
				icon: 'Dhu',
				grid_x: 4,
				grid_y: 2,
				dataKey: 'TodayDHU'
			},
			{
				type: 'PieChart',
				title: 'Today Defect Ratio',
				grid_x: 4,
				grid_y: 4,
				cell_column: 'Color',
				cells: BGRYColors,
				label: ['label']
			},
			{
				type: 'BarChart',
				title: 'Top 3 Faulty Operation',
				result_format: ['TotalFaults', 'OperationDescription'],
				grid_x: 8,
				grid_y: 4,
				xLabel: 'OperationDescription',
				yLabel: 'Faults',
				label: ['TotalFaults'],
				bars: [{ label: 'TotalFaults' }]
			},
			{
				type: 'BarChart',
				title: 'Fault Percentage Wise Breakup',
				result_format: ['FaultPercentage', 'FaultDescription'],
				grid_x: 12,
				grid_y: 6,
				xLabel: 'FaultDescription',
				xAngle: -23,
				yLabel: 'Percentage',
				bars: [{ label: 'FaultPercentage' }],
				barLabelPostfix: '%'
			}
		]
	},
	{
		title: 'Progress Report',
		filters: ['lineCode', 'sectionCode'],
		route: '/lineSectionWise/',
		charts: [
			{
				type: 'ProgressReport',
				title: 'ProgressReport',
				icon: 'bar',
				grid_x: 12,
				grid_y: 12,
				cards: [
					{
						type: 'Card',
						title: 'Total Quantity',
						icon: 'Lines',
						grid_x: 4,
						grid_y: 2,
						dataKey: 'TotalQuantity'
					},
					{
						type: 'Card',
						title: 'Production Till Date',
						icon: 'Shirt',
						grid_x: 4,
						grid_y: 2,
						dataKey: 'ProductionTillDate'
					},
					{
						type: 'Card',
						title: 'Balance',
						icon: 'balance',
						grid_x: 4,
						grid_y: 2,
						dataKey: 'Balance'
					},
					{
						type: 'Card',
						title: 'PPC Order Number',
						icon: 'ppc',
						grid_x: 8,
						grid_y: 2,
						dataKey: 'PpcOrderNum'
					},
					{
						type: 'Card',
						title: 'Today Production',
						icon: 'TodayProduction',
						grid_x: 4,
						grid_y: 2,
						dataKey: 'TodayProduction'
					},
					{
						type: 'Card',
						title: 'Style',
						icon: 'Style',
						grid_x: 8,
						grid_y: 2,
						dataKey: 'CBLStyle'
					},
					{
						type: 'Card',
						title: 'Order Status',
						icon: 'bar',
						grid_x: 4,
						grid_y: 2,
						dataKey: 'OrderStatus'
					}
				]
			}
		],

	},
	{
		title: 'Section Wise Worker Efficency Report',
		filters: ['lineCode'],
		route: '/lineSectionWise/',
		charts: [
			{
				type: 'Card',
				title: 'Line No',
				icon: 'Lines',
				grid_x: 4,
				grid_y: 2,
				dataKey: 'LineDescription'
			},
			{
				type: 'Card',
				title: 'Total Worker',
				icon: 'Worker',
				grid_x: 4,
				grid_y: 2,
			},
			{
				type: 'Card',
				title: 'Section Efficency',
				icon: 'SectionEfficiency',
				grid_x: 4,
				grid_y: 2,
			},
			{
				type: 'BarChart',
				title: '',
				result_format: ['UserID', 'UserName', 'Seconds Per Activity'],
				grid_x: 12,
				grid_y: 10,
				xLabel: 'UserName',
				xAngle: -23,
				yLabel: 'Worker Efficency %',
				bars: [{ label: 'Seconds Per Activity' }],
				barLabelPostfix: '%'
			}
		]
	},
]