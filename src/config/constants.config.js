/**
 * @file Application constants
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

export const FilterFormConfig = [
  {
    label: 'sort by',
    options: [
      { value: 'salary', text: 'salary', selected: true },
      { value: 'employee', text: 'employee', selected: false },
      { value: 'title', text: 'title', selected: false },
      { value: 'division', text: 'division', selected: false },
      { value: 'department', text: 'department', selected: false }
    ]
  },
  {
    label: 'order',
    options: [
      { value: 'desc', text: 'descending', selected: true },
      { value: 'asc', text: 'ascending', selected: false }
    ]
  }
]
