const field = Sudoku.generate(50)

    document
    .querySelector('#app')
    .append(field.getHTML(750))
