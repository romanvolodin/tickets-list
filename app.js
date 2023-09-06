function range(start, stop, step = 1) {
  if (typeof stop === 'undefined') {
    stop = start;
    start = 0;
  }
  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }
  let result = [];
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }
  return result;
}

function parse_seat_numbers(seat_numbers) {
  const seat_numbers_with_no_spaces = seat_numbers.replace(/\s/g, '')
  const chunks = seat_numbers_with_no_spaces.split(',')
  let output = []
  for (seats_range in chunks) {
    let [start, end] = seats_range
  }
}

function prepare_data(ticket_series, rows) {
  out = []

  rows.forEach(row => {
    let seats = parse_seat_numbers(row.seat_numbers)
  });

  return
}

const App = {
  data() {
    return {
      ticket_series: '',
      rows: [
        { seat_numbers: '', price: 0 },
        { seat_numbers: '', price: 0 },
        { seat_numbers: '', price: 0 },
        { seat_numbers: '', price: 0 },
        { seat_numbers: '', price: 0 },
        { seat_numbers: '', price: 0 },
        { seat_numbers: '', price: 0 },
        { seat_numbers: '', price: 0 },
        { seat_numbers: '', price: 0 },
        { seat_numbers: '', price: 0 },
      ],
    }
  },
  methods: {
    add_row() {
      this.rows.push({ seat_numbers: '', price: 0 })
    },
    export_xlsx() {
      let data = [
        ["Joa Doe", "joa@doe.com"],
        ["Job Doe", "job@doe.com"],
        ["Joe Doe", "joe@doe.com"],
        ["Jon Doe", "jon@doe.com"],
        ["Joy Doe", "joy@doe.com"]
      ];

      prepare_data(this.ticket_series, this.rows)

      let workbook = XLSX.utils.book_new()
      let worksheet = XLSX.utils.aoa_to_sheet(data);
      workbook.SheetNames.push("First");
      workbook.Sheets["First"] = worksheet;

      XLSX.writeFile(workbook, "demo.xlsx");
    }
  }
}

Vue.createApp(App).mount('#app')
